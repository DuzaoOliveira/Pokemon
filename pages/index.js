import styles from '../styles/Home.module.css'
import './pokemon/index'
import axios from "axios";
import { useEffect, useState } from 'react';
import Modal from '../components/Modal';

function Home() {
  const [resposta, setResposta] = useState('');
  const [openModalSearch, setOpenModalSearch] = useState(false);
  const [name, setName] = useState('')

  const handleClick = () => {
    window.location.href = "/pokemon";
  };
  const pesquisar = () => {
    window.location.href = "/pokemon";
  };

  const pokemonGo = (value) => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${value}`)
      .then(function (response) {
        setResposta(response.data);
        setOpenModalSearch(true);
      })
  }

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon`)
      .then(function (response) {
        setResposta(response.data);
        setOpenModalSearch(true);
      })
  }, []);

  return (
    <div>
      {openModalSearch && resposta && 
        <Modal
          nome={resposta?.name}
          tipo={resposta.types && resposta?.types[0]?.type?.name}
          hp={resposta.stats && resposta?.stats[0].base_stat}
          ataque={resposta.stats && resposta?.stats[1].base_stat}
          defesa={resposta.stats && resposta?.stats[2].base_stat}
          ataqueEspecial={resposta.stats && resposta?.stats[3].base_stat}
          defesaEspecial={resposta.stats && resposta?.stats[4].base_stat}
          velocidade={resposta.stats && resposta?.stats[5].base_stat}
          imagem={
            resposta?.sprites?.other["official-artwork"]?.front_default
          }
          setOpenModal={setOpenModalSearch}
        />
      } 

      {Object.values(resposta).map((item) => {
        <p>{item?.name}</p>;
      })}

      <>
        <form>
          <div className={styles.button}>
            <input
              onChange={(e) => setName(e.target.value)} />
            <button
              onClick={() => pokemonGo(name)} >
              Buscar
            </button>
          </div>

        </form>

        <div className={styles.card}>
          <div className={styles.logo}>
            <img
              src='https://tm.ibxk.com.br/2019/09/30/30091641838086.jpg?ims=1120x420'
              alt="logo pokemon"
            ></img>
          </div>

          <div className={styles.enter}>
            <button className={styles.poke} onClick={handleClick}>
              All Pokemons
            </button>
          </div>

        </div>
      </>

    </div>

  );
}

export default Home;