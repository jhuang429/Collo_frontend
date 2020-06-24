import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase("collections.db")

export const initCollectionsDB = () => {
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
                (_,result) => {
                    resolve(result)
                },
                (_,err) => {
                    reject(err)
                }
            )
        })  
    })
    return promise
}

export const initItemsDB = () => {
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
                (_,result) => {
                    resolve(result)
                },
                (_,err) => {
                    reject(err)
                }
            )
        })  
    })
    return promise
}


export const getCollectionsFromDB = () => {
    const promise = new Promise((resolve, reject)=>{
        db.transaction((tx)=>{
            tx.executeSql(`SELECT * FROM collections`, [],
                (_,result) => {
                    resolve(result)
                },
                (_,err) => {
                    reject(err)
                }
            )
        })  
    })
    return promise
}

export const CreateCollectionInDB = (obj) => {
    const promise = new Promise((resolve, reject)=>{
        db.transaction((tx)=>{
            tx.executeSql(`INSERT INTO collections ( 
                title,
                data_title_1, 
                data_title_2, 
                data_title_3, 
                data_title_4, 
                data_title_5, 
                data_title_6, 
                data_title_7, 
                data_title_8, 
                data_title_9, 
                data_title_10
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) ;`, 
                [        
                obj.title,
                obj.data_title_1,
                obj.data_title_2,
                obj.data_title_3,
                obj.data_title_4,
                obj.data_title_5,
                obj.data_title_6,
                obj.data_title_7,
                obj.data_title_8,
                obj.data_title_9,
                obj.data_title_10],
                (_,result) => {
                    resolve(result)
                },
                (_,err) => {
                    reject(err)
                }
            )
        })  
    })
    return promise
}