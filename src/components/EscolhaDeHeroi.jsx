import React, { useEffect, useState } from 'react';
import '../style/public.css'
import '../style/EscolhaDeHeroi.css'

import { busca } from '../api/api'

const EscolhaDeHeroi = ({ url }) => {

    const [herois, setHerois] = useState([])

    useEffect(() => {
        busca(url, setHerois)
    }, [])

    const [escolha, setEscolha] = useState("")

    useEffect(() => {
        console.log(escolha)
    })

    const handleChoice = id => {
        setEscolha(herois.filter(heroi => heroi.id === id)[0])
    }

    return (
        <section className="escolha_heroi_box container">
            <h1 className="escolha_heroi_titulo">
                ESCOLHA SEU HEROI !
            </h1>
            <div className="escolha_heroi">
                <ul
                    className="lista_herois_box">
                    {
                        herois.map((heroi) => (
                            <li onClick={() => handleChoice(heroi.id)}
                                className="lista_herois" key={heroi.id}>
                                <img src={heroi.image} className="img_heroi" alt="herois"/>
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


export default EscolhaDeHeroi;