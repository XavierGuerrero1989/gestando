import React from 'react';
import Swal from 'sweetalert2';
import back1 from '../../../imgs/rectangulo.png';
import back2 from '../../../imgs/rectangulo2.png';
import back3 from '../../../imgs/rectangulo3.png';
import { useTranslation } from 'react-i18next';

function SubroApPasos() {

  const { t } = useTranslation();

  const handleRectanguloClick = (titulo, texto) => {
    Swal.fire({
      title: titulo,
      text: texto,
      icon: 'info',
    });
  };

  return (
    <div className='componenteComplejo text-center'>
      <div className='container-fluid ctn-complejo'>
        <div className='row'>
          <div className='col-md-12'>
            {/* Título y párrafo */}
            <h2 className='pasos-titulo111'>{t('subroganteApPasosTitulo')}</h2>
            <p className='pasos-txt111'>{t('subroganteApPasosTexto1')} </p>
          </div>
        </div>

        <div className='row'>
          {/* Primer Rectángulo */}
          <div className='col-md-4 columna-paso' style={{ 
        backgroundImage: `url(${back1})`,
        backgroundSize: 'cover',
      }} onClick={() => handleRectanguloClick(t('subroganteApPasosTit1'), t('subroganteApPasosDesc1'))}>
            <div className='rectangulo'>
              <h3>{t('subroganteApPasosTit1')}</h3>
            </div>
          </div>

          {/* Segundo Rectángulo */}
          <div className='col-md-4 columna-paso' style={{ 
        backgroundImage: `url(${back2})`,
        backgroundSize: 'cover',
      }} onClick={() => handleRectanguloClick(t('subroganteApPasosTit2'), t('subroganteApPasosDesc2'))} >
            <div className='rectangulo'>
              <h3>{t('subroganteApPasosTit2')}</h3>
            </div>
          </div>

          {/* Tercer Rectángulo */}
          <div className='col-md-4 columna-paso' style={{ 
        backgroundImage: `url(${back3})`,
        backgroundSize: 'cover',
      }} onClick={() => handleRectanguloClick(t('subroganteApPasosTit3'),t('subroganteApPasosDesc3'))}>
            <div className='rectangulo'>
              <h3>{t('subroganteApPasosTit3')}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubroApPasos;
