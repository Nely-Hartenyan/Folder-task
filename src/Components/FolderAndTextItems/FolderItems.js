import React from "react";
import {useHistory, useParams} from "react-router-dom";
import Form from "../Form/Form";
import Item from "../Items/Item";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const FolderItems = ( { items } ) => {

    const { Folderid } = useParams()
    const history = useHistory()

    const folders = items.filter( item => item.parent === Folderid )

return(
        <div>
            <ArrowBackIcon onClick = {() => history.goBack()}/>
           <ArrowForwardIcon onClick = {() => history.goForward()}/>

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