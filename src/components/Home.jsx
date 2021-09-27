import React, { Component, Fragment } from 'react';
import Footer from './Footer';
import '../style/public.css'
import '../style/Home.css'
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <Fragment>
                <section className="home_box container">
                    <h1 className="bora_jogar_titulo">
                        BORA PARA O GAME!
                    </h1>
                    <div className="escolhe_arena_aventura">
                        <Link to="/escolha_de_heroi" className="link_escolha">
                            <button className="arena_button arena_aventura">
                                <h1>
                                    ARENA
                                </h1>
                                <span>MULTIPLAYER</span>
                            </button>
                        </Link>
                        <Link to="/escolha_de_heroi" className="link_escolha">
                            <button className="aventura_button arena_aventura">
                                <h1>
                                    AVENTURA
                                </h1>
                                <span>COMPUTER</span>
                            </button>
                        </Link>
                    </div>
                </section>
                <Footer />
            </Fragment>
        )
    }
}

export default Home;