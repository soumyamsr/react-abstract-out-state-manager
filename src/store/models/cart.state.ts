export interface CartLineState {
    sku: string;
    image: string;
    title: string;
    desc: string;
    quantity: number;
    unitPrice: number;
    currency: string;
}

export interface CartState {
    cartLines: CartLineState[];
    totalItems: number;
}

export interface Actions {
    initializeCart: (items: CartLineState[]) => void;
    incrementQty: (sku: string) => void;
    decrementQty: (sku: string) => void;
}

// Initialize a default state
export const INITIAL_STATE: CartState = {
    cartLines: [],
    totalItems: 0,
};
