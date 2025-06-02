import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import FotoBebe from "../../imgs/bebe.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';

function NosotrosRow() {

    const { t } = useTranslation();

    useEffect(() => {
        AOS.init();
      }, [])

  return (
    <div className="row align-items-center mainRow">
        <div className="col-md-6 text-center">
            <img src={FotoBebe} alt="Foto de un bebe" className="fotoBebe" data-aos="flip-up" data-aos-duration="2000" data-aos-delay="500"/>
        </div>
        <div className="col-md-6 text-center">
            <h1>{t('homeBebeRowTitulo')}</h1>
            <p>{t('homeBebeRowTexto')}</p>
        </div>
    </div>
  );
}

export default NosotrosRow;
