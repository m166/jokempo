import React, { Component } from 'react'
import pedra from '../img/pedra.png'
import papel from '../img/papel.png'
import tesoura from '../img/tesoura.png'

const intialEscolha = {
    escolha : false,
}

class  Escolha extends Component {
    constructor(props) {
        super(props)

        this.state = { ...intialEscolha }
        this.handleClick = this.handleClick.bind(this)
    }     

    handleClick = event => {
        event.preventDefault()
        this.setState(prevState => ({escolha: !prevState.escolha}))
    }
    render() { 
        const { jogar, escolha} = this.state
        return (
            <figure className={`${jogar ? "" : " invisivel"}`}>
                    <a className={`opcao${escolha ? " invisivel" : ""}`} onClick={(e) => this.handleClick(e)} href="###">
                        <img className="img_jokempo" src={pedra} alt="pedra" />
                    </a>
                    <a className={`opcao${escolha ? " invisivel" : ""}`} onClick={(e) => this.handleClick(e)} href="###">
                        <img className="img_jokempo" src={papel} alt="papel" />
                    </a>
                    <a className={`opcao${escolha ? " invisivel" : ""}`} onClick={(e) => this.handleClick(e)}  href="###">
                        <img className="img_jokempo" src={tesoura} alt="tesoura" />
                    </a>
                </figure>
        );
    }
}
 
export default Escolha