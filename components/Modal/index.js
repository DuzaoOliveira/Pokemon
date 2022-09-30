import React from 'react'
import styles from './styles.module.css'

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
        <div >
            {isOpen && (
                <div className={styles.modal}>
                    <div className={styles.mod}>
                        <div className={styles.fechar}>
                            <button onClick={() => setIsOpen(false)}>x</button>
                        </div>
                        <div className={styles.texto}>
                            <p>Nome:{nome}</p>
                            <p>Tipo:{tipo}</p>
                            <p>HP:{hp}</p>
                            <p>Ataque:{ataque}</p>
                            <p>Defesa:{defesa}</p>
                            <p>Ataque-Especial:{ataqueEspecial}</p>
                            <p>Defesa-Especial:{defesaEspecial}</p>
                            <p>Velocidade:{velocidade}</p>
                        </div>
                        <div className={styles.pokemons}>
                            <img src={imagem} alt={nome} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}