import './App.css';
import { Header } from './components/Header';
import { Products } from './components/Products';

export const App = () => {
    return (
        <div className="main-body">
            <Header />
            <section className="content-section">
                <article className="products-container">
                    <Products />
                </article>
                <article className="cart-summary">Cart Summary</article>
            </section>
        </div>
    );
};
