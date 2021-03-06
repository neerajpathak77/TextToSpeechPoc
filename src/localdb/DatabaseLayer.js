import { AsyncStorage } from 'react-native' 

export default class DatabaseLayer {

    static addItemToList = (key, item) => {
        return new Promise((resolve, reject)=>{
            AsyncStorage.getItem(key)
                .then(req => {
                    let items = JSON.parse(req)
                    items = (items ==null || items==undefined) ? [] : items
                    items.push(item)
                    AsyncStorage.setItem(key, JSON.stringify(items))
                        .then(item => {
                        resolve(items)
                })
                .catch(error => reject(error))
            })
            .catch(error => reject(error));  
        })  
    }

    static getListFromStorage = (key) => {
        return new Promise((resolve, reject)=>{
            AsyncStorage.getItem(key)
            .then(req => {
                let items = JSON.parse(req) 
                items = (items ==null || items==undefined) ? [] : items
                resolve(JSON.parse(req))
            })
            .catch(error => reject(error))
        })  
    }

    static removeItemFromList = (key, item) => {
        return new Promise((resolve, reject)=>{
            AsyncStorage.getItem(key)
                .then(req => {
                    let items = JSON.parse(req)
                    items = (items ==null || items==undefined) ? [] : items
                    let index = items.findIndex((element)=>{return element.key == item.key})
                    if (index != -1) {items.splice(index, 1)}
                    AsyncStorage.setItem(key, JSON.stringify(items))
                        .then(item => {
                        resolve(items)
                })
                .catch(error => reject(error))
            })
            .catch(error => reject(error));  
        })  
    }

    static createNoteTemplateModel = (note) => {
        return {
            key: Date.now().toString(),
            note: note,
            timeStamp: Date.now()
        }
    }
}