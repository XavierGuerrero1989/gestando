import React from 'react';
import ApliBack from '../../../imgs/aplicacionHero.png';
import { useTranslation } from 'react-i18next';

function SubroAplicacionHero() {

  const { t } = useTranslation();

  return (
    <div className='subroApHero' style={{ backgroundImage:` url(${ApliBack}) `}}>
      <div className='container-fluid'>
        <div className='row subroApHero-row'>
          <div className='col-md-4 offset-md-6 text-right text-center'>
            <h1 className='subroApHero-tit'>{t('subroganteAplicacionHeroTitulo')}</h1>
            <p className='subroApHero-txt'>
            {t('SubroganteAplicacionHeroTexto')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubroAplicacionHero;