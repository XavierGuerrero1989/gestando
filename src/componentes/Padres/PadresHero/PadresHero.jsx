import React from 'react';
import FondoPadres from '../../../imgs/fondopadres.png'
import { useTranslation } from 'react-i18next'; 

function PadresHero() {

  const { t } = useTranslation();

  return (
    <div className='padresHero' style={{ backgroundImage:` url(${FondoPadres}) `}}>
      <div className='container-fluid'>
        <div className='row padresHero-txt'>
          <div className='col-md-6 offset-md-6 text-right text-center'>
            <h1>{t('padresHeroTitulo')}</h1>
            <p className='padresHeroSubText'>
            {t('padresHeroTexto')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PadresHero;
