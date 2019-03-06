import React from 'react';
import logo from './icon/logo.png'
import {Icon} from 'react-fa'

export default function Header(props) {
    return (
        <header>
            <image className="header__logo" src={logo}></image>
            <h1 className="header__title">Weather Channel</h1>
        </header>
    );
}
