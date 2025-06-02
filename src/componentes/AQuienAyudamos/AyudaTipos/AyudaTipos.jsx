import React from 'react';
import { useEffect } from "react";
import Hetero from '../../../imgs/hetero.png';
import Homo from '../../../imgs/homo.png';
import Extran from '../../../imgs/extranjeros.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';


function AyudaTipos() {

    const { t } = useTranslation();

    useEffect(() => {
        AOS.init();
      }, [])


  return (
    <div className='Container ayuda-Tipos'>
        
        <div className='row tipos-row-gral'>
            <div className='col-md-10 tipos-minirow text-center' data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="500"
                data-aos-duration="1500">
                <img src={Hetero} alt='' className='tipos-img'></img>
                <p className='tipos-txt'> <span className='tipos-txt-tituloInter'>{t('ayudamosQuienesTiposTitulo1')}</span><br/>{t('ayudamosQuienesTiposTexto1')}</p>
            </div>
            <div className='col-md-10 tipos-minirow text-center' data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="600"
                data-aos-duration="1500">
                <p className='tipos-txt'> <span className='tipos-txt-tituloInter'>{t('ayudamosQuienesTiposTitulo2')}</span><br/>{t('ayudamosQuienesTiposTexto2')}</p>
                <img src={Homo} alt='' className='tipos-img'></img>
            </div>
            <div className='col-md-10 tipos-minirow text-center' data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="700"
                data-aos-duration="1500">
                <img src={Extran} alt='' className='tipos-img'></img>
                <p className='tipos-txt'> <span className='tipos-txt-tituloInter'>{t('ayudamosQuienesTiposTitulo3')}</span><br/>{t('ayudamosQuienesTiposTexto3')} </p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 160"><path fill="#8c52ff" fill-opacity="1" d="M0,160L60,144C120,128,240,96,360,80C480,64,600,64,720,74.7C840,85,960,107,1080,106.7C1200,107,1320,85,1380,74.7L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
            <div className='row tipos-final-frase justify-content-center'>
                <p className='col-md-4'>{t('ayudamosQuienesClosing')}</p>
            </div>
        </div>
    </div>
  );
}

export default AyudaTipos;