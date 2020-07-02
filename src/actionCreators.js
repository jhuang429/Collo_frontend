import { Alert, AsyncStorage } from 'react-native'
import * as FileSystem from 'expo-file-system'; ''
import { getCollectionsFromDB, CreateCollectionInDB, getItemsFromDB, CreateItemInDB } from '../db'


const api = "http://localhost:3000"



export const fetchCollections = (token) => dispatch => {
    getCollectionsFromDB()
        .then(data => {
            console.log(data.rows._array)
            dispatch({ type: 'FETCH_COLLECTIONS', payload: { collections: data.rows._array } })
        }
        )
    }

    export const fetchItems = (token) => dispatch => {
        getItemsFromDB()
            .then(data => {
                console.log(data.rows._array)
                dispatch({ type: 'FETCH_ITEMS', payload: { items: data.rows._array } })
            }
            )
    }

    export const createNewCollection = (collection_obj) => dispatch => {
        console.log("CREATING")
        CreateCollectionInDB(collection_obj).then((x) => console.log("return", x))
        // fetch(`${api}/collections`, {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //         "Accept": "application/json"
        //     },
        //     body: JSON.stringify({ collection: collection_obj })
        // })
        //     .then(resp => resp.json())
        //     .then(
        //         data => {
        //             dispatch({ type: 'CREATE_COLLECTION', payload: { collection: data } })
        //         }
        //     )
    }

    export const editCollection = (collection_obj) => dispatch => {
        fetch(`${api}/collections/${collection_obj.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({ collection: collection_obj })
        })
            .then(resp => resp.json())
            .then(
                data => {
                    dispatch({ type: 'EDIT_COLLECTION', payload: { collection: data } })
                }
            )
    }

    export const createItem = item_obj => dispatch => {

        let formdata = new FormData();
        for (var key in item_obj) {
            formdata.append(key, item_obj[key]);
        }
        formdata.append("image", { uri: item_obj.image, name: `${item_obj.id}.jpg`, type: 'image/jpeg' })

        fetch(`${api}/items`, {
            method: `POST`,
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            body: formdata
        }).then(
            resp => resp.json()
        ).then(
            data => {
                dispatch({ type: 'CREATE_ITEM', payload: { item: data } })
            }
        )
    }

    export const uploadImage = (itemId, imageUri) => dispatch => {
        const fileName = `${itemId}.jpg`
        const newPath = FileSystem.documentDirectory + fileName

        try {
            FileSystem.moveAsync({
                from: imageUri,
                to: newPath
            })
            console.log(newPath)
        } catch (err) {
            console.log(err)
            throw err
        }


        // let formdata = new FormData();
        // formdata.append("image", { uri: imageUri, name: `${itemId}.jpg`, type: 'image/jpeg' })

        // fetch(`${api}/items/${itemId}/image`, {
        //     method: "POST",
        //     headers: {
        //         'Content-Type': 'multipart/form-data',
        //     },
        //     body: formdata
        // })
        //     .then(resp => resp.json())
        //     .then(
        //         data => {
        //             dispatch({ type: 'UPDATE_ITEM', payload: { item: data } })
        //         }
        //     )
    }

    export const updateItem = (itemId, item_obj) => dispatch => {
        fetch(`${api}/items/${itemId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({ ...item_obj })
        })
            .then(resp => resp.json())
            .then(
                data => {
                    dispatch({ type: 'UPDATE_ITEM', payload: { item: data } })
                }
            )
    }

    export const signUp = (form) => dispatch => {
        fetch(`${api}/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(form)
        })
            .then(resp => resp.json())
            .then(response => {
                if (response.errors) {
                    Alert.alert(response.errors[0])
                }
                else {
                    data => {
                        dispatch({ type: 'SIGN_IN', payload: { user: data.user, token: data.token } })
                        // navigation.push('MainApp')
                    }
                }
            }
            )
    }

    export const signIn = (form) => dispatch => {
        fetch(`${api}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(form)
        })
            .then(resp => resp.json())
            .then(data => {
                if (data.errors) {
                    Alert.alert(data.errors)
                }
                else {
                    AsyncStorage.setItem('token', data.token)
                    dispatch({ type: 'SIGN_IN', payload: { user: data.user, token: data.token } })
                }
            }
            )

    }

    export const logOut = () => {
        AsyncStorage.clear()
        return ({ type: 'LOG_OUT' })
    }


    export const autoSignIn = (token) => dispatch => {
        fetch(`${api}/autologin`, {
            headers: {
                "Authorization": token
            }
        })
            .then(resp => resp.json())
            .then(data => {
                dispatch({ type: 'SIGN_IN', payload: { user: data.user, token: token } })
            }
            )

    }