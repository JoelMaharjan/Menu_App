import classes from './FoodsList.module.css';
import FoodsItems from './FoodsItems';

function FoodsList(props){
    return(
        <ul className={classes.list}>
            {props.foods.map((foods) =>{
                return(
                    <FoodsItems 
                    key ={foods.id}
                    id = {foods.id}
                    image = {foods.image}
                    title = {foods.title}
                    price = {foods.price} />
                );
            })}
        </ul>
    );
}

export default FoodsList;