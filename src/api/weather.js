import axios from 'axios';
const CONDITION_BASE_URL=
'https://api.apixu.com/v1/current.json?key=0c3d87d1badb445d924114814190603';
// 'http://api.wunderground.com/api/f029e46fd0232d12/geolookup/conditions/q/Australia/';
const FORECAST_BASE_URL=
'https://api.apixu.com/v1/forecast.json?key=0c3d87d1badb445d924114814190603';
// 'http://api.wunderground.com/api/f029e46fd0232d12/geolookup/forecast10day/q/Australia/';

export function fetchConditionData(city) {
    const url=`${CONDITION_BASE_URL}&q=${city}`;
    console.log('Cur FIRED ',url);
    return axios.get(url).then(res=>res.data);
}
export function fetchForecastData(city){
    const url=`${FORECAST_BASE_URL}&q=${city}&days=7`;
    return axios.get(url).then(res=> res.data.forecast);
}