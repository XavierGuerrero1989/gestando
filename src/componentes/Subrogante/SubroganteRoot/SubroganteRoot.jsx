import React from 'react';
import SubroganteHero from '../SubroganteHero/SubroganteHero';
import SubrogantePorQue from '../SubrogantePorQue/SubrogantePorQue';
import AlternativeLayout from '../Subrogante5cosas/Subrogante5cosas';
import SubroganteBotonRow from '../../SubroganteBotonRow/SubroganteBotonRow';


function SubroganteRoot() {
    return (
      <div className='subroganteCtn'>
          <SubroganteHero />
          <SubrogantePorQue />
          <AlternativeLayout />
          <SubroganteBotonRow />
      </div>
    );
  }
  
  export default SubroganteRoot;