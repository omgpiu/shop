import React from 'react';
import {useSelector} from 'react-redux';
import {getItems, getTotalItemsCount} from '../sp2-bll/shop-page-selectors';
import {Grid} from '@material-ui/core';
import {Cell} from '../../f4-cell/Cell';
import {Paginator} from '../../../main/m4-common/c4-pagination/paginator';


type PropsType = {}

export const ShopPage: React.FC<PropsType> = () => {
    const items = useSelector(getItems);
    const totalItemsCount = useSelector(getTotalItemsCount)


    return (<>

        <Grid container style={{marginTop: '5px', justifyContent: 'center'}}>
            {
                items.map((item, index) => {

                    return <Grid key={item.id} style={{marginTop: '5px'}}>
                        <Cell
                            newItem={item}/>
                    </Grid>;
                })
            }
            <Grid container style={{padding: '20px', justifyContent: 'center'}}>
                <Paginator totalItemsCount={totalItemsCount}/>
            </Grid>
        </Grid>


    </>);
};
