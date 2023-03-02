import { openDb } from "../configDB.js";

export async function createTableProfessor(){
    openDb().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS Professor (id INTEGER PRIMARY KEY, nome TEXT, idade INTEGER, disciplina TEXT)');
    })
};

export async function insertProfessor(professor){
    openDb().then(db=>{
        db.run('INSERT INTO Professor (nome, idade, disciplina) VALUES (?,?,?)' , [professor.nome, professor.idade, professor.disciplina] );
    })

};

export async function updateProfessor(professor){
    openDb().then(db=>{
        db.run('UPDATE Professor SET nome=?, idade=?, disciplina=? WHERE id=? ' , [professor.nome, professor.idade, professor.disciplina, professor.id] );
    })
};

export async function selectProfessor(id){
    return openDb().then(db=>{
        return db.get('SELECT * FROM Professor WHERE id=? ', [id]).then(res=>res);
    });
};

export async function selectProfessores(){
    return openDb().then(db=>{
        return db.all('SELECT * FROM Professor').then(res=>res);
    });
};


export async function deleteProfessor(id){
    return openDb().then(db=>{
        return db.get('DELETE FROM Professor WHERE id=? ', [id]).then(res=>res);
    });
};
