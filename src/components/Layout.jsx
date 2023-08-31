import React from 'react';
import Navbar from './Home/Navbar';
import Footer from './Home/Footer';

const Layout = ({children}) => {
    return (
        <>
        <Navbar />
            {children}
        <Footer />
        </>
    );
};

export default Layout;