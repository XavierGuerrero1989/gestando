import React from 'react';
import f1 from '../../../imgs/f1.png';
import f2 from '../../../imgs/f2.png';
import f3 from '../../../imgs/f3.png';
import f4 from '../../../imgs/f4.png';
import { useTranslation } from 'react-i18next';

function PadresEleccion() {

  const { t } = useTranslation();

  return (
    <div className='PadresComponente'>
      {/* Primera Fila */}
      <div className='row'>
        <div className='col-md-6 text-center seccion-eleccion' style={{ 
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url(${f1})`,
        backgroundSize: 'cover',
      }}>
          {/* Contenido de la primera parte de la primera fila */}
          <h3 className='eleccion-titulo'>{t('porqueRowTitulo1')}</h3>
          <p className='eleccion-txt'>{t('porqueRowTexto1')}</p>
        </div>
        <div className='col-md-6 text-center seccion-eleccion' style={{ 
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url(${f2})`,
        backgroundSize: 'cover',
      }}>
          {/* Contenido de la segunda parte de la primera fila */}
          <h3 className='eleccion-titulo'>{t('porqueRowTitulo2')}</h3>
          <p className='eleccion-txt'>{t('porqueRowTexto2')}</p>
        </div>
      </div>

      {/* Segunda Fila */}
      <div className='row eleccion-row-titulo'>
        <div className='col-md-12 text-center'>
          {/* Título de la segunda fila */}
          <h2 className='eleccion-titulo'>{t('porqueRowPreguntaPrincipal')}</h2>
        </div>
      </div>

      {/* Tercera Fila */}
      <div className='row'> 
        <div className='col-md-6 text-center seccion-eleccion' style={{ 
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url(${f3})`,
        backgroundSize: 'cover',
      }}>
          {/* Contenido de la primera parte de la tercera fila */}
          <h3 className='eleccion-titulo'>{t('porqueRowTitulo3')}</h3>
          <p className='eleccion-txt'>{t('porqueRowTexto3')}</p>
        </div>
        <div className='col-md-6 text-center seccion-eleccion' style={{ 
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url(${f4})`,
        backgroundSize: 'cover',
      }}>
          {/* Contenido de la segunda parte de la tercera fila */}
          <h3 className='eleccion-titulo'>{t('porqueRowTitulo4')}</h3>
          <p className='eleccion-txt'>{t('porqueRowTexto4')}</p>
        </div>
      </div>
    </div>
  );
}

export default PadresEleccion;
