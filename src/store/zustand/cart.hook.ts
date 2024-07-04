import { create } from 'zustand';
import { INITIAL_STATE, CartState, Actions } from '../models';
import { MAX_ITEM_QUANTITY } from '../constant';
import { calculateTotalItems } from '../utils/cart.utils';

export const useCartStore = create<CartState & Actions>((set) => ({
    cartLines: INITIAL_STATE.cartLines,
    totalItems: INITIAL_STATE.totalItems,
    initializeCart: (cartItems) =>
        set(() => ({
            cartLines: cartItems,
            totalItems: calculateTotalItems(cartItems),
        })),
    incrementQty: (sku) =>
        set((state) => {
            const updatedCartLines = state.cartLines.map((cartLine) => {
                if (cartLine.sku === sku && cartLine.quantity < MAX_ITEM_QUANTITY)
                    return {
                        ...cartLine,
                        quantity: cartLine.quantity + 1,
                    };
                return cartLine;
            });
            return {
                cartLines: updatedCartLines,
                totalItems: calculateTotalItems(updatedCartLines),
            };
        }),
    decrementQty: (sku) =>
        set((state) => {
            const updatedCartLines = state.cartLines.map((cartLine) => {
                if (cartLine.sku === sku && cartLine.quantity > 0)
                    return {
                        ...cartLine,
                        quantity: cartLine.quantity - 1,
                    };
                return cartLine;
            });
            return {
                cartLines: updatedCartLines,
                totalItems: calculateTotalItems(updatedCartLines),
            };
        }),
}));
