import { openDb } from '../configDB.js';

export async function createTableCurso(){
    openDb().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS Curso (id INTEGER PRIMARY KEY, nome TEXT, turma INTEGER)');
    })
};


export async function insertCurso(curso){
    openDb().then(db=>{
        db.run('INSERT INTO Curso (nome, turma) VALUES (?,?)' , [curso.nome, curso.turma]);
    })

};

export async function updateCurso(curso){
    openDb().then(db=>{
        db.run('UPDATE Curso SET nome=?, turma=? WHERE id=?',  [curso.nome, curso.turma, curso.id]);
    })

};

export async function selectCurso(id){
    return openDb().then(db=>{
        return db.get('SELECT * FROM Curso WHERE id=? ', [id]).then(res=>res);
    });
};

export async function selectCursos(){
    return openDb().then(db=>{
        return db.all('SELECT * FROM Curso').then(res=>res);
    });
};

export async function deleteCurso(id){
    return openDb().then(db=>{
        return db.get('DELETE FROM Curso WHERE id=? ', [id]).then(res=>res);
    });
};


