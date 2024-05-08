const btn = document.querySelector('button');
const ul = document.querySelector('#li-adicionais');
const nome = document.querySelector('#nome');
const quantidade = document.querySelector('#quantidade');

btn.addEventListener('click', () => {
    if(nome.value === ''){
        alert("Nome do produto não pode ser vazio");
    }
    else{
        let nomeValue = nome.value;
        let qtd = quantidade.value;
        console.log(nomeValue)
        console.log(qtd)
        
        let newLi = document.createElement('li');
        newLi.innerText = `${nomeValue}, Quantidade: ${qtd}`

        let deleteButton = document.createElement('button');
        deleteButton.innerText = 'X'
        deleteButton.addEventListener('click', deletar);
        deleteButton.style.width = '40px';
        deleteButton.style.margin = '0 0';
        newLi.append(deleteButton);

        ul.append(newLi);
    }
})

const deletar = (e) => {
    e.target.parentNode.remove();
}