// import {openDb} from './configDB.js';
import {createTableAluno, insertAluno, updateAluno, selectAlunos, selectAluno, deleteAluno} from './Controler/Aluno.js';
import {createTableProfessor, insertProfessor, updateProfessor, selectProfessor, selectProfessores, deleteProfessor} from './Controler/Professor.js';
import {createTableCurso, insertCurso, updateCurso, selectCurso, selectCursos, deleteCurso} from './Controler/Cursos.js';
import {createTableFuncionario, insertFuncionario, updateFuncionario, selectFuncionario, selectFuncionarios, deleteFuncionario } from './Controler/Funcionario.js';

import express from 'express';
const app = express();
app.use(express.json());

createTableAluno();
createTableProfessor();
createTableCurso();
createTableFuncionario();

app.get('/', function(req, res){
    res.send('olá mundo!')
});

// -------ROTA ALUNO ------------------------------
app.get('/aluno', async function(req, res){;
    //select apenas um aluno
    let aluno = await selectAluno(req.body.id);
    res.json(aluno);
});

app.get('/alunos', async function(req, res){;
    //select todos os alunos
    let alunos = await selectAlunos();
    res.json(alunos);
})


app.post('/aluno', function(req,res){
    insertAluno(req.body);
    res.json({
        "statucCode": 200
    })
});

app.put('/aluno', function(req,res){
    if(req.body && !req.body.id ){
        res.json({
            "statusCode":"400",
            "msg":"Você precisa informar um Id"
        })
    }else{
        updateAluno(req.body);
        res.json({
            "statucCode": 200
        })
    }
});

app.delete('/aluno', async function(req, res){;
    //delete
    let aluno = await deleteAluno(req.body.id);
    res.json(aluno);
});

//---------------------------------------------------

// -------ROTA PROFESSOR ------------------------------

app.post('/professor', function(req,res){
    insertProfessor(req.body)
    res.json({
        "statucCode": 200
    })
});

app.put('/professor', function(req,res){
    if(req.body && !req.body.id ){
        res.json({
            "statusCode":"400",
            "msg":"Você precisa informar um Id"
        })
    }else{
        updateProfessor(req.body);
        res.json({
            "statucCode": 200
        })
    }
});

app.get('/professor', async function(req, res){;
    //select apenas um professor
    let professor = await selectProfessor(req.body.id);
    res.json(professor);
});

app.get('/professores', async function(req, res){;
    //select todos os professores
    let professores = await selectProfessores();
    res.json(professores);
});

app.delete('/professor', async function(req, res){;
    //delete
    let professor = await deleteProfessor(req.body.id);
    res.json(professor);
});


//---------------------------------------------------
// -------ROTA CURSOS ------------------------------

app.post('/curso', function(req,res){
    insertCurso(req.body)
    res.json({
        "statucCode": 200
    })
});

app.put('/curso', function(req,res){
    if(req.body && !req.body.id ){
        res.json({
            "statusCode":"400",
            "msg":"Você precisa informar um Id"
        })
    }else{
        updateCurso(req.body);
        res.json({
            "statucCode": 200
        })
    }
});

app.get('/curso', async function(req, res){;
    //select apenas um curso
    let curso = await selectCurso(req.body.id);
    res.json(curso);
});

app.get('/cursos', async function(req, res){;
    //select todos os cursos
    let cursos = await selectCursos();
    res.json(cursos);
});

app.delete('/curso', async function(req, res){;
    //delete
    let curso = await deleteCurso(req.body.id);
    res.json(curso);
});

//---------------------------------------------------
//-------------rota funcionario---------------------

app.post('/Funcionario', function(req,res){
    insertFuncionario(req.body)
    res.json({
        "statucCode": 200
    })
});

app.put('/Funcionario', function(req,res){
    if(req.body && !req.body.id ){
        res.json({
            "statusCode":"400",
            "msg":"Você precisa informar um Id"
        })
    }else{
        updateFuncionario(req.body);
        res.json({
            "statucCode": 200
        })
    }
});

app.get('/Funcionario', async function(req, res){;
    //select apenas um curso
    let Funcionario = await selectFuncionario(req.body.id);
    res.json(Funcionario);
});

app.get('/Funcionarios', async function(req, res){;
    //select todos os cursos
    let Funcionarios = await selectFuncionarios();
    res.json(Funcionarios);
});

app.delete('/Funcionario', async function(req, res){;
    //delete
    let Funcionario = await deleteFuncionario(req.body.id);
    res.json(Funcionario);
});

//-------------------------------------------------
app.listen(3000, ()=> console.log('api rodando'));