import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase("collections.db")

export const init = () => {
    const promise = new Promise((resolve, reject)=>{
        db.transaction((tx)=>{
            tx.executeSql(`CREATE TABLE IF NOT EXISTS collections (
                id INTEGER PRIMARY KEY NOT NULL, 
                title TEXT,
                data_title_1 TEXT, 
                data_title_2 TEXT, 
                data_title_3 TEXT, 
                data_title_4 TEXT, 
                data_title_5 TEXT, 
                data_title_6 TEXT, 
                data_title_7 TEXT, 
                data_title_8 TEXT, 
                data_title_9 TEXT, 
                data_title_10 TEXT
                );`, [],
                () => {
                    resolve()
                },
                (_,err) => {
                    reject(err)
                }
            )
        })  
    })
    return promise
}