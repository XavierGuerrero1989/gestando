import React from 'react';
import PadresBotonRow from '../../Padres/PadresRowBoton/PadresRowBoton';
import SubroganteBotonRow from '../../SubroganteBotonRow/SubroganteBotonRow';
import SubroAplicacionHero from '../SubroAplicacionHero/SubroAplicacionHero';
import SubroApPasos from '../SubroApPasos/SubroApPasos';

function SubroAplicacionRoot() {
    return (
      <div className='padresCtn'>
          <SubroAplicacionHero />
          <SubroApPasos />
          <SubroganteBotonRow />
      </div>
    );
  }
  
  export default SubroAplicacionRoot;