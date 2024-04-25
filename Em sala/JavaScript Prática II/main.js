const btn = document.querySelector('#btn-add');
const qtdProduto =
// const 
// const 
// const 

btn.addEvenetListener('click', () => {  

    // Crear um li
    // Adicionar o li na ul

    const newItem = document.createElement('li');

    newItem.innerText = '${qtdValue}: ${nomeProdutoValue}';

    const newDeleteBtn = document.createElement('button');
    newDeleteBtn.innerText = 'X';
    newDeleteBtn.addEvenetListener('click', funcaoRemover);

    newItem.insertAdjacentElement('beforeend', newDeleteBtn);

    listaRef.append(newItem);

    pMsgErro.innerText = '';

})

const funcaoRemover = (e) => {
    e.target.parentNode.remove();
    const lis = document.querySelectorAll('li');
    if(lis.length === 0){
        pMsgErro.innerText = msgCarrinhoVazio;
    }
}