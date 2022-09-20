import React from 'react'
import Styles from '../../styles/Home.module.css'

export default function Modal({
    nome,
    tipo,
    hp,
    ataque,
    defesa,
    ataqueEspecial,
    defesaEspecial,
    velocidade,
    setIsOpen,
    isOpen,
    imagem,
}) {
    return (
        <>
            {isOpen && (
                <div className={Styles.container}>
                    <div className={Styles.mod}>
                        <div className={Styles.fechar}>
                            <button onClick={() => setIsOpen(false)}>x</button>
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
                </div>
            )}
        </>
    )
}