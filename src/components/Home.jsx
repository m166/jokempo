import React, { Component, Fragment } from 'react';
import Footer from './Footer';
import Header from './Header';
import '../style/public.css'
import '../style/Home.css'

class Home extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <div className="home_box container">
                    <button>
                        ARENA
                        <span>Multiplayer</span>
                    </button>
                    <button>
                        AVENTURA
                        <span>Computer</span>
                    </button>
                </div>
                <Footer/>
            </Fragment>
        )
    }
}

export default Home;