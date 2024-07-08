import { Outlet } from 'react-router-dom';
import './Layout.css';
import { Header } from '../../components/Header';

export const Layout = () => {
    return (
        <div>
            <Header />
            <main className="content-section">
                <Outlet />
            </main>
        </div>
    );
};
