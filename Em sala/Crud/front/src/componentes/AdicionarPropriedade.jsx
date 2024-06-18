import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";

export default function AdicionarPropriedade() {

    // Mante estado interno da msg
    const [msg, setMsg] = useState('')

    // Estrutura do daod que seria enviado ao servidor durante o POST
    const [propriedade, setPropriedade] = useState({ // inicializo como objeto '{}' e coloco os dados
        id: Date.now(),
        nome: '',
        preco: '',
        avaliacao: '',
    })

    // Função para tratar mudança nos inputs
    // observe a propridade onChange
    const handleChange = (e) => {
        const novoValor = {
            id: Date.now(),
            [e.target.name]: e.target.value
        }
        // setpropriedade permite mudar estado de propriedade
        // primeiro parametro é uma cópia do que já estava
        // segundo parametro serão os novos valores
        // nesse exemplo sempre teremos um novo ID e a putra propriedade
        // que foi modificado. Podendo ser nome, preco, avaliacao
        setPropriedade({
            ...propriedade, // oq já tinha
            ...novoValor // oq quero atualizar
        })
    }

    // função para submeter os dados do formulário
    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            const resposta = await axios.post('http://localhost:3000/criar-propriedade', propriedade);
            if(resposta.status == 200)
                setMsg('OK');
        }catch(err){
            console.log(err);
        }
    }

    if(msg === 'OK'){
        return <Navigate to="/" />
    }

    // formulário para inserir os elementos
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="nome">Nome</label>
                    <input type="nome" name="nome" id="nome" 
                    onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="avaliacao">Avaliação</label>
                    <input type="avaliacao" name="avaliacao" id="avaliacao" 
                    onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="preco">Preço</label>
                    <input type="preco" name="preco" id="preco" 
                    onChange={handleChange}/>
                </div>
                <button>Enviar</button>
                <Link to="/">Voltar</Link>
            </form>
        </div>
    )
}