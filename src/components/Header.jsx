import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../style/Header.css'
import '../style/public.css'
import jokempo from '../img/jokempo.png'

class Header extends Component {
    render() { 
        return (
            <header className="App_header container">
                <Link to = "/" className="">
                    <img src= {jokempo}  alt="jokempo" />
                </Link>
            </header>
        );
    }
}

export default Header;
