import React, { Component } from 'react';
import '../style/public.css'
import '../style/EscolhaDeHeroi.css'

import { bindActionCreators } from "redux"
import { connect } from 'react-redux'

import { toggleEscolha } from "../store/actions"


class EscolhaDeHeroi extends Component {

    render() {

        const { initialState } = this.props.EscolhaDeHeroiState

        return (
            <section className="escolha_heroi_box container">
                <h1 className="escolha_heroi_titulo">
                    ESCOLHA SEU HEROI !
                </h1>
                <div className="escolha_heroi">
                    <ul className="lista_herois_box">
                        {
                            initialState.map((initialState) => (
                                <li onClick={() => dispatch(toggleEscolha(initialState.herois))}
                                    className="lista_herois" key={initialState.herois.id}>
                                    <img src={initialState.herois.image} className="img_heroi" alt="herois" />
                                    <h3 className="name_heroi">
                                        {initialState.herois.name}
                                    </h3>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </section >
        )
    }
}

const mapStateToProps = state => ({
    AppState: state.AppState,
    EscolhaDeHeroiState: state.EscolhaDeHeroiState
})

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ toggleEscolha }, dispatch)
}

export default connect( mapDispatchToProps, mapStateToProps)(EscolhaDeHeroi)
