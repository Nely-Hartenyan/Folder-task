import React, {useState} from "react";
import {Button} from "@material-ui/core";
import {useStyles} from "../Form/FormStyle";
import {useHistory, useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addDocText} from "../Redux/action.creator";
import Snackbar from "@material-ui/core/Snackbar";
import {Alert} from "@material-ui/lab";

 const  TextItem = ({items}) => {

    const {Docid} = useParams()
    const classes = useStyles();
    const history = useHistory();
    const [input, setInput] = useState();
    const dispatch = useDispatch();
    const [text, setText] = useState(false);

    const item = items.find((el) => el.id === Number(Docid))

    const changeInput = (event) => {
        setInput(event.currentTarget.value);
    }
    
    const addText = (event) => {
            const newDocText = {text: input, id: Number(Docid)}
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
                defaultValue = {item.text}
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