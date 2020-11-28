import React from 'react';
import './MainSec.css'
import frame from '../../../../images/logos/Frame.png'

const MainSec = () => {

  // function searchLocation(e) {
  //     e.preventDefault();
  //     setKeyword(e.target.value);
  //   }

  return (
    <div className="headMain">
      <div className="d-flex justify-content-center align-items-center headerSec">
        <div>
          <h1><strong> FIND YOUR HOUSE RENT </strong></h1>
          <br />
          <div>
            <form className="row">
              <input
                //   onBlur={searchLocation}
                className="input form-control col-md-9 mx-auto w-75" type="search" placeholder="Search..." aria-label="Search" />
              <button className="btn btn-dark col-md-3 mx-auto w-50">Find Now</button>
            </form>
          </div></div>
      </div></div>

  );
};

export default MainSec;