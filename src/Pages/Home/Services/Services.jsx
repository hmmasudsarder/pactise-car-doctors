import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [services, setService] = useState([]);
    useEffect(() => {
        fetch('service.json')
        .then(res => res.json())
        .then(data => setService(data))
    }, [])
  return (
    <div className="my-10">
        <div className="text-center">
            <h2 className="text-xl font-bold text-orange-400">Services</h2>
            <h3 className="text-4xl font-bold">Our Service Area</h3>
            <p className="">The Majority have Suffered alteration in some form, by injected humour, or randomised <br /> words which don look even slightly believable. </p>
        </div>
        <div className="grid grid-cols-3 gap-4 py-5">
            {services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)}
        </div>
    </div>
    
  );
};

export default Services;
