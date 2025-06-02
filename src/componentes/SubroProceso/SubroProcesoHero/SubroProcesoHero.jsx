import React from 'react';
import VideoFondo from '../../../videos/videoHero.mp4'
import { useTranslation } from 'react-i18next';

function SubroProcesoHero() {

  const { t } = useTranslation();

  return (
    <div className='video-background1'>
      <video autoPlay loop muted>
        <source src={VideoFondo} type='video/mp4' />
        Tu navegador no soporta el elemento de video.
      </video>

      <div className='close-ctn1'>
        <div className='row close-row1'>
          <h2 className='col-md-6 video-txt1'>{t('subroganteProcesoHeroTitulo')}</h2>
          <p className='col-md-6 video-txt2'>{t('subroganteProcesoHeroTexto')}</p>
        </div>
      </div>
    </div>
  );
}

export default SubroProcesoHero;
