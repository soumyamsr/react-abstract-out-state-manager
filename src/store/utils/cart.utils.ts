import { CartLineState } from '../models';

const calculateTotalItems = (cartItems: CartLineState[]) =>
    cartItems.reduce((acc, cartItem) => {
        acc += cartItem.quantity;
        return acc;
    }, 0);

export { calculateTotalItems };
