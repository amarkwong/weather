import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './style/main.css';

import Header from './Header';
import Footer from './Footer';
import CityCondition from './CityCondition';
import Forecaster from './Forecaster';
import WeatherChannel from './WeatherChannel';

export default class App extends React.Component {
  render() {
    return (
      <div className="weather-channel__container">
      <Header/>
      <WeatherChannel/>
      <Footer/> 
      </div>
    );
  }
}
