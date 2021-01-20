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
type PropsType = {
    totalItemsCount: number
}
export const Paginator: React.FC<PropsType> = ({totalItemsCount}) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Pagination count={totalItemsCount} boundaryCount={2}
                        showFirstButton
                        showLastButton variant="outlined" shape="rounded"/>
        </div>

    );
};
