import { StateProvider as Provider } from './models';
// import { StateContextProvider as ReduxStateContextProvider } from './redux';
import { StateContextProvider as ZustandStateProvider } from './zustand';

export const StateProvider: Provider = ZustandStateProvider; // ReduxStateContextProvider;
