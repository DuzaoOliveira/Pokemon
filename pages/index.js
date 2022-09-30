import React, { useEffect, useState } from 'react';
import axios from "axios";
import styles from '../styles/Home.module.css'
import Modal from '../components/Modal';

function Home() {
  const [resposta, setResposta] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('')

  const pokemonGo = (name) => {
    setIsOpen(true);
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((preview) => {
        setResposta(preview.data);
      })
  }

  return (
    <div className={styles.cont}>
      {resposta &&
        <>
          <Modal
            nome={resposta?.name}
            tipo={resposta.types && resposta?.types[0]?.type?.name}
            hp={resposta.stats && resposta?.stats[0].base_stat}
            ataque={resposta.stats && resposta?.stats[1].base_stat}
            defesa={resposta.stats && resposta?.stats[2].base_stat}
            ataqueEspecial={resposta.stats && resposta?.stats[3].base_stat}
            defesaEspecial={resposta.stats && resposta?.stats[4].base_stat}
            velocidade={resposta.stats && resposta?.stats[5].base_stat}
            imagem={resposta?.sprites?.other["official-artwork"]?.front_default}
            setIsOpen={setIsOpen}
            isOpen={isOpen}
          />
        </>
      }

      {Object.values(resposta).map((item) => {
        <p>{item?.name}</p>;
      })}
      <div className={styles.mob}>
        <div className={styles.button}>
          <input onChange={(e) => setName(e.target.value)} value={name} />
          <button onClick={() => pokemonGo(name)}>Buscar</button>
        </div>

        <div className={styles.card}>
          <div className={styles.logo}>
            <img
              src='https://tm.ibxk.com.br/2019/09/30/30091641838086.jpg?ims=1120x420'
              alt="logo pokemon"
            />
          </div>

          <div className={styles.enter}>
            <button className={styles.poke} onClick={() => window.location.href = "/pokemon"}>
              All Pokemons
            </button>
          </div>
        </div>
      </div>

    </div>
  );

}


export default Home;