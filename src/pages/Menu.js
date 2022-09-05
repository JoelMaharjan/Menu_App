import FoodsList from "../components/Foods/FoodsList";
import {useState } from 'react';
import {useEffect } from 'react';



function Menu(){
    const [isLoading,setIsLoading] = useState(true);
    const [loadedFoods,setLoadedFoods] = useState([])

    useEffect(() => {
        setIsLoading(true)
        fetch(
            'https://menu-ad5ad-default-rtdb.firebaseio.com/newfoods.json',
        )  
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            const foods=[];

            for (const key in data){
                const food =  {
                    id: key,
                    ...data[key]
                };
                foods.push(food)
            }
        
            setIsLoading(false)
            setLoadedFoods(foods)
        });
        }, []);

    

    if (isLoading){
        return( 
        <section>
            <p>Loading...</p>
        </section>
    )}


    return (
    <section>
        <h1> Menu</h1>
        <FoodsList foods={loadedFoods}/>
    </section>)
}

export default Menu;