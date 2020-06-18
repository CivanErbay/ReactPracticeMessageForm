import React, {useState} from 'react';
import './App.css';
import Grid from "@material-ui/core/Grid";
import Form from "./components/Form";
import CenteredTabs from "./components/CenteredTabs";
import { createMuiTheme } from '@material-ui/core/styles';
import {MuiThemeProvider} from "@material-ui/core";
import teal from "@material-ui/core/colors/teal";
import {BrowserRouter} from "react-router-dom";




const theme = createMuiTheme({
    palette: {
        primary: {
            main: teal[800],
        },
        secondary: {
            main: '#f44336',
        },
    },
});


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

        <BrowserRouter>       {/* BrowserRouter sollte alle Routes und switches umfassen. Diese befinden sich z.B. in den low-level Komponenten (hier Form und Tabs)*/}
            <MuiThemeProvider theme={theme}>
            <CenteredTabs/>
            <Grid
                container
                direction="column"
                alignItems="center"
                justify="center"
                style={{ minHeight: "94vh" }}
            >
                <Form handleChange={handleChange} handleSubmit={handleSubmit} email={messageState.email}/>


            </Grid>
            </MuiThemeProvider>
        </BrowserRouter>
        </div>
    );
}

export default App;
