import {  useContext } from 'react';
import classes from './FoodsItems.module.css'
import Card from '../ui/Card';
import OrderContext from '../../context/Favorite-context';

function FoodsItems(props){
    const orderCtx = useContext(OrderContext)
    const orderedFoods = orderCtx.itemOrdered(props.id);

    function toogleFavoriteHandler(){
        if(orderedFoods){
            orderCtx.removeOrder(props.id)
        }else{
            orderCtx.addOrder({
                id: props.id,
                title: props.title,
                price: props.price,
                image: props.image
            })
        }    
    }


    return(
        <li> 
        <Card>
            <div className={classes.image}>
                <img src={props.image} alt={props.title} />
            </div>
            <div className={classes.content}>
                <h4>{props.title}</h4>
                <h3>{props.price}</h3>
                <div className={classes.actions}>
                    <button onClick={toogleFavoriteHandler}>
                        {orderedFoods ? 'Remove Your Order' : 'Place Your Order'}
                    </button>
                </div>
            </div>
        </Card>
    </li>
    )
    
}

export default FoodsItems;