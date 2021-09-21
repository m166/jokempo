import React, { Component } from 'react'
import pedra from '../img/pedra.png'
import papel from '../img/papel.png'
import tesoura from '../img/tesoura.png'
import Jokempo from './Jokempo.js'

const VAL_PEDRA = 1
const VAL_TESOURA = 2
const VAL_PAPEL = 3

const intialState = {
    jogar : false,
    opcao: null
}

class Play extends Component {
    constructor(props) {
        super(props)

        this.state = { ...intialState }
        this.handleClick = this.handleClick.bind(this)
        this.handleChoose = this.handleChoose.bind(this)
    }     

    handleClick = event => {
        event.preventDefault()
        this.setState(prevState => ({jogar: !prevState.jogar}))
    }

    handleChoose = event => {
        event.preventDefault()
        this.setState({opcao: Number(event.target.getAttribute("data-value"), 10)})
    }

    render() {
        const {jogar, opcao}=this.state
        return (
            <div className="escolhe_opcao">                
                <figure className={`invisivel${jogar ? " aparece_box" : " "}`}>
                    <a className={`opcao`} onClick={(e) => this.handleChoose(e)} href="###">
                        <img className="img_jokempo" data-value={VAL_PEDRA} src={pedra} alt="pedra" />
                    </a>
                    <a className={`opcao`} onClick={(e) => this.handleChoose(e)} href="###">
                        <img className="img_jokempo" data-value={VAL_PAPEL} src={papel} alt="papel" />
                    </a>
                    <a className={`opcao`} onClick={(e) => this.handleChoose(e)} href="###">
                        <img className="img_jokempo" data-value={VAL_TESOURA} src={tesoura} alt="tesoura" />
                    </a>
                </figure>
                <button className={`button_play${jogar ? " invisivel" : ""}`} onClick={(e) => this.handleClick(e)}>
                    <a className="play" href="###">PLAY</a>
                </button>
                <Jokempo opcao={opcao} />
            </div>
        )
    }
}

export default Play
