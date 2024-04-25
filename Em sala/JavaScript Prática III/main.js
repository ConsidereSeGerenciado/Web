const paragrafos = document.querySelectorAll('p');

for (p of paragrafos){
    console.log(p.innerText);
    console.log(p.innerHTML);
    console.log(p.textContent);
}