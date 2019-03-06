import React from 'react';

export default function CityCondition(props) {
  const {city, weather, temp, humidity} = props.data;
  return (
    <div >
    <div className="weather-condition__location">{props.data.city}</div>
    <div className="weather-condition__temp">{props.data.temp}&#176;c</div>
    <div className="humidity">{props.data.humidity}</div>
    </div>
  );
}
