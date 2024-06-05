const express = require('express');

const app = express();

app.listen(3000, () => {
console.log('Servidor ouvindo na porta 3000!!!!!');
});

app.use((req,res) => {
//res.status(200).send('Olá. Essa é uma resposta!');
    res.send('<h1>Resposta direto com HTML</h1>');
//res.send({username : 'phillima’});
    });