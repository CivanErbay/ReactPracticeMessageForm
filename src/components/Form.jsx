import React from 'react'
import TextField from "@material-ui/core/TextField";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));


export default function Form({handleChange, handleSubmit}) {
    const classes = useStyles();



    return(

        <form className={classes.root} noValidate autoComplete="off" >
            <Grid container direction="column">
            <TextField onChange={handleChange} name="name" id="outlined-basic" label="Your Name" variant="outlined" placeholder="Your Name" />
            <TextField onChange={handleChange} name="email" id="outlined-basic" label="Your E-Mail" variant="outlined" placeholder="Your E-Mail"/>
            <TextField
                id="outlined-multiline-static"
                label="Your Message"
                onChange={handleChange}
                name="message"
                multiline
                rows={4}
                variant="outlined"
            />
            <Button onClick={handleSubmit}>Submit</Button>
            </Grid>
        </form>

    )

}