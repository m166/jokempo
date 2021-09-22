import React, { Component } from 'react';
import pedra from '../img/pedra.png'
import papel from '../img/papel.png'
import tesoura from '../img/tesoura.png'

class Jokempo extends Component {

    constructor(props) {
        super(props)

        this.opcao = [
            {
                id: 1,
                desc: "pedra",
                image: {pedra}
            },
            {
                id: 2,
                desc: "tesoura",
                image: {tesoura}
            },
            {
                id: 3,
                desc: "papel",
                image: {papel}
            }
        ]

        this.sorteio = { max: 4, min: 1 }

        this.state = { mostraResultado: "" }
        this.rand = this.rand.bind(this)
        this.comparar = this.comparar.bind(this)
        this.resultado = this.resultado.bind(this)
    }

    rand() {
        const valor = Math.random() * (this.sorteio.max - this.sorteio.min) + this.sorteio.min
        return Math.floor(valor)
    }

    comparar(pc, jogador) {
        if (pc == jogador) {
            return "EMPATE"
        } else if ((pc == "pedra" && jogador == "tesoura") || (pc == "papel" && jogador == "pedra") || (pc == "tesoura" && jogador == "papel")) {
            return "DERROTA"
        } else {
            return "VITORIA"
        }
    }

    resultado(a, b) {
        if (b) {
            const getValue = value => this.opcao.filter(({ id }) => id === value)
            let pc = Object.values(getValue(a))[0].desc
            let jogador = Object.values(getValue(b))[0].desc
            this.props.setValue(pc)
            return this.comparar(pc, jogador)
        }
        return ""
    }

    render() {
        const { opcao } = this.props
        const { mostraResultado } = this.state
        const value = this.resultado(this.rand(this.sorteio), opcao)
        if (value !== mostraResultado) {
            this.setState({ mostraResultado: value })
        }

        return (
            <h3 className="">
                {mostraResultado}
            </h3>
        )
    }
}

export default Jokempo;

//<img className="img_jokempo"  src={Object.values(this.getValue(value))[0].image} />

