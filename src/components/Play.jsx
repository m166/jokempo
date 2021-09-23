import React, { Component } from 'react'
import pedra from '../img/pedra.png'
import papel from '../img/papel.png'
import tesoura from '../img/tesoura.png'
import homem_de_ferro from '../img/homem_de_ferro.png';
import x_combat from '../img/x_combat.png';
import capitao_america from '../img/capitao_america.png';
import '../style/Play.css'

const VAL_PEDRA = 1
const VAL_TESOURA = 2
const VAL_PAPEL = 3

const intialState = {
    jogar: false,
    opcao: null,
    imgEscolhida: null,
    escolhaMaquina: null,
    resultado: ""
}


class Play extends Component {
    constructor(props) {
        super(props)

        this.listOpcao = [
            {
                id: 1,
                desc: "pedra",
                image: [pedra]
            },
            {
                id: 2,
                desc: "tesoura",
                image: [tesoura]
            },
            {
                id: 3,
                desc: "papel",
                image: [papel]
            }
        ]

        this.sorteio = { max: 4, min: 1 }
        this.state = { ...intialState }

        this.handleClick = this.handleClick.bind(this)
        this.handleChoose = this.handleChoose.bind(this)
        this.comparar = this.comparar.bind(this)
        this.resultado = this.resultado.bind(this)
    }

    handleClick = event => {
        event.preventDefault()
        this.clearScreen()        
        this.setState(prevState => ({ jogar: !prevState.jogar }))
    }
    
    rand() {
        const valor = Math.random() * (this.sorteio.max - this.sorteio.min) + this.sorteio.min
        return Math.floor(valor)
    }

    comparar(pc, jogador) {
        if (pc === jogador) {
            return "EMPATE"
        } else if ((pc === "pedra" && jogador === "tesoura") || (pc === "papel" && jogador === "pedra") || (pc === "tesoura" && jogador === "papel")) {
            return "DERROTA"
        } else {
            return "VITORIA"
        }
    }

    clearScreen() {        
        this.setState({ ...intialState })
    }

    resultado(a, b) {
        let result = ""
        if (b) {
            const getValue = value => this.listOpcao.filter(({ id }) => id === parseInt(value)) 

            let pc = Object.values(getValue(a))[0].desc
            let jogador = Object.values(getValue(b))[0].desc

            result = this.comparar(pc, jogador)

            this.setState({ escolhaMaquina: Object.values(getValue(a))[0].image[0] })
        }
        return result
    }

    handleChoose = event => {
        event.preventDefault()

        this.setState({ imgEscolhida: (event.target.getAttribute("src")) })
        const value = this.resultado(this.rand(this.sorteio), event.target.getAttribute("data-value"))

        this.setState({ resultado: value })
        this.setState(prevState => ({ jogar: !prevState.jogar }))
    }

    render() {
        const { jogar, resultado, imgEscolhida, escolhaMaquina } = this.state
        return (
            <div>
                <div className="resultado_tela">
                    <img className="play_icon" src={capitao_america} alt="Capitão America" />
                    <img className="img_jokempo"  src={imgEscolhida} />
                    
                    <div className="mostra_resultado">
                        { (!!resultado)
                        ?
                        <div>
                        <h1 className="">
                            {resultado}
                        </h1>
                        </div>
                        :
                        <img className="x_combat" src={x_combat} alt="x_combat" />  
                        }
                    </div>                    

                    <img className="img_jokempo"  src={escolhaMaquina} />
                    <img className="play_icon" src={homem_de_ferro} alt="Homem de Ferro" />
                </div>
                <div className="escolhe_opcao">
                    
                    <figure className={`invisivel${jogar ? " aparece_box" : " "}`}>
                        <a className={`opcao`} onClick={(e) => this.handleChoose(e)} href="">
                            <img className="img_jokempo" data-value={VAL_PEDRA} src={pedra} alt="pedra" />
                        </a>
                        <a className={`opcao`} onClick={(e) => this.handleChoose(e)} href="">
                            <img className="img_jokempo" data-value={VAL_PAPEL} src={papel} alt="papel" />
                        </a>
                        <a className={`opcao`} onClick={(e) => this.handleChoose(e)} href="">
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
