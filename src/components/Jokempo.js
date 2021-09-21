import React, { Component } from 'react';

class Jokempo extends Component {

    constructor(props) {
        super(props)

        this.opcao = [
            {
                id: 1,
                desc: "pedra"
            },
            {
                id: 2,
                desc: "tesoura"
            },
            {
                id: 3,
                desc: "papel"
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
            return "empate"
        } else if ((pc == "pedra" && jogador == "tesoura") || (pc == "papel" && jogador == "pedra") || (pc == "tesoura" && jogador == "papel")) {
            return "derrota"
        } else {
            return "vitoria"
        }
    }
    
    resultado(a, b) {
        if(b){
            const getValue = value => this.opcao.filter(({ id }) => id === value)
            let pc = Object.values(getValue(a))[0].desc
            let jogador = Object.values(getValue(b))[0].desc
            return this.comparar(pc, jogador)
        }
        return ""
    }

    render() {
        const {opcao} = this.props
        const {mostraResultado} = this.state

        const value = this.resultado(this.rand(this.sorteio), opcao)
        if (value !== mostraResultado) {
            this.setState({mostraResultado: value})
        }
        
        return (
           <div className= "mostra_resultado">
               <h1>
                   {mostraResultado}
               </h1>
           </div>
        )
    }
}

export default Jokempo;



