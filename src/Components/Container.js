import React from "react";
import Form from "./Form/Form";
import Item from "./Items/Item";


const Container = ({ items }) => {

    const item = items.filter( item => item.parent === '0')

    return (
        <div>
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