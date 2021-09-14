import Types from "./action.type";


export function addNewFolder (payload) {
    return{
        type: Types.ADD_NEW_FOLDER,
        payload: payload
    }
}

export function deleteAllFolders (payload){
    return {
        type: Types.DELETE_ALL_ITEMS,
        payload: payload
    }
}

export function addNewDoc (payload){
    return {
        type:Types.ADD_NEW_DOC,
        payload:payload
    }
}

export function deleteItem (payload){
    return {
        type:Types.DELETE_ITEM,
        payload:payload
    }
}

export function addTrash (payload){
    return {
        type:Types.ADD_TRASH,
        payload:payload
    }
}

export function deleteTrashItem (payload){
    return {
        type:Types.DELETE_TRASH_ITEM,
        payload:payload
    }
}

export function restoreTrashItem ( payload ){
    return {
        type: Types.RESTORE_TRASH_ITEM,
        payload: payload
    }
}

export function deleteTrashItems(payload){
    return {
        type: Types.DELETE_TRASH,
        payload: payload
    }
}

export function addDocText (payload){
    return {
        type:Types.ADD_DOC_TEXT,
        payload:payload
    }
}