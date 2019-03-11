import React from 'react';

export default function Footer(props) {
    return (
        <footer className="weather-channel__footer">
        <p>Powered by &nbsp;
            <a href="https://www.apixu.com/" title="Free Weather API" margin="20">
            <img src='//cdn.apixu.com/v4/images/apixu-logo-1.png' alt="Weather data by Apixu.com" width="50" align="top" vspace="5"/>
            </a>
            </p>
        </footer>
    );
}