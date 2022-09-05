import { createContext, useState } from "react";

const OrderContext = createContext({
    orders : [],
    totalOrders : 0,
    addOrder: (orderedFoods) => {},
    removeOrder: (foodsId) => {},
    itemOrdered: (foodsId) => {},
});

export function OrderContextProvider(props){
    const [userOrder, setUserOrder] = useState([])
    

    function addOrderHandler(orderedFoods){
        setUserOrder((prevOrderedFoods)=>{
            return prevOrderedFoods.concat(orderedFoods);
        });
    }

    function removeOrderHandler(foodsId){
        setUserOrder((prevOrderedFoods)=>{
            return prevOrderedFoods.filter((food) => food.id !== foodsId);
        });
    }

    function itemIsOrdered(foodsId){
        return userOrder.some(food =>  food.id === foodsId )
    }


    const context = {
        orders : userOrder,
        totalOrders : userOrder.length,
        addOrder: addOrderHandler,
        removeOrder: removeOrderHandler,
        itemOrdered: itemIsOrdered
    };

    return (
        <OrderContext.Provider value = {context}>
            {props.children}
        </OrderContext.Provider>
    )
}

export default OrderContext;
