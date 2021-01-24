import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {getItems, getTotalItemsCount} from '../sp2-bll/shop-page-selectors';
import {Grid} from '@material-ui/core';
import {Cell} from '../../f4-cell/Cell';
import {ModalInfo} from '../../../main/m4-common/c6-modal/Modal';


type PropsType = {}

export const ShopPage: React.FC<PropsType> = () => {
    const items = useSelector(getItems);
    const totalItemsCount = useSelector(getTotalItemsCount);
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (<>
        <ModalInfo handleClose={handleClose} open={open}
        />
        <Grid container style={{marginTop: '5px', justifyContent: 'center'}}>
            {
                items.map((item, index) => {
                    return <Grid key={item.id} style={{marginTop: '5px'}}>
                        <Cell
                            newItem={item}
                            openModal={handleClickOpen}
                        />
                    </Grid>;
                })
            }
        </Grid>


    </>);
};
