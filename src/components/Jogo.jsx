import React, { Component } from 'react';
import '../style/estilo.css';
import Play from './Play';



class Jogo extends Component {
    render() {
        return (
            <section className="container jogar_agora">
                <h1 className="jogar_agora_titulo">
                    JOGAR AGORA!
                </h1>
                <Play/>
            </section>
        )
    }
}

export default Jogo