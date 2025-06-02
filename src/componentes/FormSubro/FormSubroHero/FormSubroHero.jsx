import React from 'react';
import { useTranslation } from 'react-i18next';


function FormSubroHero() {

  const { t } = useTranslation();


  return (
    
      <div className='container-fluid'>
        <div className='row align-items-center justify-content-center padresFormHero-txt'>
          <div className='col-md-6'>
            <h1 className='padresForm-titulo text-center'>{t('subroFormHeroTitulo')}</h1>
            <p className='padresForm-txt text-center'>
            {t('subroFormHeroTexto1')}
            </p>
          </div>
        </div>
        <div className='row align-items-center justify-content-center'>
         <div col-md-6>
            <h2 className='text-center subtitulo'>{t('subroFormHeroTexto2')}</h2>
            <p className='text-center subtexto'>{t('subroFormHeroTexto3')}<br/>{t('subroFormHeroTexto4')}</p>
         </div>
        </div>
      </div>
    
  );
}

export default FormSubroHero;