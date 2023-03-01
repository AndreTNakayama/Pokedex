import Imagem from "./imagem";
import Texto from "./texto";

function Pokemon(props){
    return (
        <div className="card border-dark mb-3">
            <div className="card-header d-flex justify-content-center">
                <Imagem imagem={props.imagem}/>
            </div>
            <div>
                <div className="text-uppercase mt-3 card-title d-flex justify-content-center">
                    <Texto id={props.id} nome={props.nome}/>
                </div>
                <div className="d-flex justify-content-center">
                    <Texto tipo={props.tipo}/>
                </div>
                <div className="d-flex justify-content-center">
                    <Texto tipo={props.habilidade}/>
                </div>
                <div className="d-flex justify-content-center">
                    <Texto peso={props.peso}/>
                </div>
                <div className="d-flex justify-content-center">
                    <Texto altura={props.altura}/>
                </div>
                <div className="card-footer d-flex justify-content-center">
                    <Imagem shiny={props.shiny}/>
                </div>
            </div>
        </div>
    );
}

export default Pokemon;