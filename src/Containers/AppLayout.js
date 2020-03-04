import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '../Routes/RouteContainer';

function AppLayout() {
    return (<Router>
        <Header />
        <Routes />
        <Footer />
    </Router>)
}
export default AppLayout;