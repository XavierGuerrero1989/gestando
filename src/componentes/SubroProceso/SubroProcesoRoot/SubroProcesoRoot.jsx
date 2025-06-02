import React from 'react';
import SubroganteBotonRow from '../../SubroganteBotonRow/SubroganteBotonRow';
import SubroProcesoHero from '../SubroProcesoHero/SubroProcesoHero';
import SubroProcesoPasos from '../SubroProcesoPasos/SubroProcesoPasos';



function SubroProcesoRoot() {
    return (
      <div className='subroganteCtn'>
        <SubroProcesoHero />
        <SubroProcesoPasos />
        <SubroganteBotonRow />
      </div>
    );
  }
  
  export default SubroProcesoRoot;