// Nome: Caio Teodoro Portela - 2020004501
//       Gabriel Maia Alves Araújo - 2022005689

const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const cors = require('cors');

//Necessário para extrair os dados de Forms vindos de uma requisição POST
app.use(express.json());
app.use(cors());

const banco = path.join(__dirname, 'db');
const bdUsuarios = path.join(banco, 'banco-dados-usuario.json');
const bdCurso = path.join(banco, 'cursos.json');

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    fs.readFile(bdUsuarios, (err, data) => {
        if (err){
            console.error(err);
            return res.status(400).send('Erro ao ler o banco de dados.');
        }
        
        try{
            const usuario = JSON.parse(data);
            const usuarioEncontrar = usuario.find(u => u.email === email && u.password === password);
    
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
    const {username, email, password} = req.body;
    fs.readFile(bdUsuarios, (err, data) => {
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
                username: username,
                email: email,
                password: password
            };

            usuario.push(usuarioNovo);
            fs.writeFile(bdUsuarios, JSON.stringify(usuario, null, 2), 'utf8', (writeErr) => {
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

app.get('/cursos', (req, res) => {
    fs.readFile(bdCurso, (err, data) => {
        if (err){
            console.error(err)
            return res.status(400).send('Erro ao ler o banco de dados.');
        }
        try{
            const tiposCursos = JSON.parse(data);
            return res.json(tiposCursos);
        }catch(parseError){
            console.error(parseError)
            return res.status(400).send('Erro ao ler o banco de dados.');
        }
    });
});

app.get('/cursos/:nome', (req, res) => {
    const { nome } = req.params;
    fs.readFile(bdCurso, (err, data) => {
        if (err){
            console.error(err)
            return res.status(400).send('Erro ao ler o banco de dados.');
        }
        try{
            const tiposCursos = JSON.parse(data);   
            const nomeCurso = tiposCursos.filter(u => u.curso === nome);
            console.log(req.params)
            console.log(nome)
            console.log(nomeCurso)

            if(!nomeCurso){
                return res.status(403).send('Curso Não Encontrado!');
            }
            return res.json(nomeCurso);
        }catch(parseError){
            console.error(parseError)
            return res.status(400).send('Erro ao ler o banco de dados.');
        }
    });
});

app.listen(3000, () => {
    console.log('Servidor na porta 3000');
});