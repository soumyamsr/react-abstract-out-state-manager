import { useCart } from '../../store';
import './Header.css';
import companyLogo from '../../images/logo.png';
import cartIcon from '../../images/cart.png';

export const Header = () => {
    const { totalItems } = useCart();

    return (
        <section className="header-container">
            <img
                className="company-logo"
                src={companyLogo}
                alt="CompnayName"
                aria-label="company logo"
            />
            <article className="cart-block">
                <img src={cartIcon} alt="cart" aria-label="cart icon" />
                <span>{totalItems}</span>
            </article>
        </section>
    );
};
