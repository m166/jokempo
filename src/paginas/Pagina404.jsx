import React, { Fragment } from 'react';
import '../style/public.css'
import '../style/Pagina404.css'
import computador from '../img/computador.png'



const Pagina404 = () => {
    return(
        <Fragment>
            <section className="erro_box container">
                <img className="img_erro" src= {computador}  alt="erro404" />
                    <h1 className="erro_title">
                       Ops, Essa página não existe! 
                       <span className="erro_text">
                            Erro 404 
                       </span>
                    </h1>
                </section>
        </Fragment>
    )
}

export default Pagina404