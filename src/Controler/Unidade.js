import { openDb } from '../configDB.js';

export async function createTableUnidade(){
    openDb().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS Unidade (id INTEGER PRIMARY KEY, nome TEXT, localidade TEXT, diretor TEXT, telefone INTEGER )');
    })
};

export async function insertUnidade(unidade){
    openDb().then(db=>{
        db.run('INSERT INTO Unidade (nome, localidade, diretor, telefone) VALUES (?,?,?,?)' , [unidade.nome, unidade.localidade, unidade.diretor, unidade.telefone]);
    })

};

export async function updateUnidade(unidade){
    openDb().then(db=>{
        db.run('UPDATE Unidade SET nome=?, localidade=?, diretor=?, telefone=? WHERE id=?',  [unidade.nome, unidade.localidade, unidade.diretor, unidade.telefone, unidade.id]);
    })

};

export async function selectUnidade(id){
    return openDb().then(db=>{
        return db.get('SELECT * FROM Unidade WHERE id=? ', [id]).then(res=>res);
    });
};

export async function selectUnidades(){
    return openDb().then(db=>{
        return db.all('SELECT * FROM Unidade').then(res=>res);
    });
};

export async function deleteUnidade(id){
    return openDb().then(db=>{
        return db.get('DELETE FROM Unidade WHERE id=? ', [id]).then(res=>res);
    });
};


