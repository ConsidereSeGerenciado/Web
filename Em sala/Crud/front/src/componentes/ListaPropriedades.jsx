import { useEffect, useState } from "react";
import axios from 'axios'
import Propriedades from "./Propriedades";
import { Link } from "react-router-dom";

export default function ListaPropriedades() {

    const [propriedades , setPropriedades] = useState([]);

    useEffect (() => {

        async function buscaPropriedades(){
            const resposta = await axios.get('http://localhost:3000/propriedades');
            setPropriedades(resposta.data);
            console.log(resposta.data);
        }
        buscaPropriedades();
    },[]);
    
    
    return (
        <>
            <div>
                <Link to="/criar-propriedade">Adicionar propriedade</Link>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Preço</th>
                        <th>Avaliações</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        propriedades.map( p => {
                            return <Propriedades key={p.id} {...p}/>
                        })
                    }
                </tbody>
            </table>
        </>
    );
}
