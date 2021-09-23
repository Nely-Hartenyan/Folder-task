import React, {useState} from "react";
import {Button} from "@material-ui/core";
import {useStyles} from "./TrashStyle";
import {TrashItem} from "./TrashItem";
import {useDispatch} from "react-redux";
import {deleteTrashItem, deleteTrashItems, restoreTrashItem} from "../Redux/action.creator";
import {useHistory} from "react-router-dom";
import Snackbar from "@material-ui/core/Snackbar";
import {Alert} from "@material-ui/lab";

const TrashPage = ({trash,items}) => {


    const classes = useStyles();
    const dispatch = useDispatch()
    const history = useHistory()
    const [folderOpen, setFolderOpen] = useState(false);
    const [docOpen, setDocOpen] = useState(false);
    const [added, setAdded] = useState(false);
    const [deleted,setDeleted]  = useState(false)

    const handleClose = (event, reason) => {
        if (reason === 'timeout') {
            return;
        }
        setFolderOpen(false);
        setDocOpen(false);
        setAdded(false)
        setDeleted(false)
    };

    const restoreItem = (trashItem) => {
        const existsFolder = items.some(item => item.label === trashItem.label &&  trashItem.filter === 'folder'  && item.filter === 'folder')
        const existsDoc = items.some(item => item.label === trashItem.label && trashItem.filter === 'doc' && item.filter === 'doc')
        console.log(existsFolder)
        console.log(existsDoc)

        if (existsFolder) {
            setFolderOpen(true)
        }
        else if(existsDoc)
        {
            setDocOpen(true)
        }
        else
        {
            dispatch(restoreTrashItem(trashItem))
            setAdded(true)
        }
    }

        const deleteTrash = () => {
        dispatch(deleteTrashItems())
            setDeleted(true)
    }

    const deleteItem = (trashItem) => {
        dispatch(deleteTrashItem(trashItem))
        setDeleted(true)

    }
    const item = trash.filter(item => item.status === true )

    return (
        <div>
            <Snackbar
                open = {folderOpen}
                onClose = {handleClose}
                anchorOrigin = {{
                    vertical: 'top',
                    horizontal: 'right'
                }}>
                <Alert onClose = {handleClose}
                       severity = "error">
                    There is a folder with this name
                </Alert>
            </Snackbar>

            <Snackbar
                open = {docOpen}
                onClose = {handleClose}
                anchorOrigin = {{
                    vertical: 'top',
                    horizontal: 'right'
                }}>
                <Alert onClose = {handleClose}
                       severity = "error">
                    There is a doc with this name
                </Alert>
            </Snackbar>

            <Snackbar
                open = {added}
                onClose = {handleClose}
                anchorOrigin = {{
                    vertical: 'top',
                    horizontal: 'right'
                }}>
                <Alert onClose = {handleClose}
                       severity = "success">
                   Restored
                </Alert>
            </Snackbar>

            <Snackbar
                open = {deleted}
                onClose = {handleClose}
                anchorOrigin = {{
                    vertical: 'top',
                    horizontal: 'right'
                }}>
                <Alert severity = "success">
                    Deleted
                </Alert>
            </Snackbar>

            <div>
                {item.map(item => {
                    return (
                        <TrashItem
                            key={item.id}
                            trashItem={item}
                            restoreItem = {restoreItem}
                            deleteItem={deleteItem}
                        />
                    )
                })}
            </div>
            <Button
                variant="contained"
                color="primary"
                className={classes.btn}
                onClick={ deleteTrash}
            >
                Delete
            </Button>
            <Button
                variant="contained"
                color="primary"
                className={classes.btn}
                onClick={() => history.push(`/`)}
            >
                Home
            </Button>
        </div>
    )
}

export default TrashPage;