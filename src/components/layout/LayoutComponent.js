import classes from './LayoutComponent.module.css'
import NavigationBar from './NavigationBar';

function LayoutComponent(props){
    return(
        <div>
             <NavigationBar />
            <main className={classes.main}>{props.children}</main>
        </div>

    )
}

export default LayoutComponent;