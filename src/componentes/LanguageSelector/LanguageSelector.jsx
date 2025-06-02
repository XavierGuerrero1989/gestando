import React from 'react';
import { useTranslation } from 'react-i18next';
import spain from '../../../src/imgs/espana.png';
import ingles from '../../../src/imgs/reino-unido.png';

function LanguageSelector() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <div>
        <button className='langButton' onClick={() => changeLanguage('en')}>
          <img src={ingles} alt="English Flag" className='langSelector'/>
        </button>
        <button className='langButton' onClick={() => changeLanguage('es')}>
          <img src={spain} alt="Spanish Flag" className='langSelector'/>
        </button>
      </div>
    </div>
  );
}

export default LanguageSelector;