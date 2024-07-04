import { Provider } from 'react-redux';

import { store } from './store';
import { StateProvider } from '../models';

export const StateContextProvider: StateProvider = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
};
