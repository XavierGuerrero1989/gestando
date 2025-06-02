import React from 'react';
import FondoHeroAyuda from '../../../imgs/FondoHeroAyuda.png';
import { useTranslation } from 'react-i18next';

function AyudaHero() {

  const { t } = useTranslation();

  return (
    <div className='Container ayuda-Hero' style={{ backgroundImage:` url(${FondoHeroAyuda}) `}}>
        <div className='row justify-content-center'>
          <div className='col-md-6 ayuda-hero-col'>
            <h1 className='ayuda-titulo text-center'>{t('ayudamosHeroTitulo')}</h1>
            <p className='ayuda-txt text-center'>
            {t('ayudamosHeroTexto')}
            </p>
          </div>
        </div>
      
    </div>
  );
}

export default AyudaHero;