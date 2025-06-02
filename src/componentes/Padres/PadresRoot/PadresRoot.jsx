import React from 'react';
import PadresHero from '../PadresHero/PadresHero';

import PadresPasos from '../PadresPasos/PadresPasos';
import PadresEleccion from '../PadresElececcion/PadresEleccion';
import PadresBotonRow from '../PadresRowBoton/PadresRowBoton';

function Padres() {
    return (
      <div className='padresCtn'>
          <PadresHero />
          
          <PadresPasos />
          <PadresEleccion />
          <PadresBotonRow />
      </div>
    );
  }
  
  export default Padres;