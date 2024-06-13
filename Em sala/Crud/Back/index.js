// libs externas
const express = require('express'); // npm i express
const cors = require('cors'); // npm i cors
// libs standard library
const fs = require('fs');
const path = require('path');

const app = express();

// path junta os caminhos, facilitando acessar o arquivo
const bancoPath = path.join(__dirname, '.','db', 'propriedades.json');
// const bancoPath = './db/propriedades.json';
const propriedades = JSON.parse(fs.readFileSync(bancoPath, {encoding : 'utf-8'}));

// permite extrair dados do body
app.use(express.json());
// perimitir requisições locais
app.use(cors());

app.listen(3000, () => {
    console.log('oii');
});

app.get('/propriedades', (req,res) => {
    res.status(200).json(propriedades);
})