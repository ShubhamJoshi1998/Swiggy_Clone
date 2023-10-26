
import React, { useState } from 'react';

function Help() {
  const [showLocationPopUp, setShowLocationPopUp] = useState(true);
  const [location, setLocation] = useState('');
  const [loadingLocations, setLoadingLocations] = useState(false); // Replace with your loading logic
  const possibleLocations = []; // Replace with your location data

  const selectedLocation = (selected) => {
    // Handle selected location logic
  };

  return (
    <div className={`popup-container ${showLocationPopUp ? 'active' : ''}`}>
      <div className="m-10">
        <div className="close-button" onClick={() => setShowLocationPopUp(false)}>
          <img
            alt="close"
            src="https://static.thenounproject.com/png/1202535-200.png"
            className="close-icon"
          />
        </div>
        <div className="input-container">
          <input
            className="location-input"
            placeholder="Search for area, street name..."
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="locations-list">
          {loadingLocations ? (
            <div>Fetching Locations...</div>
          ) : (
            possibleLocations &&
            possibleLocations.map((location) => (
              <div
                key={location.place_id}
                className="location-item cursor-pointer"
                onClick={() => selectedLocation(location)}
              >
                <div className="location-details">
                  <img
                    src="https://cdn2.iconfinder.com/data/icons/cv-curriculum-vitae/100/set-cv2-15-512.png"
                    alt="location"
                    className="location-icon"
                  />
                  <div className="location-info">
                    <div className="location-name font-bold text-md hover-text-orange-500">
                      {location.place}
                    </div>
                    <div className="location-address text-sm text-gray-600">
                      {location.address}
                    </div>
                  </div>
                </div>
                <div className="separator"></div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Help;
