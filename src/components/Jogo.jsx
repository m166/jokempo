import React, { Component } from 'react';
import '../style/estilo.css';
import homem_de_ferro from '../img/homem_de_ferro.png';
import x_combat from '../img/x_combat.png';
import capitao_america from '../img/capitao_america.png';
import Play from './Play';

const TelaResultado = () =>{
    return(
        <div>
            <h1 className="resultado_jokempo">
                
            </h1>
        </div>
    );
}

class Jogo extends Component {
    render() {
        return (
            <section className="container jogar_agora">
                <h1 className="jogar_agora_titulo">
                    JOGAR AGORA!
                </h1>

                <div className="resultado_tela">
                    <img className="play_icon" src={capitao_america} alt="Capitão America" />
                    <img className="x_combat" src={x_combat} alt="x_combat" />
                    <img className="play_icon" src={homem_de_ferro} alt="Homem de Ferro" />
                </div>   
                
                <TelaResultado/>
                
                <Play/>
            </section>
        )
    }
}

export default Jogo