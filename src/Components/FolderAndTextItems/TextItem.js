import React, {useState} from "react";
import {Button} from "@material-ui/core";
import {useStyles} from "../Form/FormStyle";
import {useHistory, useLocation, useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addDocText, deleteItem} from "../Redux/action.creator";
import Snackbar from "@material-ui/core/Snackbar";
import {Alert} from "@material-ui/lab";

function TextItem(){

    const classes = useStyles();
    const history = useHistory();
    const [input, setInput] = useState();
    const location = useLocation();
    const dispatch = useDispatch();
    const [text, setText] = useState(false);

    const changeInput = (event) => {
        setInput(event.currentTarget.value);
    }
    
    const addText = (event) => {
            const newDocText = {text: input, id: location.state[0].id}
            console.log(newDocText)
            dispatch(addDocText(newDocText))
            setText(true)
        }


    const handleClose = (event, reason) => {
        if (reason === 'timeout') {
            return;
        }
        setText(false);
    };

    return(
        <div>
            <Snackbar
                open = {text}
                onClose = {handleClose}
                anchorOrigin = {{
                    vertical: 'top',
                    horizontal: 'right'
                }}>
                <Alert
                    onClose = {handleClose}
                       severity = "success"
                >
                    Text added
                </Alert>
            </Snackbar>
        <div>
            <textarea
                id = ""
                cols = "100"
                rows = "20"
                defaultValue = {location.state[0].text}
                onChange = {changeInput}
            />
        </div>
                <Button
                    variant = "contained"
                    color = "primary"
                    className = {classes.btn}
                    onClick = {addText}
                    >
                    Add Text
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

export default TextItem