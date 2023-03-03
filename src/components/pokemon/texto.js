import styles from "./pokemon.module.css";

function Texto(props){
    return (
        <div>
            <h1 className={styles.pokemonHeader}>
                <p className={styles.pokemonNome}>{props.nome}</p>
            </h1>
            <h1 className={styles.pokemonContent}>
                <p className={styles.pokemonInfo}>{props.tipo}</p>
                <p className={styles.pokemonInfo}>{props.habilidade}</p>
                <p className={styles.pokemonInfo}>{props.peso}</p>
                <p className={styles.pokemonInfo}>{props.altura}</p> 
            </h1>
        </div>
    );
}

export default Texto;