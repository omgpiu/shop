import {makeStyles} from '@material-ui/core/styles';
import {Button, Card, CardActions, CardContent, TextField, Typography} from '@material-ui/core';
import React, {useState} from 'react';

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
    img: string
    title: string
    price: number
}
export const Cell: React.FC<PropsType> = ({img, title, price}) => {
    const classes = useStyles()
    const [isActive, setIsActive] = useState(false)

    const changeIsActive = () => {
        setIsActive(!isActive)
    }

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {title}
                </Typography>
                <Typography variant="h5" component="h2">
                    <img src={img} alt="" style={{width: '100%'}}/>
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    adjective
                </Typography>
                <Typography variant="body2" component="p">
                    {price}
                </Typography>
            </CardContent>

            <CardActions style={{flexWrap: 'wrap'}}>
                {
                    !isActive ? <Button style={{width: '250px', margin: '5px'}}
                                        onClick={changeIsActive}
                                        size="small" color="primary"
                                        variant="contained">Buy
                        online</Button> : <TextField  type='number' InputLabelProps={{shrink: true}}/>
                }

                <Button style={{width: '250px', margin: '5px'}} size="small" color="primary"
                        variant="contained">Documents</Button>
            </CardActions>
        </Card>
    );
};
