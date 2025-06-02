import React from 'react';
import PadresBotonRow from '../../Padres/PadresRowBoton/PadresRowBoton';
import LegalAbogado from '../LegalAbogado/LegalAbogado';
import LegalHero from '../LegalHero/LegalHero';
import LegalSegundo from '../LegalSegundo/LegalSegundo';


function Legal() {
    return (
      <div className='padresCtn'>
          <LegalHero />
          <LegalSegundo />
          <LegalAbogado />
          <PadresBotonRow />
      </div>
    );
  }
  
  export default Legal;