import { openDb } from '../configDB.js';

export async function createTableSegmento(){
    openDb().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS Segmento (id INTEGER PRIMARY KEY, ano INTEGER, grau INTEGER)');
    })
};

export async function insertSegmento(segmento){
    openDb().then(db=>{
        db.run('INSERT INTO Segmento (ano, grau) VALUES (?,?)' , [ segmento.ano, segmento.grau]);
    })

};

export async function updateSegmento(segmento){
    openDb().then(db=>{
        db.run('UPDATE Segmento SET ano=?, grau=? WHERE id=?',  [segmento.ano, segmento.grau, segmento.id]);
    })

};

export async function selectSegmento(id){
    return openDb().then(db=>{
        return db.get('SELECT * FROM Segmento WHERE id=? ', [id]).then(res=>res);
    });
};

export async function selectSegmentos(){
    return openDb().then(db=>{
        return db.all('SELECT * FROM Segmento').then(res=>res);
    });
};

export async function deleteSegmento(id){
    return openDb().then(db=>{
        return db.get('DELETE FROM Segmento WHERE id=? ', [id]).then(res=>res);
    });
};


