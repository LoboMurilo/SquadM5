// import {openDb} from './configDB.js';
import {createTableAluno, insertAluno, updateAluno, selectAlunos, selectAluno, deleteAluno} from './Controler/Aluno.js';
import {createTableProfessor, insertProfessor, updateProfessor, selectProfessor, selectProfessores, deleteProfessor} from './Controler/Professor.js';

import express from 'express';
const app = express();
app.use(express.json());

createTableAluno();
createTableProfessor();

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


app.listen(3000, ()=> console.log('api rodando'));