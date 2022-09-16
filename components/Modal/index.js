import React from 'react'
import Styles from '../../styles/Home.module.css'



export default function Modal({ nome, tipo, hp, ataque, defesa, ataqueEspecial, defesaEspecial, velocidade, setModal, imagem }) {
    return (

        <div className={Styles.container}>
            {nome &&
                <div className={Styles.mod}>
                    <div className={Styles.fechar}>
                        <button onClick={() => setModal(false)}>x</button>
                    </div>
                    <div className={Styles.texto}>
                        <p>Nome:{nome}</p>
                        <p>Tipo:{tipo}</p>
                        <p>HP:{hp}</p>
                        <p>Ataque:{ataque}</p>
                        <p>Defesa:{defesa}</p>
                        <p>Ataque-Especial:{ataqueEspecial}</p>
                        <p>Defesa-Especial:{defesaEspecial}</p>
                        <p>Velocidade:{velocidade}</p>
                    </div>

                    <div className={Styles.pokemons}>
                        <img src={imagem} alt={nome} />
                    </div>
                </div>
            }


        </div>

    )
}