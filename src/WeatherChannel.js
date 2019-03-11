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
                city:  '',
                temp: '',
                weather: '',
            },
            days:  [
                {weekday:'',high:'',low:'',icon:''},
                {weekday:'',high:'',low:'',icon:''},
                {weekday:'',high:'',low:'',icon:''},
            ]
        }
    }
    componentDidMount()
    {
        this.handleSearch();
    }

    handleCityChange(event){
        const value=event.target.value;
        this.setState({curCity: value});
    }
    onConditionLoad(data){
        console.log('condition',data);
        const condition={
            //console.log(data.display_location)
            city:data.location.name,
            //temp: {C:data.temp_c,F:data.temp_f},
            temp:data.current.temp_c,
            uv:data.current.uv,
            weather: data.current.condition.text,
            humidity: data.current.humidity,
        }
        this.setState({condition:condition});
    }
    onForecastLoad(data){
        console.log('forecast',data);
        let foredays=data.forecastday.map(day=>({
            weekday:getDayOfWeek(day.date),
            highC:day.day.maxtemp_c.toFixed(1),
            high:day.day.maxtemp_c.toFixed(1),
            highF:day.day.maxtemp_f.toFixed(1),
            low:day.day.mintemp_c.toFixed(1),
            lowC:day.day.mintemp_c.toFixed(1),
            lowF:day.day.mintemp_f.toFixed(1),
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