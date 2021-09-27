import React, { Component, Fragment } from 'react'
import Play from './Play'
import Footer from './Footer'
import '../style/Jogo.css'
import '../style/public.css'


class Jogo extends Component {
    render() {
        return (
            <Fragment>
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