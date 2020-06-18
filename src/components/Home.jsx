import React, {useState} from 'react'
import Grid from "@material-ui/core/Grid";
import Form from "./Form";


export default function Home () {
    const [messageState, setMessage] = useState({name: "", email: "", message: ""})


    const handleChange = event => {  //HandleChange ändert Werte sobald etwas eingetippt wird, also tatsächlich bei jeder einzelnen Eingabe!
        const value = event.target.value;
        setMessage({
            ...messageState,
            [event.target.name]: value
        });
    }

    const handleSubmit = async event => {  //pusht Eingaben ins Backend
        event.preventDefault()
        const response = await fetch("http://localhost:8080/api/send", {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(messageState) // body data type must match "Content-Type" header
        });
        console.log(response)
    }
    return (
        <Grid
            container
            direction="column"
            alignItems="center"
            justify="center"
            style={{minHeight: "94vh"}}
        >
            <Form handleChange={handleChange} handleSubmit={handleSubmit}
                  email={messageState.email}/>
        </Grid>

    )

}
