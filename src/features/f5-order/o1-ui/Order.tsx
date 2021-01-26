import React from 'react';
import {Button, createStyles, TextField} from '@material-ui/core';
import {makeStyles, Theme} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            border: '1px solid black',
            width: '25%',
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: '90%',
                paddingLeft: '5px'


            },
        },
    }),
);

export const Order: React.FC = () => {
    const classes = useStyles();

    return <div className={classes.root}>
        <div>
            <TextField
                id="firstName"
                label="First Name"
                variant="filled"
                color="primary"
            />
        </div>
        <div>
            <TextField
                id="email"
                label="Email"
                variant="filled"
                color="primary"
            />
        </div>
        <div>
            <TextField
                id="address"
                label="Address"
                variant="filled"
                color="primary"
            />
        </div>


        <div>
            <Button variant="contained" color="primary">
                ORDER
            </Button>
        </div>
    </div>;
};
