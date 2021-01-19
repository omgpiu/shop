import React from 'react';
import {useSelector} from 'react-redux';
import {getItems} from '../sp2-bll/shop-page-selectors';
import {Grid} from '@material-ui/core';
import {Cell} from '../../f4-cell/Cell';


type PropsType = {}

export const ShopPage: React.FC<PropsType> = () => {
    const items = useSelector(getItems);


    return <>

        {
            items.map(item => {
                let allItems = items[item.id];
                return <Grid key={item.id} xs={12} spacing={3} style={{marginTop: '5px'}}>
                    < div style={{width: '300px'}}>
                        <Cell
                            title={item.title}
                            img={item.img}
                            price={item.price}

                        />

                    </div>

                </Grid>;
            })
        }


    </>;
};
;
;
