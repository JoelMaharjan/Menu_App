import AddNewFoodsCard from "../ui/AddNewFoodsCard";
import classes from './NewFoodsForm.module.css';
import {useRef} from 'react'


function NewFoodsForm(props){
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const priceInputRef = useRef();

    function submitHandler(event){
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredPrice = priceInputRef.current.value;

        const FoodsData = {
            title : enteredTitle,
            image : enteredImage,
            price : enteredPrice
        }
        props.addNewFoods(FoodsData);
    }

    return(
        <AddNewFoodsCard>
            <form className={classes.form} onSubmit={submitHandler}> 
            <h1 className={classes.h1}>Add New Foods Items</h1>
                <div className={classes.control}>
                    <label htmlFor='title'> Foods Item</label>
                    <input type='text' required id='title' ref = {titleInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='image'> Foods Images</label>
                    <input type='url' required id='image' ref = {imageInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='price'> Foods Price</label>
                    <input type="text" 
                    required id='price'  ref = {priceInputRef}/>
                </div>
                <div className={classes.actions}>
                    <button>Submit</button>
                </div>
            </form>
        </AddNewFoodsCard>
    )
}

export default NewFoodsForm;