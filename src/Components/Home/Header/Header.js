import React from 'react';
import MainSec from './MainSec/MainSec';
import Navbar from './Navbar/Navbar';
import Partnership from './Partnership/Partnership';

const Header = () => {
    return (
        <section style={{marginBottom: "20px"}}>
            <Navbar></Navbar>
            <div className="headerSec mb-2">
                <div className="upperSec">
            <MainSec></MainSec>
        </div></div>
            <Partnership></Partnership>
        </section>
    );
};

export default Header;