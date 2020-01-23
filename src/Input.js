import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: 200,
        },
    },
}));

export default function BasicTextFields() {

    React.useEffect( () => {
        (async () =>{
            const response = await fetch(`/backend/test/checkpass`);
            try {
                const myJson = await response.json();
                console.log(myJson)

            } catch (e) {
                console.log(e);
            }
        } )()

    }, []);


    const [value,setValue] = React.useState();
    const classes = useStyles();
    const handleChange = e => setValue(e.target.value);

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField value={value} onChange={handleChange} id="standard-basic" label="Standard" />
        </form>
    );
}
