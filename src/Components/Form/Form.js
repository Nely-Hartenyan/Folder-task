import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import { useStyles } from "./FormStyle";
import { useDispatch } from "react-redux";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { addNewDoc, addNewFolder, deleteAllFolders } from "../Redux/action.creator";
import { Alert } from "@material-ui/lab";
import Snackbar from '@material-ui/core/Snackbar';


export default function Form( { items } ) {

    const classes = useStyles();
    const dispatch = useDispatch();
    const [input, setInput] = useState('');
    const { Folderid } = useParams();
    const { pathname } = useLocation()
    const pathInArray = pathname.split("/")
    const path = pathInArray.splice(2, pathInArray.length - 1)
    const history = useHistory()
    const [folderOpen, setFolderOpen] = useState(false);
    const [docOpen, setDocOpen] = useState(false);

    const addFolder = () => {

        if(input.length === 0) {
            setFolderOpen(true)
        }

       else if (input.length !== 0) {

            if (path.length === 0) {
                const newFolder = {id: Date.now(), label: input, exists: false, filter: 'folder', parent: '0'}
                const payload = {
                    path, newFolder
                }
                dispatch(addNewFolder(payload));
                setInput('')

            } else
            {
                const newFolder = {id: Date.now(), label: input, exists: false, filter: 'folder', parent: Folderid}
                const payload = {
                    path, newFolder
                }
                dispatch(addNewFolder(payload));
                setInput('')
            }
        }
    }

    const addDoc = () => {
        if(input.length === 0) {
            setDocOpen(true)
        }
        else if (input.length !== 0)
        {
            if (path.length === 0) {
                const newDoc = {id: Date.now(), label: input, exists: false, filter: 'doc', parent: '0', text:''}
                const payload = {
                    path, newDoc
                }
                dispatch(addNewDoc(payload));
                setInput('')

            } else
            {
                const newDoc = {id: Date.now(), label: input, exists: false, filter: 'doc', parent: Folderid, text:''}
                const payload = {
                    path, newDoc
                }
                dispatch(addNewDoc(payload));
                setInput('')

            }
        }
    }

    const change = (event) => {
        setInput(event.currentTarget.value);
    }

    const deleteItems = (items) => {
        dispatch(deleteAllFolders(items))
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setDocOpen(false);
        setFolderOpen(false);
    };

    return (
        <div className = {classes.container}>
            <Snackbar
                open={folderOpen}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
                <Alert
                    onClose={handleClose}
                    severity="error"
                >
                    Please enter the folder  name
                </Alert>
            </Snackbar>
            <Snackbar
                open={docOpen}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
                <Alert
                    onClose={handleClose}
                    severity="error"
                >
                    Please enter the doc  name
                </Alert>
            </Snackbar>
            <form
                className = {classes.root}
                noValidate autoComplete = "off"
            >
                <TextField
                    id = "outlined-basic"
                    value = {input}
                    variant = "outlined"
                    onChange = {change}
                    autoFocus
                />
                <Button
                    variant = "contained"
                    color = "primary"
                    className = {classes.btn}
                    onClick = {addFolder}>
                    Add Folder
                </Button>
                <Button
                    variant = "contained"
                    color = "primary"
                    className = {classes.btn}
                    onClick = {addDoc}>
                    Add Doc
                </Button>
                <Button
                    variant = "contained"
                    color = "primary"
                    className = {classes.btn}
                    onClick = {() => deleteItems(items)}>
                    Delete
                </Button>
                <Button
                    variant = "contained"
                    color = "primary"
                    className = {classes.btn}
                    onClick = {() => history.push(`/trash`)}>
                    Trash
                </Button>
            </form>
        </div>
    )
};