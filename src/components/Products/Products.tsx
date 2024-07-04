import { useEffect } from 'react';
import product1 from '../../images/product-1.jpg';
import product2 from '../../images/product-2.jpg';
import product3 from '../../images/product-3.jpg';
import { Product } from '../Product/Product';
import { useCart } from '../../store';

// Dummy data to initialize, In real application it will be fetched through HTTP Service
const products = [
    {
        sku: 'S123',
        image: product1,
        title: 'Hide and Seek Cookies',
        desc: 'Parle Hide and Seek Chocolate Chip Cookies, 200g',
        quantity: 1,
        unitPrice: 44,
        currency: '₹',
    },
    {
        sku: 'S124',
        image: product2,
        title: 'Dark Fantasy',
        desc: 'Sunfeast Dark Fantasy Choco Fills, 300g, Original Filled Cookies with Choco Crème',
        quantity: 1,
        unitPrice: 95,
        currency: '₹',
    },
    {
        sku: 'S125',
        image: product3,
        title: 'Parle Rusk',
        desc: 'Parle Rusk, Elachi, 291.2g x 32p',
        quantity: 1,
        unitPrice: 47,
        currency: '₹',
    },
];

export const Products = () => {
    const { cartLines, initializeCart } = useCart();

    useEffect(() => {
        initializeCart(products);
    }, [initializeCart]);

    return (
        <>
            {cartLines.map((cartItem) => (
                <Product key={cartItem.sku} product={cartItem} />
            ))}
        </>
    );
};
