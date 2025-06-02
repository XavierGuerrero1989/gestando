import React from 'react';
import './AcuerdoPrivacidad.scss';
import { useTranslation } from 'react-i18next';

const AcuerdoPrivacidad = () => {

  const { t } = useTranslation();

  return (
    <div className="container-fluid acuerdo-privacidad-ctn">
    <div className='row justify-content-center'>
        <p className='col-md-6 text-center acuerdoMain'> 
        <span className='acuerdoTitulo'>{t('privacidadTitulo')}</span> 
        <br />
        <br />
        {t('privacidadTexto1')}
        <br />
        <br />
        {t('privacidadTexto2')}
        <br />
        <br />
        1. <strong>{t('privacidadTexto3')}</strong>
        <br />
        a. {t('privacidadTexto4')}
        <br />
        <br />
        2. <strong>{t('privacidadTexto5')}</strong>
        <br />
        a. {t('privacidadTexto6')}
        <br />
        b. {t('privacidadTexto7')}
        <br />
        <br />
        3. <strong>{t('privacidadTexto8')}</strong>
        <br />
        a. {t('privacidadTexto9')}
        <br />
        <br />
        4. <strong>{t('privacidadTexto10')}</strong>
        <br />
        a. {t('privacidadTexto11')}
        <br />
        b. {t('privacidadTexto12')}
        <br />
        <br />
        5. <strong>{t('privacidadTexto13')}</strong>
        <br />
        a. {t('privacidadTexto14')}
        <br />
        b. {t('privacidadTexto15')}
        <br />
        <br />
        6. <strong>{t('privacidadTexto16')}</strong>
        <br />
        a. {t('privacidadTexto17')}
        <br />
        <br />
        7. <strong>{t('privacidadTexto18')}</strong>
        <br />
        a. {t('privacidadTexto19')}
        <br />
        <br />
        8. <strong>{t('privacidadTexto20')}</strong>
        <br />
        a. {t('privacidadTexto21')}
        <br />
        <br />
        {t('privacidadTexto22')}
        <br />
        <br />
        Gestando Sueños
        <br />
        
      </p>
    </div>
      
    </div>
  );
};

export default AcuerdoPrivacidad;
