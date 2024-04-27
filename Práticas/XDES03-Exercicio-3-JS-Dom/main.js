const btn = document.querySelector('button');
const btn2 = document.querySelector('#btnValidarRes');
const resultado = document.querySelector('#idAreaResp');
const respostaInput = document.querySelector('#resposta')
let respostaCorreta = 0;


btn.addEventListener('click', (e) =>{
    // gerar as oerações aleatoriamentes
    // gerar numeros inteiros aleatórios 
    let numero1 = Math.floor(Math.random() * 100);
    let numero2 = Math.floor(Math.random() * 100);
    let tipoDeOperacao = Math.floor(Math.random() * 3);
    let operacao;
    const equacao = document.querySelector('#idAreaEquacao');

    if(tipoDeOperacao == 0){
        operacao = '+';
        respostaCorreta = numero1 + numero2;
    }
    else if(tipoDeOperacao == 1){
        operacao = '-';
        respostaCorreta = numero1 - numero2;
    }
    else{
        operacao = 'x'
        respostaCorreta = numero1 * numero2;
    }

    equacao.innerText = `${numero1} ${operacao} ${numero2}`;
})

btn2.addEventListener('click', (e) =>{
    // pegar valor colocado e verificar
    // printar se está certo ou errado
    const resposta = respostaInput.value
    if(resposta == respostaCorreta){
        resultado.innerText = `Parabéns!`;
        resultado.style.color = 'green';
    }else{
        resultado.innerHTML = `Deu Ruim! A resposta <br>correta é ${respostaCorreta}`;
        resultado.style.color = 'red';
    }
    resultado.style.fontWeight = 'bold';
})