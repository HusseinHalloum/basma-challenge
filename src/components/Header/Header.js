import React from 'react';

import Navbar from './Navbar';
import Banner from './Banner';

const Header = () => {
    return (
        <section className="header">
            <div className="main-container">
                <Navbar />
                <Banner />
            </div>  
        </section>
    )
}

export default Header;
