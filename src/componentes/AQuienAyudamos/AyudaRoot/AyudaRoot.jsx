import React from 'react';
import PadresBotonRow from '../../Padres/PadresRowBoton/PadresRowBoton';
import AyudaHero from '../AyudaHero/AyudaHero';
import AyudaTipos from '../AyudaTipos/AyudaTipos';

function Ayuda() {
    return (
      <div className='padresCtn'>
          <AyudaHero />
          <AyudaTipos />
          <PadresBotonRow />
      </div>
    );
  }
  
  export default Ayuda;