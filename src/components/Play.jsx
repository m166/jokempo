import React, { Component } from 'react'
import pedra from '../img/pedra.png'
import papel from '../img/papel.png'
import tesoura from '../img/tesoura.png'
import Jokempo from './Jokempo'
import homem_de_ferro from '../img/homem_de_ferro.png';
import x_combat from '../img/x_combat.png';
import capitao_america from '../img/capitao_america.png';

const VAL_PEDRA = 1
const VAL_TESOURA = 2
const VAL_PAPEL = 3

const intialState = {
    jogar: false,
    opcao: null,
    imgEscolhida: null
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
        this.setState(prevState => ({ jogar: !prevState.jogar }))
    }

    handleChoose = event => {
        event.preventDefault()
        this.setState({ opcao: Number(event.target.getAttribute("data-value"), 10) })
        this.setState({ imgEscolhida: (event.target.getAttribute("src")) })
    }

    setValue = value => {
        console.log(value)
    }

    render() {
        const { jogar, opcao, imgEscolhida } = this.state
        return (
            <div>
                <div className="resultado_tela">
                    <img className="play_icon" src={capitao_america} alt="Capitão America" />
                    <img className="img_jokempo"  src={imgEscolhida} />
                    <img className="x_combat" src={x_combat} alt="x_combat" />
                    <img className="img_jokempo"  src={opcao} />
                    <img className="play_icon" src={homem_de_ferro} alt="Homem de Ferro" />
                </div>
                <div className="escolhe_opcao">
                    <div className="mostra_resultado">
                        <Jokempo opcao={opcao} setValue={this.setValue}/>
                    </div>
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
                </div>
            </div>
        )
    }
}

export default Play
