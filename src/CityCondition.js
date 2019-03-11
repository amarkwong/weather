import React from 'react';
import uv from './icon/weather-uv.png';
import humidity from './icon/weather-humidity.png';

export default function CityCondition(props) {
  // const {city, weather, temp, humidity} = props.data;
  return (
    <div >
    <div className="weather-condition__location">{props.data.city}</div>
    <div className="weather-condition__temp">{props.data.temp}&#176;c</div>
    <div className="weather-condition__location">{props.data.weather}</div>
    <div className="weather-condition__desc">
      <div>
        <img src={uv} width="20" alt=""/><span>&nbsp;{props.data.uv}/10</span>
      </div>
      <div>
        <img src={humidity} width="20" alt=""/><span>&nbsp;{props.data.humidity}</span>
      </div>
			{/* <span className="weather-forecast__icon"><img src="./icon/weather-humidity.png"/></span>
			<span className="weather-forecast__low">{props.data.humidity}</span>
			<span className="weather-forecast__icon"><img src="./icon/weather-uv.png"/></span>
			<span className="weather-forecast__low">{props.data.uv}</span> */}
		</div>
    {/* <div className="weather-condition__humidity">{props.data.}</div> */}
    </div>
  );
}
