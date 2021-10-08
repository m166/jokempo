import React, { useEffect, useState } from 'react';
import '../style/public.css'
import '../style/EscolhaDeHeroi.css'

import { busca } from '../api/api'

import { bindActionCreators } from "redux"
import { connect } from 'react-redux'

import { setHeroiPlayer, setHeroiPC } from "../store/actions"

const EscolhaDeHeroi = ({url}) => {

    const [herois, setHerois] = useState([])

    useEffect(() => {
        busca(url, setHerois)
    }, [])

    const handlePlayer = heroi => {
        setHeroiPlayer(heroi)
    }

    const handlePC = heroi => {
        setHeroiPC(heroi)
    }

    return(
        <section className="escolha_heroi_box container">
                <h1 className="escolha_heroi_titulo">
                    ESCOLHA SEU HEROI !
                </h1>
                <div className="escolha_heroi">
                    <ul className="lista_herois_box">
                        {
                            herois.map((heroi) => (
                                <li onClick={(heroi) => handlePlayer(heroi)}
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

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ setHeroiPlayer, setHeroiPC }, dispatch)
}

export default connect( null, mapDispatchToProps)(EscolhaDeHeroi)
