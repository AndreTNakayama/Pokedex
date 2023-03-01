function Texto(props){
    return (
        <>
            <h1>{props.nome}</h1>
            <p>{props.tipo}</p>
            <p>{props.habilidade}</p>
            <p>{props.peso}</p>
            <p>{props.altura}</p>
        </>
    );
}

export default Texto;