const btn = document.querySelector('button');
const p = document.querySelector('#relogio')

btn.addEventListener('click', () =>{
    // setTimeout(() => {
    //     const newP = document.createElement('p');
    //     newP.innerText = 'Serei criado depois';
    //     document.body.append(newP);
    // } , 2000);

    // const p = document.createElement('p');
    // p.innerText = 'Eu serei criado primeiro';
    // document.body.append(p);
    
    setInterval(mostraRelogio, 1000)
})

const mostraRelogio = () => {
    let data = new Date();
    let tempo = data.toLocaleTimeString();
    p.innerText = tempo;
}