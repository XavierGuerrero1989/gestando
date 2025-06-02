import React from 'react';
import video from '../../../videos/fondo.mp4';
import { useTranslation } from 'react-i18next';

function ProcesoClose() {

  const { t } = useTranslation();

  return (
    <div className='video-background'>
      <video autoPlay loop muted>
        <source src={video} type='video/mp4' />
        Tu navegador no soporta el elemento de video.
      </video>

      <div className='close-ctn'>
        <div className='row close-row'>
          <h2 className='col-md-8 video-txt'>{t('padresProcesoClose1')} <br/> <br/> {t('padresProcesoClose2')} </h2>
          
        </div>
      </div>
    </div>
  );
}

export default ProcesoClose;
