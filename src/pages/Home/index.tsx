import './Home.css';
import { Products } from '../../components/Products';

export const Home = () => {
    return (
        <section className="homepage-section">
            <article className="products-container">
                <Products />
            </article>
        </section>
    );
};
