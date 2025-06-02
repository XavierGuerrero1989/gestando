import React from 'react';
import EncuentroFondo from '../../../imgs/encuentroHero.png';
import { useTranslation } from 'react-i18next';

function EncuentroHero() {

  const { t } = useTranslation();
  
  return (
    
      <div className='container-fluid encuentroHero-ctn' style={{ backgroundImage:` url(${EncuentroFondo}) `}}>
        <div className='row encuentroHero-row'>
          <div className='col-md-6 offset-md-6 text-right text-center encuentroHero-col'>
            <h1 className='encuentroHero-tit'>{t('internacionalTitulo')}</h1>
            <p className='encuentroHero-txt'>     
            {t('internacionalSubtitulo')}
            </p>
          </div>
        </div>
      </div>
    
  );
}

export default EncuentroHero;