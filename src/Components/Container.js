import React from "react";
import Form from "./Form/Form";
import Item from "./Items/Item";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import {useHistory} from "react-router-dom";

const Container = ({ items }) => {

    const history = useHistory()
    const item = items.filter( item => item.parent === '0')

    return (
        <div>
            <ArrowForwardIcon onClick = {() => history.goForward()}/>
            <Form items = { items }/>
            { item.map(item => {
                return (
                    <Item
                        key = { item.id }
                        item = { item }
                    />
                )
            })}
        </div>
    );
}

export default Container;