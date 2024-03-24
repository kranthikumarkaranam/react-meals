import React, { useState } from 'react';

const CartContext = React.createContext({
	items: [],
	totalAmount: 0,
	addItem: () => {},
	removeItem: () => {},
	clearCart: () => {}
});

export const CartContextProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState([]);
	const [totalAmount, setTotalAmount] = useState(0);

	const addItemToCart = (item) => {
		setCartItems((prevCartItems) => {
			const updatedItems = [...prevCartItems];
			const existingItemIndex = updatedItems.findIndex((cartItem) => cartItem.id === item.id);

			if (existingItemIndex !== -1) {
				updatedItems[existingItemIndex].amount += item.amount;
			} else {
				updatedItems.push(item);
			}

			setTotalAmount((prevTotalAmount) => prevTotalAmount + item.price * item.amount);
			return updatedItems;
		});
	};

	const removeItemFromCart = (id) => {
		setCartItems((prevCartItems) => {
			const itemIndex = prevCartItems.findIndex((item) => item.id === id);
			if (itemIndex === -1) {
				return prevCartItems;
			}

			const updatedItems = [...prevCartItems];
			const itemToRemove = updatedItems[itemIndex];
			setTotalAmount((prevTotalAmount) => prevTotalAmount - itemToRemove.price * itemToRemove.amount);
			updatedItems.splice(itemIndex, 1);
			return updatedItems;
		});
	};

	const clearCart = () => {
		setCartItems([]);
		setTotalAmount(0);
	};

	return (
		<CartContext.Provider
			value={{
				items: cartItems,
				totalAmount: totalAmount,
				addItem: addItemToCart,
				removeItem: removeItemFromCart,
				clearCart: clearCart
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export default CartContext;
