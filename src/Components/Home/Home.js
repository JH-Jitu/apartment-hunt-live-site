import React from 'react';
import Feedback from './Feedback/Feedback';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services> <br/> <br/>
            <Feedback></Feedback> <br/>
            <Footer></Footer>
        </div>
    );
};

export default Home;