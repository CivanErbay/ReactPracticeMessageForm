import React from 'react';
import './App.css';

import CenteredTabs from "./components/CenteredTabs";
import {createMuiTheme} from '@material-ui/core/styles';
import {MuiThemeProvider} from "@material-ui/core";
import teal from "@material-ui/core/colors/teal";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import About from "./components/About";
import Impressum from "./components/Impressum";
import Home from "./components/Home";
import Messages from "./components/Messages";


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


    return (
        <div className="App">

            <BrowserRouter>       {/* BrowserRouter sollte alle Routes und switches umfassen. Diese befinden sich z.B. in den low-level Komponenten (hier Form und Tabs)*/}
                <MuiThemeProvider theme={theme}>

                    <CenteredTabs/>
                    <Switch>
                        <Route path="/home">
                            <Home/>
                        </Route>

                        <Route path="/messages">
                            <Messages/>
                        </Route>

                        <Route path="/impressum">
                            <Impressum/>
                        </Route>

                        <Route path="/about/:name">
                            <About />
                        </Route>

                    </Switch>
                </MuiThemeProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;
