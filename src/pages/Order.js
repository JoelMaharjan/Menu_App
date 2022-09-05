import {useContext} from 'react';
import OrderContext from '../context/Favorite-context';
import FoodsList from '../components/Foods/FoodsList';

function Order(){
    const orderCtx = useContext(OrderContext)

    let content

    if (orderCtx.totalOrders === 0){
        content = <p> You don't have any order. Please Order something from Menu</p>
    } else {
        content = <FoodsList foods={orderCtx.orders} />
    }

    return (
        <section>
            <h1>Your Orders</h1>
            {content}
        </section>
    )
}

export default Order;