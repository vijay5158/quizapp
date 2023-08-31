import React from 'react';
import Navbar from './Home/Navbar';

const Layout = ({children}) => {
    return (
        <>
        <Navbar />
            {children}
        </>
    );
};

export default Layout;