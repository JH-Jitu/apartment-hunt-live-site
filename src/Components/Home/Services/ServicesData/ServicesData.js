import React from 'react';
import { Link } from 'react-router-dom';
import './ServicesData.css'
import location from '../../../../logos/map-marker-alt-solid 1.png';
import bed from '../../../../logos/bed.png';
import bath from '../../../../logos/bath.png'


const ServicesData = ({ service }) => {
    console.log(service)
    return (
        <div className="col-md-4 card">
            <Link style={{ textDecoration: "none", color: 'black' }} to={`/dashboard/${service.name}`}>
            <img className="serviceImg card-img-top" src={`data:image/png;base64,${service.image.img}`} alt="" />
            <div className="m-1 card-body">     
                <h5 className="mt-3 mb-2 card-title"><strong>{service.name}</strong> </h5>
                <p> <img src={location} alt=""/> Nasirabadd H/S, Chattogram</p>
                <div className="d-flex justify-content-between">
                    <p><img src={bed} alt=""/> Bedrooms</p>
                    <p><img src={bath} alt=""/> Bathrooms</p>
                </div>
                <div className="d-flex justify-content-between">
                    <h4>$ price</h4>
                    <button className="btn btn-dark">View Details</button>
                </div>
                {/* <p className="text-secondary">{service.desc}</p> */}
            </div>
            </Link>




            
        </div>



    );
};

export default ServicesData;