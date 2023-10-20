import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { AUTOCOMPLETE_SEARCH_URL, AREA_RESTAURANTS_FETCH_URL } from '../../utils/cdn_urls';
import { getLocationData, getAddress } from '../../redux/actions/cusinesActions';

const LocationContainer = (props) => {
    const { getLocationData, getAddress, address } = props
    const [showLocationPopUp, setShowLocationPopUp] = useState(false);
    const [searchKey, setSearchKey] = useState();
    const [locationList, setLocationList] = useState();
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [error, setError] = useState(null);
    const [areaLatLong, setAreaLatLong] = useState({});
    const [placeId, setPlaceId] = useState();
    const location = {};
    console.log("address", address)
    const getSerachValues = (e) => {
        // const { name, value } = e.target;
        // console.log(e.target.value);
        (e.target.value) ? setSearchKey(e.target.value) : setSearchKey([])

    }
    // console.log(searchKey)

    useEffect(() => {
        const url = AUTOCOMPLETE_SEARCH_URL + searchKey;
        const fetchData = async () => {
            try {
                if (searchKey) {
                    const response = await fetch(url);
                    const json = await response.json();
                    // console.log(json.data);
                    setLocationList(json.data)
                }

            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, [searchKey]);

    useEffect(() => {
        // Check if the browser supports geolocation
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    // Extract latitude and longitude from the position object
                    const { latitude, longitude } = position.coords;
                    setLatitude(latitude);
                    setLongitude(longitude);
                },
                (error) => {
                    // Handle errors if geolocation is not available or if the user denies permission
                    setError(error.message);
                }
            );
        } else {
            setError("Geolocation is not supported by your browser.");
        }
    }, []);

    const fetchAreaRestaurants = async (place_id) => {
        try {
            if (searchKey) {
                setPlaceId(place_id)
                const response = await fetch(AREA_RESTAURANTS_FETCH_URL + place_id);
                const json = await response.json();
                // console.log(json.data[0].geometry.location);
                setAreaLatLong(json.data[0].geometry.location)
                getLocationData(json.data[0].geometry.location)
                // setLocationList(json.data)
            }

        } catch (error) {
            console.log("error", error);
        }
    };
    // console.log(areaLatLong)
    let latlongurl = `https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=${areaLatLong.lat}&lng=${areaLatLong.lng}`
    console.log("latlongurl", latlongurl)
    // useEffect(() => {
    const fetchSearchArea = async () => {
        try {
            if (searchKey) {
                const response = await fetch(latlongurl);
                const json = await response.json();
                console.log("area data", json.data);
                //getLocationData(json.data)
            }

        } catch (error) {
            console.log("error", error);
        }
    };
    fetchSearchArea();
    // },[placeId, searchKey])


    const getAreaRestraunts = (place_id, address, name) => {
        console.log(place_id, address);
        fetchAreaRestaurants(place_id);
        getAddress(address, name);
        setShowLocationPopUp(false)
    }

    return (
        <div className="location-container">
            <span className='locationLabel'> {address ? address.address : ""}</span>
            <div
                className={`location-text ${showLocationPopUp ? 'active' : ''}`}
                onClick={() => setShowLocationPopUp(!showLocationPopUp)}>
                {address ? address.name.substring(0, 30) + "..." : ""}
                <span className="arrow-down">
                    <i className="fa-solid fa-angle-down" />
                </span>

            </div>

            <div className={`location-slider ${showLocationPopUp ? 'active' : ''}`}>
                <button className="close-button" onClick={() => {
                    setShowLocationPopUp(false); setSearchKey([]);
                    //setAreaLatLong({})
                }}>
                    ✕
                </button>
                <input
                    type="text"
                    placeholder="Enter your location"
                    className="slider-container"
                    value={searchKey}
                    onChange={getSerachValues}
                />
                <div className='autocomplete-list'>
                    <div className="autocomplete-locations-container">
                        <div className="autocomplete-location" >
                            <div className="icon-location"> <i class="fa-solid fa-location-crosshairs"></i></div>
                            <div className="autocomplete-details">
                                <div className="location-name">Get Current Location</div>
                                <div className="location-address">Using GPS</div>
                            </div>
                        </div>
                        {locationList?.map((location) => {
                            return (
                                <>
                                    <div className="autocomplete-location" key={location.place_id} >
                                        <div className="icon-location"> <i class='fas fa-map-marker-alt' style={{ fontSize: "20px" }}></i></div>
                                        <div className="autocomplete-details">
                                            <div className="location-name" onClick={() => getAreaRestraunts(location.place_id, location.description, location.structured_formatting.main_text)}>{location.structured_formatting.main_text}</div>
                                            <div className="location-address">{location.description}</div>
                                        </div>
                                    </div>
                                </>
                            )
                        })}

                    </div>
                </div>
            </div>
        </div >
    )
}



const mapStateToProps = (state) => ({
    address: state.cusinesReducer.address
})

const mapDispatchToProps = {
    getLocationData,
    getAddress
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationContainer)
