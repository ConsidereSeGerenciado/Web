export default function Propriedade({nome,preco,avaliacao}) {

    return(
        <div>
            <p>Nome: {nome}</p>
            <p>Preço: {preco}</p>
            <p>Avaliação: {avaliacao} &#9733;</p>
        </div>
    )
}