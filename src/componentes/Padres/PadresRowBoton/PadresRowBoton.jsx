import React from 'react';
import { Button } from 'react-bootstrap';
import Fondo from '../../../imgs/fondobannerrow.png';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function PadresBotonRow() {

  const { t } = useTranslation();

  return (
    <div className='boton-row text-center' style={{ 
      backgroundImage: `url(${Fondo})`,
      backgroundSize: 'cover',
    }}>
        <div className='row justify-content-center'>
            <h2 className='col-md-12 row-title'>{t('padresBotonRowTitulo')}</h2>
            <Link to="/padres/formulario">
              <Button className='custom-button row-button col-md-1'>{t('padresBotonRowBoton')}</Button>
            </Link>
            
        </div>
    </div>
  );
}

export default PadresBotonRow;