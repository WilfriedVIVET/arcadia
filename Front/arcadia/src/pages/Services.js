import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import store from "../Redux/store/store";
import { getServices } from "../Redux/actions/services.action";
import { isEmpty } from "../Utils/Utils";
import { useDispatch, useSelector } from "react-redux";
import backgroundImage from "../assets/deco/pont.jpg";

const Services = () => {
  const dispatch = useDispatch();
  const services = useSelector((state) => state.getServices);

  // Récupération des infos du zoo.
  useEffect(() => {
    if (isEmpty(store.getState().getServices)) store.dispatch(getServices());
  }, [dispatch]);

  return (
    <>
      <div className="body-services">
        <Navbar />
        <div className="container-services">
          <img className="background-image" src={backgroundImage} alt="Pont" />
        </div>
        <div className="header-contenu">
          <div className="trait"></div>
          <span className="title">NOS SERVICES</span>
        </div>
        <div className="service-service">
          {!isEmpty(services) &&
            services.map((service, index) => (
              <div className="container-formulaire" key={index}>
                <div className="header-formulaire">
                  <span className="title-service">{service.nom}</span>
                </div>
                <p>{service.description}</p>
              </div>
            ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Services;
