import React from 'react';

import Navbar from './Navbar';
import Banner from './Banner';

const Header = (props) => {
    return (
        <section className={props.isEnglish ? "header right" : "header left"}>
            <div className="main-container">
                <Navbar isEnglish={props.isEnglish} onClickSwitcher={props.onClickSwitcher}/>
                <Banner isEnglish={props.isEnglish}/>
            </div>  
        </section>
    )
}

export default Header;
