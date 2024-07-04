import { CartState, Actions } from './cart.state';

export interface CartStateHook {
    (): CartState & Actions;
}
