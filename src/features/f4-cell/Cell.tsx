import {makeStyles} from '@material-ui/core/styles';
import {Button, Card, CardActions, CardContent, Typography} from '@material-ui/core';
import React, {useState} from 'react';
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
    item: ItemType
}

export const Cell: React.FC<PropsType> = ({item}) => {

    const classes = useStyles()
    const [isActive, setIsActive] = useState(false)
    const dispatch = useDispatch()

    const changeIsActive = () => {

        dispatch(addNewItem({item}))
    }

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {item.title}
                </Typography>
                <Typography variant="h5" component="h2">
                    <img src={item.img} alt="" style={{width: '100%'}}/>
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    adjective
                </Typography>
                <Typography variant="body2" component="p">
                    {item.price}
                </Typography>
            </CardContent>

            <CardActions style={{flexWrap: 'wrap'}}>
                {/*{*/}
                {/*    !isActive ? <Button style={{width: '250px', margin: '5px'}}*/}
                {/*                        onClick={changeIsActive}*/}
                {/*                        size="small" color="primary"*/}
                {/*                        variant="contained">Buy*/}
                {/*        online</Button> : <TextField  type='number' InputLabelProps={{shrink: true}}/>*/}
                {/*}*/}
                <Button style={{width: '250px', margin: '5px'}}
                        onClick={changeIsActive}
                        size="small" color="primary"
                        variant="contained"
                >Buy online</Button>
                <Button style={{width: '250px', margin: '5px'}} size="small" color="primary"
                        variant="contained">Documents</Button>
            </CardActions>
        </Card>
    );
};
