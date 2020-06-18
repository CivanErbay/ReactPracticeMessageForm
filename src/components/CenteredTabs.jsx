import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Home from "./Home";
import About from "./About";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
});

export default function CenteredTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Paper className={classes.root}>

            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered
            >


                    <Link to="/about"><Tab label="About"/></Link>
                    <Link to="/home"> <Tab label="Home"/></Link>
                <Tab label="Item Three"/>

            </Tabs>
        </Paper>
    );
}
