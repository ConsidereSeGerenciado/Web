const btn1 = document.querySelector('#Jogador1');
const btn2 = document.querySelector('#Jogador2');
const btn3 = document.querySelector('#Reiniciar');
const select = document.querySelector('#maximo');
const span1 = document.querySelector('#ponto1');
const span2 = document.querySelector('#ponto2');
let contador1 = 0;
let contador2 = 0;
let valorSelect = 0;

select.addEventListener('change', (e) => {
    valorSelect = Number(e.target.value);
    contador1 = 0;
    contador2 = 0;
    span1.innerText = `${contador1}`;
    span2.innerText = `${contador2}`;
    span1.style.color = "black";
    span2.style.color = "black";
});

btn1.addEventListener('click', (e) => {
    if(contador1 != valorSelect && contador2 != valorSelect){
        contador1++;
        span1.innerText = `${contador1}`;

        if(contador1 == valorSelect){
            span1.style.color = "green";
            span2.style.color = "red";
        }
    }
});

btn2.addEventListener('click', (e) => {
    if(contador2 != valorSelect && contador1 != valorSelect){
        contador2++;
        span2.innerText = `${contador2}`;

        if(contador2 == valorSelect){
            span1.style.color = "green";
            span2.style.color = "red";
        }
    }
});

btn3.addEventListener('click', (e) => {
    contador1 = 0;
    contador2 = 0;
    span1.innerText = `${contador1}`;
    span2.innerText = `${contador2}`;
    span1.style.color = "black";
    span2.style.color = "black";
});