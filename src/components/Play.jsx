import React, { Component } from 'react'
import Escolha from './Escolha'


const intialState = {
    jogar : false,
}

class Play extends Component {
    constructor(props) {
        super(props)

        this.state = { ...intialState }
        this.handleClick = this.handleClick.bind(this)
    }     

    handleClick = event => {
        event.preventDefault()
        this.setState(prevState => ({jogar: !prevState.jogar}))
    }

    render() {
        const {jogar}=this.state
        return (
            <div className="escolhe_opcao">
                <Escolha jogar={jogar}/>
                <button className={`button_play${jogar ? " invisivel" : ""}`} onClick={(e) => this.handleClick(e)}>
                    <a className="play" href="###">PLAY</a>
                </button>
            </div>
        )
    }
}

export default Play
