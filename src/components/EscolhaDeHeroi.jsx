import React, { useEffect, useState } from 'react';
import '../style/public.css'
import '../style/EscolhaDeHeroi.css'

import { connect } from 'react-redux'

function toggleEscolha(heroi){
    return {
        type: 'PLAYER_CHANGED',
        payload: {
            heroi
        }
    }
}


const EscolhaDeHeroi = ({herois, dispatch}) => {


    return (
        <section className="escolha_heroi_box container">
            <h1 className="escolha_heroi_titulo">
                ESCOLHA SEU HEROI !
            </h1>
            <div className="escolha_heroi">
                <ul className="lista_herois_box">
                    {
                        herois.map((heroi) => (
                            <li onClick={() => dispatch(toggleEscolha(heroi))}
                                className="lista_herois" key={heroi.id}>
                                <img src={heroi.image} className="img_heroi" alt="herois" />
                                <h3 className="name_heroi">
                                    {heroi.name}
                                </h3>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section >
    )
}

export default connect(state => ({ herois: state.herois}))(EscolhaDeHeroi)
