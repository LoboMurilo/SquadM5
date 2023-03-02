import { openDb } from '../configDB.js';

export async function createTableAluno(){
    openDb().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS Aluno (id INTEGER PRIMARY KEY, nome TEXT, idade INTEGER)');
    })
};


export async function insertAluno(aluno){
    openDb().then(db=>{
        db.run('INSERT INTO Aluno (nome, idade) VALUES (?,?)' , [aluno.nome, aluno.idade]);
    })

};

export async function updateAluno(aluno){
    openDb().then(db=>{
        db.run('UPDATE Aluno SET nome=?, idade=? WHERE id=?',  [aluno.nome, aluno.idade, aluno.id]);
    })

};

export async function selectAluno(id){
    return openDb().then(db=>{
        return db.get('SELECT * FROM Aluno WHERE id=? ', [id]).then(res=>res);
    });
};

export async function selectAlunos(){
    return openDb().then(db=>{
        return db.all('SELECT * FROM Aluno').then(res=>res);
    });
};

export async function deleteAluno(id){
    return openDb().then(db=>{
        return db.get('DELETE FROM Aluno WHERE id=? ', [id]).then(res=>res);
    });
};


