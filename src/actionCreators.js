
export const fetchCollections = () => dispatch => {
    fetch("http://localhost:3000/collections")
        .then(resp => resp.json())
        .then(data => {
            dispatch({ type: 'FETCH_COLLECTIONS', payload: { collections: data } })
        }
        )
}

export const createNewCollection = (collection_obj) => dispatch => {
    fetch("http://localhost:3000/collections", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({ collection: collection_obj })
    })
        .then(resp => resp.json())
        .then(
            data  => {
                dispatch({ type: 'CREATE_COLLECTION', payload: { collection: data } })
            }
        )
}

// export const createNewCollection = collection_obj => (
//     {type: "CREATE_COLLECTION", payload: {collection_obj}})

export const createItem = item_obj => dispatch => {
    
    // fetch("http://localhost:3000/items", {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //         "Accept": "application/json"
    //     },
    //     body: JSON.stringify({ item: item_obj })

    
    let formdata = new FormData();
    for ( var key in item_obj ) {
        formdata.append(key, item_obj[key]);
    }
    formdata.append("image", { uri: item_obj.image, name: `${item_obj.id}.jpg`, type: 'image/jpeg' })



    fetch(`http://localhost:3000/items`, {
        method: "POST",
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        body: formdata
    }).then(
        resp=>resp.json()
    )    .then(
        data  => {
            dispatch({ type: 'CREATE_ITEM', payload: { item: data } })
        }
    )
}

export const uploadImage = (itemId, imageUri) => dispatch => {
    let formdata = new FormData();
    formdata.append("image", { uri: imageUri, name: `${itemId}.jpg`, type: 'image/jpeg' })
    
    fetch(`http://localhost:3000/items/${itemId}/image`, {
        method: "POST",
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        body: formdata
    })
    .then(resp => resp.json())
    .then(
        data  => {
            dispatch({ type: 'UPDATE_ITEM', payload: { item: data } })
        }
    )
}

export const updateItem = (itemId, item_obj) => dispatch => {
    fetch(`http://localhost:3000/items/${itemId}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({ ...item_obj })
    })
    .then(resp => resp.json())
    .then(
        data  => {
            dispatch({ type: 'UPDATE_ITEM', payload: { item: data } })
        }
    )
}

export const signUp = (form) => dispatch => {
    fetch(`http://localhost:3000/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(form)
    })
    .then(resp => resp.json())
    .then(
        data  => {
            dispatch({ type: 'SIGN_UP', payload: { item: data } })
        }
    )
}

export const signIn = (form) => dispatch => {
    fetch(`http://localhost:3000/items/${itemId}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(form)
    })
    .then(resp => resp.json())
    .then(
        data  => {
            dispatch({ type: 'SIGN_IN', payload: { item: data } })
        }
    )
}
