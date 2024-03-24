import { useContext } from 'react';

import CartContext from '../../../store/cart-context';

import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem = ({ price, id, name, description }) => {
	const cartCtx = useContext(CartContext);

	const roundedPrice = `$${price.toFixed(2)}`;

	const addToCartHandler = (amount) => {
		cartCtx.addItem({
			id: id,
			name: name,
			amount: amount,
			price: roundedPrice
		});
	};

	return (
		<li className={classes.meal}>
			<div>
				<h3>{name}</h3>
				<div className={classes.description}>{description}</div>
				<div className={classes.price}>{roundedPrice}</div>
			</div>
			<div>
				<MealItemForm onAddToCart={addToCartHandler} />
			</div>
		</li>
	);
};

export default MealItem;
