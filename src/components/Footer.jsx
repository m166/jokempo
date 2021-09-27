import React, { Component } from 'react';
import '../style/Footer.css'
import '../style/public.css'


class Footer extends Component {
    render() { 
        return (
            <footer className="footer_box container">
                <h1 className="footer_title">
                    JOGO
                </h1>
                <h3 className="footer_text">
                    Desenvolvido pelo Estágiario
                </h3>
            </footer>
        )
    }
}
 
export default Footer;