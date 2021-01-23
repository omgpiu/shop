import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {ItemType} from '../../../main/m4-common/types/Types';
import {Grid} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'left',
            color: theme.palette.text.secondary,
            display: 'flex'
        },
    }),
);


export const CartList: React.FC<PropsType> = ({item}) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        {item.title}
                        <img src={item.img} alt="" style={{height: '100%', width: '10%'}}/>
                        {item.price}
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

type PropsType =
    {
        item: ItemType
    }