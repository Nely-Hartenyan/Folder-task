import React from "react";
import FolderIcon from '@material-ui/icons/Folder';
import DescriptionIcon from '@material-ui/icons/Description';
import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@material-ui/core";
import {useStyles} from "./ItemStyle";
import {useHistory} from "react-router-dom";
import DeleteIcon from '@material-ui/icons/Delete';
import {useDispatch} from "react-redux";
import {deleteItem} from "../../Toolkit/toolkitSlice";

const Item = ({item}) => {

    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch()

    const trashItem =  (item) => {
        dispatch(deleteItem(item))
}

    return (
        <>
            {item.filter === 'folder' &&
            <Card className = {classes.root}>
                <CardActionArea>
                    <CardMedia
                        title = "Contemplative Reptile"
                        onClick = { () => history.push(`/folder/${item.id}`)}
                    >
                        <FolderIcon className = {classes.icon}/>
                    </CardMedia>

                    <CardContent className = {classes.cardContent}>
                        <Typography
                            gutterBottom variant = "h5"
                            component = "h2"
                        >
                            {item.label}
                        </Typography>
                        <DeleteIcon
                            className = {classes.deleteIcon}
                            onClick = { () => trashItem(item)}
                        />
                    </CardContent>
                </CardActionArea>
            </Card>
            }
            {item.filter === 'doc' &&
            <Card className = {classes.root}>
                <CardActionArea>
                    <CardMedia
                        title = "Contemplative Reptile"
                        onClick = { () => history.push(`/text/${item.id}`, [item])}
                    >
                        <DescriptionIcon className = {classes.icon}/>
                    </CardMedia>
                    <CardContent className = {classes.cardContent}>
                        <Typography
                            gutterBottom variant = "h5"
                            component = "h2"
                        >
                            {item.label}
                        </Typography>
                        <DeleteIcon
                            className = {classes.deleteIcon}
                            onClick = { () => trashItem(item)}
                        />
                    </CardContent>
                </CardActionArea>
            </Card>
            }
        </>
    )
}

export default Item