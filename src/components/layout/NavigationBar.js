import {useContext} from 'react';
import { Link } from 'react-router-dom';
import classes from './NavigationBar.module.css';
import OrderContext from '../../context/Favorite-context';

function NavigationBar(){
    const orderCtx = useContext(OrderContext)

    return(
        <header className={classes.header}>
            <div className={classes.logo}> Homies </div>

            <nav>
                <ul className={classes.ul}>
                    <li > 
                        <Link to ='/'> Menu</Link>
                    </li>
                    <li> 
                        <Link to ='/add-menu'>Add Menu</Link>
                    </li>
                    <li> 
                        <Link to='/order'>
                            Your Order
                            <span className={classes.badge}>{orderCtx.totalOrders}</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>

    )
}

export default NavigationBar;