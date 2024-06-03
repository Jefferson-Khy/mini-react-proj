import React from 'react';

function Geolocation() {
  const geoFindMe = () => {
    const status = document.querySelector("#status");
    const mapLink = document.querySelector("#map-link");

    mapLink.href = "";
    mapLink.textContent = "";

    function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      status.textContent = "";
      mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
      mapLink.textContent = `See location here`;
    }

    function error() {
      status.textContent = "Unable to retrieve your location";
    }

    if (!navigator.geolocation) {
      status.textContent = "Geolocation is not supported by your browser";
    } else {
      status.textContent = "Locating…";
      navigator.geolocation.getCurrentPosition(success, error);
    }
  };

  return (
    <>
      <button id="find-me" onClick={geoFindMe}>Find my location</button>
      <p id="status"></p>
      <a id="map-link" target="_blank" rel="noopener noreferrer"></a>
    </>
  );
}

export default Geolocation;
