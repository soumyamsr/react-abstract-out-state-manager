import { useCart } from '../../store';
import { CartLineState } from '../../store/models';
import { Counter } from '../Counter';
import './Product.css';

interface ProductProps {
    product: CartLineState;
}

export const Product = ({ product }: ProductProps) => {
    const { incrementQty, decrementQty } = useCart();

    return (
        <div className="product-block">
            <img src={product.image} alt={product.title} />
            <div className="product-info">
                <div className="description">{product.desc}</div>
                <div className="product-price">
                    <span>{product.currency}</span>
                    {product.unitPrice}
                </div>
                <Counter
                    increment={() => incrementQty(product.sku)}
                    decrement={() => decrementQty(product.sku)}
                    count={product.quantity}
                />
            </div>
        </div>
    );
};
