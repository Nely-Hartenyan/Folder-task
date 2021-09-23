import React from "react";
import {useParams} from "react-router-dom";
import {TrashItem} from "./TrashItem";

const TrashItems = ({trash}) => {

    const {Folderid} = useParams()

    const folders = trash.filter(item => item.parent === Folderid)

    return(
        <div>
            {folders.map(trashItem => {
                return (
                    <TrashItem
                        trashItem={trashItem}
                        key = {trashItem.id}
                    />
                )
            })}
        </div>
    )
}

export default TrashItems;