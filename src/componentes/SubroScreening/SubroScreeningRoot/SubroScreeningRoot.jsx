import React from 'react';
import SubroganteBotonRow from '../../SubroganteBotonRow/SubroganteBotonRow';
import SubroScClose from '../SubroScreeningClosing/SubroScClosing';
import SubroScreeningHero from '../SubroScreeningHero/SubroScreeningHero';
import SubroScPasos from '../SubroScreeningPasos/SubroScPasos';





function SubroScreeningRoot() {
    return (
      <div className='subroganteCtn'>
        <SubroScreeningHero />
        <SubroScPasos />
        <SubroScClose />
        <SubroganteBotonRow />
      </div>
    );
  }
  
  export default SubroScreeningRoot;