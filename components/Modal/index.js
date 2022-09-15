import React from 'react'
import Styles from '../../styles/Home.module.css'



export default function Modal({ nome, tipo, hp, ataque, defesa, ataqueEspecial, defesaEspecial, velocidade, setOpenModal, imagem }) {
    return (

        <div className={Styles.container}>
            {nome &&
                <div>
                    <p>Nome:{nome}</p>
                    <p>Tipo:{tipo}</p>
                    <p>HP:{hp}</p>
                    <p>Ataque:{ataque}</p>
                    <p>Defesa:{defesa}</p>
                    <p>Ataque-Especial:{ataqueEspecial}</p>
                    <p>Defesa-Especial:{defesaEspecial}</p>
                    <p>Velocidade:{velocidade}</p>

                    <img src={imagem} alt={nome} />
                </div>
            }
            <div className={Styles.fechar}>
                <button onClick={() => setOpenModal(false)}>X</button>
            </div>
        </div>

    )
}