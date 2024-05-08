const btn = document.querySelector('button');
const qtd = document.querySelector('#quantidade');
const nome = document.querySelector('#nome');
const pai = document.querySelector('#pai');
const esconder = document.querySelector('#esconder')
const texto = `Seu pedido está vazio. Adicione produtos no carrinho!`;

btn.addEventListener('click', (e) => {
    let quantidade = qtd.value;
    let nomes = nome.value;

    const newLi = document.createElement('li');
    const newBtn = document.createElement('button');

    newBtn.innerText = `x`;
    newBtn.addEventListener('click', funcDelete);

    newLi.innerText = `${quantidade}: ${nomes}`;
    
    newLi.append(newBtn)

    pai.append(newLi);

    esconder.innerText = ``;
})

const funcDelete = (e) => {
    e.target.parentNode.remove();
    const lis = document.querySelectorAll('li');
    if(lis.length === 0){
        esconder.innerText = texto;
    }
}