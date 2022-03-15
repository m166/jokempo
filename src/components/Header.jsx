import React, { Component } from 'react'
import '../style/Header.css'
import '../style/public.css'
import jokempo from '../img/jokempo.png'

class Header extends Component {
    render() { 
        return (
            <header className="App_header container">
                    <img src= {jokempo}  alt="jokempo" />
            </header>
        );
    }
}

export default Header;
