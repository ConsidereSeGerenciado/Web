import { useState } from "react"

export default function AtualizarPropriedade() {

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
        setPropriedade({
            ...propriedade, // oq já tinha
            [e.target.nome] : e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const retorno = await axios.put(`http://localhost:300/propriedade/${id}`, propriedade)
        }
    }

    return (
        <div>AtualizarPropriedade</div>
    )
}