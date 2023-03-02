import styles from "./pokemon.module.css";

function Imagem(props){
    return (
        <div>
            <img alt={props.altPokemon} className={styles.pokemonImagem} src={props.imagem}/>
            <img alt={props.altPokedex} className={styles.pokedexStyle} src={props.pokedex}/>
            {/* <img src={props.shiny}/> */}
        </div>
    )
}

export default Imagem;