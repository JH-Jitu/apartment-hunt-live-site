import React from 'react';
import { Link } from 'react-router-dom';
import './ServicesData.css'
import location from '../../../../logos/map-marker-alt-solid 1.png';
import bed from '../../../../logos/bed.png';
import bath from '../../../../logos/bath.png'


const ServicesData = ({ service }) => {
    console.log(service)
    return (
        <div className="col-md-4 card bg-light mb-4" style={{ border: "none" }}>
            <img className="serviceImg card-img-top" src={`data:image/png;base64,${service.image.img}`} alt="" />
            <div className="card-body bg-white" >
                <h5 className="mt-3 mb-2 card-title"><strong>{service.name}</strong> </h5>
                <p> <img src={location} alt="" /> {service.location}</p>
                <div className="d-flex justify-content-between">
                    <p><img src={bed} alt="" /> {service.bed} Bedrooms</p>
                    <p><img src={bath} alt="" />{service.bath} Bathrooms</p>
                </div>
                <div className="d-flex justify-content-between">
                    <h4>${service.price}</h4>
                    {/* <Link style={{ textDecoration: "none", color: 'black' }} to={`/dashboard/${service.name}`}> */}
                    <Link style={{ textDecoration: "none", color: 'black' }} to={`/book/${service._id}`}>
                        <button className="btn btn-dark">View Details</button>
                    </Link>
                </div>
                {/* <p className="text-secondary">{service.desc}</p> */}
            </div>





        </div>



    );
};

export default ServicesData;