import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from './styles.module.css';
import Modal from "../../components/Modal";

function Pokemons() {
    const [resposta, setResposta] = useState();
    const [detalhes, setDetalhes] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [valores, setValores] = useState();

    const escolherPokemon = (name) => {
        setOpenModal(true);
        axios
            .get(
                `https://pokeapi.co/api/v2/pokemon/${name}`,
            )
            .then((preview) => {
                setValores(preview.data);
            })
    }


    useEffect(() => {
        axios
            .get("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
            .then((response) => {
                setResposta(response.data);
            });
    }, []);

    const handleClick = () => {
        window.location.href = "/";
    };

    console.log(resposta, "teste");

    return (
        <>
            <div className={styles.lista}>
                <h1>Lista de Pokemons</h1>
            </div>

            <div className={styles.voltar}>
                <button onClick={handleClick}>
                    Voltar
                </button>
            </div>

            <div className={styles.cards}>
                <>
                    {resposta?.results.map((pokemons, index) => {
                        return (
                            <div className={styles.card} onClick={() => escolherPokemon(pokemons.name)}>

                                <div className={styles.nomes}>
                                    <p>{pokemons.name}</p>
                                </div>

                                <div className={styles.api}>
                                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${index + 1}.png`} />
                                </div>
                            </div>
                        );
                    })}
                </>
            </div>
            
            {openModal && valores && 
        <Modal
          nome={valores?.name}
          tipo={valores.types && valores?.types[0]?.type?.name}
          hp={valores.stats && valores?.stats[0].base_stat}
          ataque={valores.stats && valores?.stats[1].base_stat}
          defesa={valores.stats && valores?.stats[2].base_stat}
          ataqueEspecial={valores.stats && valores?.stats[3].base_stat}
          defesaEspecial={valores.stats && valores?.stats[4].base_stat}
          velocidade={valores.stats && valores?.stats[5].base_stat}
          imagem={
            valores?.sprites?.other["official-artwork"]?.front_default
          }
          setModal={setOpenModal}
        />
      } 
        </>
    );
}
export default Pokemons;