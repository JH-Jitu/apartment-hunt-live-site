import React, { useEffect, useState } from 'react';
import ServicesData from './ServicesData/ServicesData';


const Services = () => {
    const [services, setServices] = useState([]);
    const [redirect, setRedirect] = useState();
    
    // Database
    useEffect(() =>{
        fetch("https://nameless-fortress-40927.herokuapp.com/services")
        .then(res => res.json())
        .then(data => {
            setServices(data)
            setRedirect(true)
        })
    }, [redirect]);
    
    return (
        <div className="container" id="service">
            {services.length === 0 && <h1 align="center"> Please Wait......... </h1>} <br/>
            <h6 className="text-secondary text-center">House Rent</h6>
            <h3 align="center" className="text-dark"><b> Discover the latest Rent <br/> available today </b></h3>
            <div className="d-flex justify-content-center">
                <div className="mx-auto w-100 row mt-2">
                    {
                        services.map(service => <ServicesData service={service} key={service.name}></ServicesData>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;