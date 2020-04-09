
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

// export const CREATE_ITEM = item_obj => {

// }

// export const UPDATE_ITEM = item_obj => {

// }
