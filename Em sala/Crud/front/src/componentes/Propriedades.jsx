export default function Propriedades({nome,preco,avaliacao}) {
  return (
    <tr>
        <td>{nome}</td>
        <td>{preco}</td>
        <td>{avaliacao}</td>
        <td>
            <button>Atualizar</button>
            <button>Apagar</button>
        </td>
    </tr>
  );
}
