import React from 'react'
import {useParams} from 'react-router-dom'
import Grid from "@material-ui/core/Grid";

export default function About () {

    const { name } = useParams();
    return (
        <>

            <Grid
                container
                direction="column"
                alignItems="center"
                justify="center"
                style={{minHeight: "94vh"}}
            >
            <h1>This a website for no reason! The owner is {name} </h1>
            </Grid>
        </>
    )
}