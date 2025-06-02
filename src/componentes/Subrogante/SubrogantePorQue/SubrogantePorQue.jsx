import React, { useState } from 'react';
import SubroMujer from '../../../imgs/fondoMadre.png';
import { useTranslation } from 'react-i18next';

function SubrogantePorQue() {
  const [showText, setShowText] = useState({});

  const toggleText = (title) => {
    setShowText((prev) => ({
      [title]: !prev[title],
      ...Object.fromEntries(Object.keys(prev).filter(key => key !== title).map(key => [key, false]))
    }));
  };

  const { t } = useTranslation();

  return (
    <div className='subrogantePorQue-ctn'>
      <div className='container-fluid'>
        <div className='row subrogantePorQue-txt'>
          <div className='col-md-6 text-center'>
            <h1 className='subPorQue-tit'>{t('subrogantePorQueTitulo')}</h1>
            <p className='subPorQue-txt'>
            {t('subrogantePorQueTexto1')}
              <br/> <br/>
              {t('subrogantePorQueTexto2')}
            </p>
            
            <div className='minirow-ctn'>
              <h3 onClick={() => toggleText('titulo2')} className='minirow-tit'>1. {t('subrogantePorQueRazonTit2')}</h3>
              {showText['titulo2'] && <p className='minirow-txt'>{t('subrogantePorQueRazonTxt2')}</p>}
            </div>
            <div className='minirow-ctn'>
              <h3 onClick={() => toggleText('titulo3')} className='minirow-tit'>2. {t('subrogantePorQueRazonTit3')}</h3>
              {showText['titulo3'] && <p className='minirow-txt'>{t('subrogantePorQueRazonTxt3')}</p>}
            </div>
          </div>
          <div className='col-md-6 text-center'>
              <img src={SubroMujer} alt='imagen mujer embarazada' className='subro-img'></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubrogantePorQue;
