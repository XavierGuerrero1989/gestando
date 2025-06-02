import React from 'react';
import FondoProceso from '../../../imgs/fondoPasos.png';
import { useTranslation } from 'react-i18next';

function ProcesoHero() {

  const { t } = useTranslation();

  return (
    <div className='procesoHero' style={{ 
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${FondoProceso})`,
        backgroundSize: 'cover',
      }}>
      <div className='container-fluid'>
        <div className='row align-items-center justify-content-center procesoHero-txt'>
          <div className='col-md-6'>
            <h1 className='procesos-titulo text-center'>{t('padresProcesoHeroTitulo')}</h1>
            <p className='procesos-txt text-center'>
            {t('padresProcesoHeroTexto')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProcesoHero;