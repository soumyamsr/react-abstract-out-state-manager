import './Cart.css';
import { Products } from '../../components/Products';

export const Cart = () => {
    return (
        <section className="cart-section">
            <article className="products-container">
                <Products />
            </article>
            <article className="cart-summary">Cart Summary</article>
        </section>
    );
};
