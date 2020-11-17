import React, { useEffect, useState } from 'react';
import pic1 from '../../../logos/pic1.png';
import pic2 from '../../../logos/pic2.png';
import pic3 from '../../../logos/pic3.png';

const Feedback = () => {
    const [feedbacks, setFeedbacks] = useState([]);
    const [redirect, setRedirect] = useState();

    return (
        <div className="container mb-5" id="review">
            <h6 className="text-secondary text-center">Service</h6>
            <h3 align="center" className="text-dark"><b> We're an agency tailored to all <br/> clients' needs that always delivers </b></h3>
            <div className="d-flex justify-content-center mt-3">
                <div className="mx-auto w-100 row mt-2 pt-4">

                    <div className="col-md-4">
                        <div className="d-flex justify-content-center">
                            <img style={{ width: "100px" }} src={pic1} alt="" />
                        </div>
                        <div style={{ borderRadius: '5px' }} className="m-1 text-center">
                            <h5>Wide Range of Properties</h5>
                            <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias debitis cupiditate saepe neque inventore </p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="d-flex justify-content-center">
                            <img style={{ width: "100px" }} src={pic2} alt="" />
                        </div>
                        <div style={{ borderRadius: '5px' }} className="m-1 text-center">
                            <h5>Financing Made Easy</h5>
                            <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias debitis cupiditate saepe neque inventore </p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="d-flex justify-content-center">
                            <img style={{ width: "100px" }} src={pic3} alt="" />
                        </div>
                        <div style={{ borderRadius: '5px' }} className="m-1 text-center">
                            <h5>Financing Made easy</h5>
                            <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias debitis cupiditate saepe neque inventore </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Feedback;