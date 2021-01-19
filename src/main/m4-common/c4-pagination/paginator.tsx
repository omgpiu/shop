import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import {createStyles, makeStyles} from '@material-ui/core';


const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            '& > *': {
                marginTop: theme.spacing(2),
            },
        },
    }),
);

export const Paginator = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Pagination count={10} variant="outlined" shape="rounded"/>
        </div>

    );
};
