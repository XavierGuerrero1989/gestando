import React from 'react';
import { useTranslation } from 'react-i18next';


function FormPadresHero() {

  const { t } = useTranslation();

  return (
    
      <div className='container-fluid'>
        <div className='row align-items-center justify-content-center padresFormHero-txt'>
          <div className='col-md-6'>
            <h1 className='padresForm-titulo text-center'>{t('padresFormHeroTitulo')}</h1>
            <p className='padresForm-txt text-center'>
            {t('padresFormHeroTexto')}
            </p>
          </div>
        </div>
      </div>
    
  );
}

export default FormPadresHero;