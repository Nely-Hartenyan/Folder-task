import Types from "./action.type";

const defaultState = {
    items:[],
    trashItems:[],
}

export const Reducer = (state= defaultState, action) => {
    switch (action.type){

        case Types.ADD_NEW_FOLDER:
            const existsFolder = state.items.some(item => item.filter === action.payload.newFolder.filter
                && item.label === action.payload.newFolder.label
                &&  item.parent === action.payload.newFolder.parent)

            if ( existsFolder ){
                return {...state}
            }
            return { ...state, items: [...state.items, action.payload.newFolder]}

        case Types.ADD_NEW_DOC:
            const existsDoc = state.items.some(item => item.label === action.payload.newDoc.label
                && item.filter === action.payload.newDoc.filter
                && item.parent === action.payload.newDoc.parent );

            if( existsDoc ){
                return {...state}
            }
                return {...state, items: [...state.items, action.payload.newDoc]}

        case Types.ADD_DOC_TEXT:
           state.items.find( item => item.id === action.payload.id).text = action.payload.text

            return {...state, items: [...state.items]}

        case Types.DELETE_ITEM:
            return {...state, items: state.items.filter(item => item.id !== action.payload.id
                    && Number(item.parent) !== action.payload.id)}

        case Types.DELETE_ALL_ITEMS:

            return {...state, items: []}

        case Types.ADD_TRASH :
            const items = state.items.filter(item => Number(item.parent) === action.payload.id )

            if(items.length > 0) {

                let concatItems = items.concat(action.payload)
                let trashItems = concatItems.concat(state.trashItems)

                return  {...state, trashItems: trashItems}
            }
            return {...state, trashItems: [...state.trashItems, action.payload]}

        case Types.DELETE_TRASH_ITEM:{
            return {...state, trashItems: state.trashItems.filter(item => item.id !== action.payload.id
                    && Number(item.parent) !== action.payload.id)}
            }

        case Types.RESTORE_TRASH_ITEM:
            const trashItems = state.trashItems.filter(item => Number(item.parent) === action.payload.id )

                 if(trashItems.length > 0) {
                        let concatTrashItems = trashItems.concat(action.payload)
                        let restoreItems = concatTrashItems.concat(state.items)

                        return {...state, items: restoreItems}
                    }
                 else
                 {
                     return {...state, items: [...state.items, action.payload]}
                 }

        case Types.DELETE_TRASH:
            return { ...state, trashItems: []}

        default:
            return state
    }
}
