import React from "react";
import FolderIcon from '@material-ui/icons/Folder';
import DescriptionIcon from '@material-ui/icons/Description';
import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import {useStyles} from "./TrashStyle";
import RestoreFromTrashIcon from '@material-ui/icons/RestoreFromTrash';

export const TrashItem = ({trashItem, restoreItem,deleteItem}) => {

    const classes = useStyles();

    if (trashItem.filter === 'folder')
        return <Card className = {classes.root} >
            <CardActionArea>
                <CardMedia title = "Contemplative Reptile">
                    <FolderIcon className = {classes.icon}/>
                </CardMedia>
                <CardContent className = {classes.cardContent}>
                    <Typography
                        gutterBottom variant = "h5"
                        component = "h2"
                    >
                        {trashItem.label}
                    </Typography>
                    <RestoreFromTrashIcon
                        className = {classes.restoreIcon }
                        onClick={ () => restoreItem(trashItem)}
                    />
                    <DeleteIcon
                        className = {classes.deleteIcon}
                        onClick = { () => deleteItem(trashItem)}
                    />

                </CardContent>
            </CardActionArea>
        </Card>

    else if (trashItem.filter === 'doc')
        return <Card className = {classes.root}>
            <CardActionArea>
                <CardMedia title ="Contemplative Reptile">
                    <DescriptionIcon className = {classes.icon}  />
                </CardMedia>
                <CardContent className = {classes.cardContent}>
                    <Typography
                        gutterBottom variant = "h5"
                        component = "h2"
                    >
                        {trashItem.label}
                    </Typography>
                    <RestoreFromTrashIcon
                        className = {classes.restoreIcon}
                        onClick={ () => restoreItem(trashItem)}
                    />
                    <DeleteIcon
                        className = {classes.deleteIcon}
                        onClick = { () => deleteItem(trashItem)}
                    />
                </CardContent>
            </CardActionArea>
        </Card>


    return null
}