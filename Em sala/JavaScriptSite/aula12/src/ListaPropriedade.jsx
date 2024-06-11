import Propriedade from "./Propriedade"
import './ListaPropriedade.css'

export default function ListaPropriedade({dados}){

    const listaPropriedades = dados.map((p) => <Propriedade {...p}/>);

    return(
        <div className="lista-propriedade">
            {listaPropriedades}
        </div>
    );
}