import React, { Component, Fragment } from 'react';
import Footer from './Footer';
import '../style/public.css'
import '../style/EscolhaDeHeroi.css'

class EscolhaDeHeroi extends Component {
    render() {
        return (
            <Fragment>
                <section className="escolha_heroi_box container">
                    <h1 className="escolha_heroi_titulo">
                        ESCOLHA SEU HEROI !
                    </h1>
                    <div className="escolha_heroi">
                       <ul>
                           <li>
                                <img className="img_heroi"   alt="" />
                           </li>      
                       </ul>
                    </div>
                </section>
                <Footer />
            </Fragment>
        )
    }
}

export default EscolhaDeHeroi;