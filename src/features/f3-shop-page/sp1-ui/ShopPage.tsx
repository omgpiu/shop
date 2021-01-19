import React from 'react';
import {useSelector} from 'react-redux';
import {getItems} from '../sp2-bll/shop-page-selectors';
import {Grid} from '@material-ui/core';
import {Cell} from '../../f4-cell/Cell';
import {Paginator} from '../../../main/m4-common/c4-pagination/paginator';


type PropsType = {}

export const ShopPage: React.FC<PropsType> = () => {
    const items = useSelector(getItems);


    return (<>

        <Grid container style={{marginTop: '5px', justifyContent: 'center'}}>
            {
                items.map(item => {
                    let allItems = items[item.id];
                    return <Grid key={item.id} style={{marginTop: '5px'}}>
                        <Cell
                            title={item.title}
                            img={item.img}
                            price={item.price}/>
                    </Grid>;
                })
            }
            <Grid container style={{padding: '20px', justifyContent: 'center'}}>
                <Paginator/>
            </Grid>
        </Grid>


    </>);
};
