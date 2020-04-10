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
            let collection = prevState.collections.find(coll => coll.id === action.payload.item.collection_id)
            collection.items.push(action.payload.item)
            let otherCollections = prevState.collections.filter(coll => coll.id !== action.payload.item.collection_id)
            return { ...prevState, collections: [...otherCollections, collection] }
        case 'UPDATE_ITEM':
            let coll = prevState.collections.find(coll => coll.id === action.payload.item.collection_id)
            let otherItems = coll.items.filter(item => item.id !== action.payload.item.id)
            coll.items = [...otherItems, action.payload.item]
            otherCollections = prevState.collections.filter(coll => coll.id !== action.payload.item.collection_id)
            return { ...prevState, collections: [...otherCollections, coll] }
        default:
            return prevState
    }
}