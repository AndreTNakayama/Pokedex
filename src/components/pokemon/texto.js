import styles from "./pokemon.module.css";

function Texto(props){
    return (
        <h1 className={styles.pokemonData}>
            <span className={styles.pokemonNome}>{props.nome}</span>
            <span className={styles.pokemonInfo}>{props.tipo}</span>
            <span className={styles.pokemonInfo}>{props.habilidade}</span>
            <span className={styles.pokemonInfo}>{props.peso}</span>
            <span className={styles.pokemonInfo}>{props.altura}</span>
        </h1>
    );
}

export default Texto;