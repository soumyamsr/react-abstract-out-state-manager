import { ReactElement, ReactNode } from 'react';

export interface StateProvider {
    (args: { children?: ReactNode }): ReactElement;
}
