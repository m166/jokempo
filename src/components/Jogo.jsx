import React, { Component, Fragment } from 'react'
import Play from './Play'
import Header from './Header'
import '../style/Jogo.css'
import '../style/public.css'
import Footer from './Footer'


class Jogo extends Component {
    render() {
        return (
            <Fragment>
                <Header/>
                <section className="container jogar_agora">
                    <h1 className="jogar_agora_titulo">
                        JOGAR AGORA!
                    </h1>
                    <Play />
                </section>
                <Footer/>
            </Fragment>
        )
    }
}

export default Jogo