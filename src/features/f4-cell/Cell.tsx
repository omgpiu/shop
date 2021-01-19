import {makeStyles} from '@material-ui/core/styles';
import {Button, Card, CardActions, CardContent, Typography} from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
    root: {
        minWidth: 240,
        margin: 2
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
    img: string
    title: string
    price: number
}
export const Cell: React.FC<PropsType> = ({img, title, price}) => {
    const classes = useStyles();


    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {title}
                </Typography>
                <Typography variant="h5" component="h2">
                    <img src={img} alt=""/>
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    adjective
                </Typography>
                <Typography variant="body2" component="p">
                    {price}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" >Buy online</Button>
            </CardActions>
            <CardActions>
                <Button size="small">Documents</Button>
            </CardActions>
        </Card>
    );
};
