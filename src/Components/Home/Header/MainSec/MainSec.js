import React from 'react';
import './MainSec.css'
import frame from '../../../../images/logos/Frame.png'

const MainSec = () => {
    
    // function searchLocation(e) {
    //     e.preventDefault();
    //     setKeyword(e.target.value);
    //   }

    return (
        <div className="container headMain">

        <div className="d-flex justify-content-center align-items-center">
            <div style={{marginTop: "100px"}}>
            <h1><strong> FIND YOUR HOUSE RENT </strong></h1>
            <br/>
            <form className="row">
          <input 
        //   onBlur={searchLocation}
            className="input form-control w-100 col-md-9" type="search" placeholder="Search..." aria-label="Search"/>
          <button className="btn btn-dark col-md-3">Find Now</button>
        </form>
            </div>
        </div>

        </div>
    );
};

export default MainSec;