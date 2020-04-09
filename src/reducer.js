const initialState = {
    collections: []
}

export const reducer = (prevState = initialState, action) => {
    switch (action.type) {
        case 'FETCH_COLLECTIONS':
            return { ...prevState, collections: action.payload.collections }
        case 'CREATE_COLLECTION':
            return { ...prevState, collections: [...prevState.collections, action.payload.collection] }
        case 'CREATE_ITEM':
            return { ...prevState, collections: action.payload.collections }
        case 'UPDATE_ITEM':
            return { ...prevState, collections: action.payload.collections }
        case 'TEST':
            debugger
            break
        default:
            return prevState
    }
}