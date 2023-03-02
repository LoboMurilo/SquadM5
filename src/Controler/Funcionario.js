import { openDb } from '../configDB.js';

export async function createTableFuncionario(){
    openDb().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS Funcionario (id INTEGER PRIMARY KEY, nome TEXT, idade INTEGER, funcao TEXT)');
    })
};


export async function insertFuncionario(funcionario){
    openDb().then(db=>{
        db.run('INSERT INTO Funcionario (nome, idade, funcao) VALUES (?,?,?)' , [funcionario.nome, funcionario.idade, funcionario.funcao]);
    })

};

export async function updateFuncionario(funcionario){
    openDb().then(db=>{
        db.run('UPDATE Funcionario SET nome=?, idade=?, funcao? WHERE id=?',  [funcionario.nome, funcionario.idade, funcionario.funcao, funcionario.id]);
    })

};

export async function selectFuncionario(id){
    return openDb().then(db=>{
        return db.get('SELECT * FROM Funcionario WHERE id=? ', [id]).then(res=>res);
    });
};

export async function selectFuncionarios(){
    return openDb().then(db=>{
        return db.all('SELECT * FROM Funcionario').then(res=>res);
    });
};

export async function deleteFuncionario(id){
    return openDb().then(db=>{
        return db.get('DELETE FROM Funcionario WHERE id=? ', [id]).then(res=>res);
    });
};


