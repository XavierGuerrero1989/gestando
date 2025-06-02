import React from 'react';
import Swal from 'sweetalert2';
import back1 from '../../../imgs/rectangulo.png';
import back2 from '../../../imgs/rectangulo2.png';
import back3 from '../../../imgs/rectangulo3.png';
import { useTranslation } from 'react-i18next';

function PadresPasos() {
  const handleRectanguloClick = (titulo, texto) => {
    Swal.fire({
      title: titulo,
      text: texto,
      icon: 'info',
    });
  };

  const { t } = useTranslation();

  return (
    <div className='componenteComplejo text-center'>
      <div className='container-fluid ctn-complejo'>
        <div className='row'>
          <div className='col-md-12'>
            {/* Título y párrafo */}
            <h2 className='pasos-titulo'>{t('padresPrimerosPasosMainTitulo')}</h2>
            <p className='pasos-txt'>{t('padresPrimerosPasosMainTextP1')} <br/> {t('padresPrimerosPasosMainTextP2')} <br/> {t('padresPrimerosPasosMainTextP3')} </p>
          </div>
        </div>

        <div className='row'>
          {/* Primer Rectángulo */}
          <div className='col-md-4 columna-paso' style={{ 
        backgroundImage: `url(${back1})`,
        backgroundSize: 'cover',
      }} onClick={() => handleRectanguloClick(t('padresPasosCuadroTitulo1'), t('padresPasosCuadroTexto1'))}>
            <div className='rectangulo'>
              <h3>{t('padresPrimerosPasosMainTextP1')}</h3>
            </div>
          </div>

          {/* Segundo Rectángulo */}
          <div className='col-md-4 columna-paso' style={{ 
        backgroundImage: `url(${back2})`,
        backgroundSize: 'cover',
      }} onClick={() => handleRectanguloClick(t('padresPasosCuadroTitulo2'), t('padresPasosCuadroTexto2'))} >
            <div className='rectangulo'>
              <h3>{t('padresPrimerosPasosMainTextP2')}</h3>
            </div>
          </div>

          {/* Tercer Rectángulo */}
          <div className='col-md-4 columna-paso' style={{ 
        backgroundImage: `url(${back3})`,
        backgroundSize: 'cover',
      }} onClick={() => handleRectanguloClick(t('padresPasosCuadroTitulo3'), t('padresPasosCuadroTexto3'))}>
            <div className='rectangulo'>
              <h3>{t('padresPrimerosPasosMainTextP3')}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PadresPasos;
