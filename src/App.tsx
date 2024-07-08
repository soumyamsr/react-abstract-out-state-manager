import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './pages/Layout';
import { Home } from './pages/Home';

export const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    {/* <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} /> */}
                </Route>
            </Routes>
        </Router>
    );
};
