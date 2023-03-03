// import {openDb} from './configDB.js';
import {createTableAluno, insertAluno, updateAluno, selectAlunos, selectAluno, deleteAluno} from './Controler/Aluno.js';
import {createTableProfessor, insertProfessor, updateProfessor, selectProfessor, selectProfessores, deleteProfessor} from './Controler/Professor.js';
import {createTableCurso, insertCurso, updateCurso, selectCurso, selectCursos, deleteCurso} from './Controler/Cursos.js';
import { createTableUnidade, insertUnidade, updateUnidade, selectUnidade, selectUnidades, deleteUnidade } from './Controler/Unidade.js';
import { createTableSegmento, insertSegmento, updateSegmento, selectSegmento, selectSegmentos, deleteSegmento } from './Controler/Segmentos.js';

import express from 'express';
const app = express();
app.use(express.json());

createTableAluno();
createTableProfessor();
createTableCurso();
createTableUnidade();
createTableSegmento();

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

//==========ROTA DAS UNIDADES==========================


app.post('/unidade', function(req,res){
    insertUnidade(req.body)
    res.json({
        "statucCode": 200
    })
});

app.put('/unidade', function(req,res){
    if(req.body && !req.body.id ){
        res.json({
            "statusCode":"400",
            "msg":"Você precisa informar um Id"
        })
    }else{
        updateUnidade(req.body);
        res.json({
            "statucCode": 200
        })
    }
});

app.get('/unidade', async function(req, res){;
    //select apenas uma unidade
    let unidade = await selectUnidade(req.body.id);
    res.json(unidade);
});

app.get('/unidades', async function(req, res){;
    //select todos as unidades
    let unidades = await selectUnidades();
    res.json(unidades);
});

app.delete('/unidade', async function(req, res){;
    //delete
    let unidade = await deleteUnidade(req.body.id);
    res.json(unidade);
});




//-----------------------------------------------------
//==========ROTA DAS SEGMENTOS==========================


app.post('/segmento', function(req,res){
    insertSegmento(req.body)
    res.json({
        "statucCode": 200
    })
});

app.put('/segmento', function(req,res){
    if(req.body && !req.body.id ){
        res.json({
            "statusCode":"400",
            "msg":"Você precisa informar um Id"
        })
    }else{
        updateSegmento(req.body);
        res.json({
            "statucCode": 200
        })
    }
});

app.get('/segmento', async function(req, res){;
    //select apenas um segmento
    let segmento = await selectSegmento(req.body.id);
    res.json(segmento);
});

app.get('/segmentos', async function(req, res){;
    //select todos os segmentos
    let segmentos = await selectSegmentos();
    res.json(segmentos);
});

app.delete('/segmento', async function(req, res){;
    //delete
    let segmento = await deleteSegmento(req.body.id);
    res.json(segmento);
});



app.listen(3000, ()=> console.log('api rodando'));