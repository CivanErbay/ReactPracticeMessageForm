import React, {useState} from 'react';
import './App.css';

import Grid from "@material-ui/core/Grid";
import Form from "./components/Form";



function App() {
    const [messageState, setMessage] = useState({name: "", email:"", message:""})

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
        <div className="App">
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                style={{ minHeight: "100vh" }}
            >
                        <Form handleChange={handleChange} handleSubmit={handleSubmit} email={messageState.email}/>

            </Grid>
        </div>
    );
}

export default App;
