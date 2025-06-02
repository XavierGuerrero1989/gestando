import React from 'react';
import SubBack from '../../../imgs/subroganteHero.png';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function SubroganteHero() {

  const { t } = useTranslation();

  return (
    <div className='subroganteHero' style={{ 
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 1), rgba(255, 255, 255, 0)), url(${SubBack})`,
        backgroundSize: 'cover',
      }}>
      <div className='container-fluid'>
        <div className='row subroganteHero-txt'>
          <div className='col-md-6 offset-md-6 text-right text-center'>
            <h1 className='subHero-tit'>{t('subroganteHeroTitulo')}</h1>
            <p className='subHero-txt'>
            {t('subroganteHeroTexto')}
            </p>
            <Link to="/subrogante/formulario">
              <Button className='custom-button text-center'>{t('botonSubroForm')}</Button>
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubroganteHero;
