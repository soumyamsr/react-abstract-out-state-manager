import { CartStateHook } from './models';
// import { useCartHook as ReduxUseCartHook } from './redux';
import { useCartStore as ZustandUseCartHook } from './zustand';

const useCart: CartStateHook = ZustandUseCartHook; // ReduxUseCartHook;

export { useCart };
