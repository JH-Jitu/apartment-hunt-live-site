import React from 'react';
import MainSec from './MainSec/MainSec';
import Navbar from './Navbar/Navbar';
import Partnership from './Partnership/Partnership';

const Header = () => {
    return (
        <section style={{marginBottom: "20px"}}>
            <Navbar></Navbar>
            <MainSec></MainSec>
            <Partnership></Partnership>
        </section>
    );
};

export default Header;