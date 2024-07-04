import { useCallback } from 'react';

import { CartLineState } from './../../../models/cart.state';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { incrementQty, decrementQty, initializeCart } from './cart-slice';
import { CartStateHook } from '../../../models';
import { calculateTotalItems } from '../../../utils/cart.utils';

export const useCartHook: CartStateHook = () => {
    const cartLines = useAppSelector((state) => state.cart.cartLines);
    const totalItems = useAppSelector((state) =>
        calculateTotalItems(state.cart.cartLines)
    );

    const dispatch = useAppDispatch();

    const inc = useCallback(
        (sku: string) => {
            dispatch(incrementQty(sku));
        },
        [dispatch]
    );

    const dec = useCallback(
        (sku: string) => {
            dispatch(decrementQty(sku));
        },
        [dispatch]
    );

    const init = useCallback(
        (cartLines: CartLineState[]) => {
            dispatch(initializeCart(cartLines));
        },
        [dispatch]
    );

    return {
        cartLines,
        totalItems,
        decrementQty: dec,
        incrementQty: inc,
        initializeCart: init,
    };
};
