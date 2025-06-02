import React from 'react';
import { Button } from 'react-bootstrap';
import FondoBoton from '../../imgs/fondoBotonSubro.png';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function SubroganteBotonRow() {

  const { t } = useTranslation();

  return (
    <div className='boton-row text-center subroBotonRow' style={{ 
      backgroundImage: `url(${FondoBoton})`,
      backgroundSize: 'cover',
    }}>
        <div className='row justify-content-center'>
            <h2 className='col-md-12 row-title'>{t('subroganteRowTitulo')}</h2>
            <Link to="/subrogante/formulario">
              <Button className='custom-button row-button col-md-1'>{t('botonSubroForm')}</Button>
            </Link>
            
        </div>
    </div>
  );
}

export default SubroganteBotonRow;