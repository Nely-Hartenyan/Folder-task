import React from "react";
import { useParams } from "react-router-dom";
import Form from "../Form/Form";
import Item from "../Items/Item";


const FolderItems = ( { items } ) => {

    const { Folderid } = useParams()

    const folders = items.filter( item => item.parent === Folderid )

return(
        <div>
            <Form items = { items }/>
            { folders.map( item => {
                return (
                    <Item
                        key = { item.id }
                        item = { item }
                    />
                )
            })}

        </div>
)}

export default FolderItems;