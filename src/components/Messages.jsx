import React, {useState} from 'react'
import {Grid} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(4),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));

export default function Messages () {

    const [messages, setMessages] = useState([])



    const getMessages = async event => {
        event.preventDefault()
        const response = await fetch("http://localhost:8080/api/send")
        const data = await response.json()
        setMessages(data)
    }


    const classes = useStyles();
    return (
        <Grid
            container
            direction="column"
            alignItems="center"
            justify="flex-start"
            margin="1"
            style={{minHeight: "94vh"}}
        >
            <Button variant="contained" size="large" color="primary" className={classes.margin} onClick={getMessages}>
                Messages
            </Button>

            <div>
                {messages.map(message => <p> {message.name} {message.message} {message.email}</p>)}
            </div>
        </Grid>
    )
}