import classes from './AddNewFoodsCard.module.css'

function AddNewFoodsCard(props){
    return(    
            <div className={classes.card}> {props.children}</div>
    )
};

export default AddNewFoodsCard;
