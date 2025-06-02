import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Fotomb from "../../imgs/madreybebe.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';

function PadresRow() {

    const { t } = useTranslation();

    useEffect(() => {
        AOS.init();
      }, [])

  return (
    <div className="row align-items-center mainRowP">
        <div className="col-md-6 text-center">
            <img src={Fotomb} alt="Foto de un bebe" className="foto" data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="500"/>
        </div>
        <div className="col-md-6 text-center">
            <h1>{t('homeMadreyBebeTitulo')}</h1>
            <p>{t('homeMadreyBebeTexto')}</p>
            
            
        </div>
    </div>
  );
}

export default PadresRow;