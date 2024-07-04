import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartLineState, INITIAL_STATE } from '../../../models';
import { MAX_ITEM_QUANTITY } from '../../../constant';

export const cartSlice = createSlice({
    name: 'cart',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState: INITIAL_STATE,
    reducers: {
        initializeCart: (state, action: PayloadAction<CartLineState[]>) => {
            state.cartLines = action.payload;
        },
        incrementQty: (state, action: PayloadAction<string>) => {
            state.cartLines.forEach((cartLine) => {
                if (
                    cartLine.sku === action.payload &&
                    cartLine.quantity < MAX_ITEM_QUANTITY
                ) {
                    cartLine.quantity += 1;
                }
            });
        },
        decrementQty: (state, action: PayloadAction<string>) => {
            state.cartLines.forEach((cartLine) => {
                if (cartLine.sku === action.payload && cartLine.quantity > 0) {
                    cartLine.quantity -= 1;
                }
            });
        },
    },
});

export const { initializeCart, incrementQty, decrementQty } = cartSlice.actions;
