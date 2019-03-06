import React, {Component} from 'react';
import axios from 'axios';

import CityCondition from './CityCondition';
import Forecaster    from './Forecaster';

import {fetchConditionData,fetchForecastData} from './api/weather.js'

function getDayOfWeek(date) {
    var dayOfWeek = new Date(date).getDay();
    return isNaN(dayOfWeek) ? null : ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][dayOfWeek];
}


export default class WeatherChannel extends Component {
    constructor(props) {
        super(props);
        // use static data to fill initial state first
        this.state = {
            curCity:'Brisbane',
            condition: {
                city:  'Brisbane, Au',
                temp: '13',
                weather: 'Clear',
            },
            days:  [
                {weekday: 'Wed', high:23, low:18, icon:'http://icons.wxug.com/i/c/k/clear.gif'},
                {weekday: 'Thu', high:29, low:18, icon:'http://icons.wxug.com/i/c/k/chancerain.gif'},
                {weekday: 'Fri', high:20, low:10, icon:'http://icons.wxug.com/i/c/k/chancerain.gif'}
            ]
        }
    }

    handleCityChange(event){
        const value=event.target.value;
        this.setState({curCity: value});
    }
    onConditionLoad(data){
        const condition={
            //console.log(data.display_location)
            city:data.location.name,
            //temp: {C:data.temp_c,F:data.temp_f},
            temp:data.current.temp_c,
            uv:data.current.uv,
            weather: data.current.condition.text,
            humidity: data.current.condition.humidity,
        }
        this.setState({condition:condition});
    }
    onForecastLoad(data){
        let foredays=data.forecastday.map(day=>({
            weekday:getDayOfWeek(day.date),
            highC:day.day.maxtemp_c,
            high:day.day.maxtemp_c,
            highF:day.day.maxtemp_f,
            low:day.day.mintemp_c,
            lowC:day.day.mintemp_c,
            lowF:day.day.mintemp_f,
            uv:day.uv,
            icon:day.day.condition.icon
        }));
        this.setState({days:foredays});
    }

    handleSearch(event){
       const city= this.state.curCity;
        fetchConditionData(city).then(data=>{
            this.onConditionLoad(data);
        });
        fetchForecastData(city).then(data=>{
            this.onForecastLoad(data);
        })
    }
    render() {
        return (
            <React.Fragment>
            <nav>
            <div style={{flex:1}}>
                <input className="search-input" value={this.state.curCity} onChange={this.handleCityChange.bind(this)}/>
                <button className="search-btn" onClick={this.handleSearch.bind(this)}><i className="fa fa-search" /></button>
            </div>
            </nav>
            <main>
                <section className='weather-condition'>
                    <CityCondition data={this.state.condition} />
                </section>
                <section className='weather-forecast'>
                    <Forecaster days={this.state.days} />
                </section>
            </main>
            </React.Fragment>
        )
    }
}