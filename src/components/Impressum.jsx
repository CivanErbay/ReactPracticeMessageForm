import React from "react"
import Grid from "@material-ui/core/Grid";

export default function Impressum () {
    return (
        <div>
            <Grid
                container
                direction="column"
                alignItems="center"
                justify="center"
                style={{minHeight: "94vh"}}
            >
            <h1>Impressum</h1>
            <div>
                <p>Name: Civan Erbay</p>
                <p>Adress: Brüsseler Str. 37</p>
                <p>50674 Köln</p>
            </div>
            </Grid>
        </div>
    )
}