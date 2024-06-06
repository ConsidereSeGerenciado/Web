
const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const cors = require('cors');

//Necessário para extrair os dados de Forms vindos de uma requisição POST
app.use(express.json());
app.use(cors());

const banco = path.join(__dirname, 'db');
const usuarios = path.join(banco, 'banco-dados-usuario.json');
const bdDisciplinas = path.join(banco, 'disciplinas.json');

app.post('/login', (req, res) => {
    const { email, senha } = req.body;
    fs.readFile(usuarios, (err, data) => {
        if (err){
            console.error(err);
            return res.status(400).send('Erro ao ler o banco de dados.');
        }
        
        try{
            const usuario = JSON.parse(data);
            const usuarioEncontrar = usuario.find(u => u.email === email && u.senha === senha);
    
            if (!usuarioEncontrar){
                return res.status(400).send('Email ou senha incorretas.');
            }
            return res.status(200).send('Autenticado com sucesso.');
        }catch(parseError){
            console.error(parseError)
            return res.status(400).send('Erro ao ler o banco de dados.');
        }
    });
});

app.post('/create', (req, res) => {
    const { email, senha } = req.body;
    fs.readFile(usuarios, (err, data) => {
        if (err){
            return res.status(400).send('Erro ao ler o banco de dados.');
        }
        
        try{
            const usuario = JSON.parse(data);
            const usuarioExistente = usuario.some(u => u.email === email);

            if(usuarioExistente){
                return res.status(411).send(`Usuario com email ${email} já existe.`);
            }
            const usuarioNovo = {
                id: usuario.length + 1,
                email: email,
                senha: senha
            };

            usuario.push(usuarioNovo);
            fs.writeFile(usuarios, JSON.stringify(usuario, null, 2), 'utf8', (writeErr) => {
                if(writeErr){
                    console.error(parseError)
                    return res.status(400).send('Erro de leitura.');
                }
                return res.status(203).send('Usuário criado.');
            });
        }catch(parseError){
            console.error(parseError)
            return res.status(400).send('Erro ao ler o banco de dados.');
        }
    });
});

app.get('/disciplinas', (req, res) => {
    fs.readFile(bdDisciplinas, (err, data) => {
        if (err){
            console.error(err)
            return res.status(400).send('Erro ao ler o banco de dados.');
        }
        try{
            const disciplinas = JSON.parse(data);
            return res.json(disciplinas);
        }catch(parseError){
            console.error(parseError)
            return res.status(400).send('Erro ao ler o banco de dados.');
        }
    });
});

app.get('/disciplinas/:sigla', (req, res) => {
    const { sigla } = req.params;
    fs.readFile(bdDisciplinas, (err, data) => {
        if (err){
            console.error(err)
            return res.status(400).send('Erro ao ler o banco de dados.');
        }
        try{
            const disciplinas = JSON.parse(data);
            const disciplina = disciplinas.find(u => u.sigla === sigla);
            if(!disciplina){
                return res.status(400).send('Sigla não encontrada.');
            }
            return res.json(disciplina);
        }catch(parseError){
            console.error(parseError)
            return res.status(400).send('Erro ao ler o banco de dados.');
        }
    });
});

app.listen(3000, () => {
    console.log('Servidor na porta 3000');
});