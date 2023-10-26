import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { AUTOCOMPLETE_SEARCH_URL, AREA_RESTAURANTS_FETCH_URL } from '../../utils/cdn_urls';
import { getLocationData, getAddress } from '../../redux/actions/cusinesActions';

const LocationContainer = ({ address, getLocationData, getAddress }) => {
    const [showLocationPopUp, setShowLocationPopUp] = useState(false);
    const [searchKey, setSearchKey] = useState('');
    const [locationList, setLocationList] = useState([]);
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [error, setError] = useState(null);
    const [areaLatLong, setAreaLatLong] = useState({});
    const [placeId, setPlaceId] = useState();

    useEffect(() => {
        // Fetch location data when searchKey changes
        const fetchData = async () => {
            try {
                if (searchKey) {
                    const url = AUTOCOMPLETE_SEARCH_URL + searchKey;
                    const response = await fetch(url);
                    const json = await response.json();
                    setLocationList(json.data);
                }
            } catch (error) {
                console.log('error', error);
            }
        };

        fetchData();
    }, [searchKey]);

    useEffect(() => {
        // Check if the browser supports geolocation
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setLatitude(latitude);
                    setLongitude(longitude);
                },
                (error) => {
                    setError(error.message);
                }
            );
        } else {
            setError('Geolocation is not supported by your browser.');
        }
    }, []);

    const fetchAreaRestaurants = async (placeId) => {
        try {
            if (searchKey) {
                setPlaceId(placeId);
                const response = await fetch(AREA_RESTAURANTS_FETCH_URL + placeId);
                const json = await response.json();
                setAreaLatLong(json.data[0].geometry.location);
                getLocationData(json.data[0].geometry.location);
            }
        } catch (error) {
            console.log('error', error);
        }
    };

    useEffect(() => {
        // Fetch area restaurants when placeId and searchKey change
        if (placeId && searchKey) {
            const latlongurl = `https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=${areaLatLong.lat}&lng=${areaLatLong.lng}`;
            const fetchSearchArea = async () => {
                try {
                    const response = await fetch(latlongurl);
                    const json = await response.json();
                } catch (error) {
                    console.log('error', error);
                }
            };
            fetchSearchArea();
        }
    }, [placeId, searchKey, areaLatLong]);

    const getAreaRestaurants = (placeId, address, name) => {
        fetchAreaRestaurants(placeId);
        getAddress(address, name);
        setShowLocationPopUp(false);
    };

    return (
        <div className="location-container">
            <span className="locationLabel">{address ? address.address : ''}</span>
            <div
                className={`location-text ${showLocationPopUp ? 'active' : ''}`}
                onClick={() => setShowLocationPopUp(!showLocationPopUp)}
            >
                {address ? `${address.name.substring(0, 30)}...` : ''}
                <span className="arrow-down">
                    <i className="fa-solid fa-angle-down" />
                </span>
            </div>

            <div className={`location-slider ${showLocationPopUp ? 'active' : ''}`}>
                <button className="close-button" onClick={() => {
                    setShowLocationPopUp(false);
                    setSearchKey('');
                }}>
                    ✕
                </button>
                <input
                    type="text"
                    placeholder="Enter your location"
                    className="slider-container"
                    value={searchKey}
                    onChange={(e) => setSearchKey(e.target.value)}
                />
                <div className="autocomplete-list">
                    <div className="autocomplete-locations-container">
                        <div className="autocomplete-location">
                            <div className="icon-location">
                                <i className="fa-solid fa-location-crosshairs"></i>
                            </div>
                            <div className="autocomplete-details">
                                <div className="location-name">Get Current Location</div>
                                <div className="location-address">Using GPS</div>
                            </div>
                        </div>
                        {locationList?.map((location) => (
                            <div className="autocomplete-location" key={location.place_id}>
                                <div className="icon-location">
                                    <i className="fas fa-map-marker-alt" style={{ fontSize: '20px' }}></i>
                                </div>
                                <div className="autocomplete-details">
                                    <div className="location-name" onClick={() => getAreaRestaurants(location.place_id, location.description, location.structured_formatting.main_text)}>{location.structured_formatting.main_text}</div>
                                    <div className="location-address">{location.description}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    address: state.cusinesReducer.address,
});

const mapDispatchToProps = {
    getLocationData,
    getAddress,
};

export default connect(mapStateToProps, mapDispatchToProps)(LocationContainer);
