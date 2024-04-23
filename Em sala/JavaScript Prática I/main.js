// const elementos = document.querySelectorAll('p'); // você pode colocar '.' para classes e '#' para id's e sem vai ser o elemento html
// const elemento = ocument.querySelector('p'); // você pode colocar '.' para classes e '#' para id's e sem vai ser o elemento html

// for(ele of elementos){
//     console.log(ele.innerText);
// }

// console.log(elementos);
// console.log(elemento);

const h1 = document.querySelector('#titulo');
const main = document.querySelector('main');

const btn = document.querySelector('button');

// btn.addEventListener('click', clicar); // o segundo argumento é o nome da função que você quer executar

// function clicar(){
//     console.log('clicou');
// }

const gerarNovaCor = () =>{
    // aqui colocamos a função
    // devolve alguma coisa

    const novaCor = {
        r: Math.floor(Math.random() * 256),
        g: Math.floor(Math.random() * 256),
        b: Math.floor(Math.random() * 256)
    }

    return novaCor;
}

btn.addEventListener('click', (e) => { // o e é o evento que está acontecendo (o elemento)
    const novaCor = gerarNovaCor();

    h1.innerText = `Cor de Fundo: rgb(${novaCor.r}, ${novaCor.g}, ${novaCor.b})`;

    main.style.backgroundColor = `rgb(${novaCor.r}, ${novaCor.g}, ${novaCor.b})`;
})