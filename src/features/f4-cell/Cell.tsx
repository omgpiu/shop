import {makeStyles} from '@material-ui/core/styles';
import {Button, Card, CardActions, CardContent, Typography} from '@material-ui/core';
import React from 'react';
import {useDispatch} from 'react-redux';
import {ItemType} from '../../main/m4-common/types/Types';
import {addNewItem} from '../f2-cart/c2-bll/cart-reducer';

const useStyles = makeStyles({
    root: {
        minWidth: 240,
        margin: 2,
        width: 275
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

type PropsType = {
    newItem: ItemType
}

export const Cell: React.FC<PropsType> = ({newItem}) => {

    const classes = useStyles()
    const dispatch = useDispatch()

    const changeIsActive = () => {

        dispatch(addNewItem({newItem}))
    }

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {newItem.title}
                </Typography>
                <Typography variant="h5" component="h2">
                    <img src={newItem.img} alt="" style={{width: '100%', height: '100%'}}/>
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    adjective
                </Typography>
                <Typography variant="body2" component="p">
                    {newItem.price}
                </Typography>
            </CardContent>

            <CardActions style={{flexWrap: 'wrap'}}>
                <Button style={{width: '250px', margin: '5px'}}
                        onClick={changeIsActive}
                        size="small" color="primary"
                        variant="contained"
                >Add to Cart</Button>
                <Button style={{width: '250px', margin: '5px'}} size="small" color="primary"
                        variant="contained">More Info</Button>
            </CardActions>
        </Card>
    );
};
