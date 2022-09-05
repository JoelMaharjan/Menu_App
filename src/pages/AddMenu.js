import { useNavigate } from 'react-router-dom'
import NewFoodsForm from "../components/Foods/NewFoodsForm";

function AddMenu(){
    const navigate = useNavigate()
    function addNewFoodsHandler(FoodsData){
        fetch(
            'https://menu-ad5ad-default-rtdb.firebaseio.com/newfoods.json',
            {
                method : 'POST',
                body : JSON.stringify(FoodsData),
                headers :{
                    'Content-Type' : 'application/json'
                }
            }
        ).then(() => {
            navigate('/',{replace:true});
        });
    }
    return( 
        <section>
             <NewFoodsForm addNewFoods={addNewFoodsHandler} />
        </section>
        
    )
}

export default AddMenu;