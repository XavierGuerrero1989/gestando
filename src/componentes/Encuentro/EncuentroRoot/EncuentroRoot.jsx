import React from 'react';
import PadresBotonRow from '../../Padres/PadresRowBoton/PadresRowBoton';
import EncuentroHero from '../EncuentroHero/EncuentroHero';
import EjemploComponente from '../InternacionalElementos/InternacionalElementos';



function EncuentroRoot() {
    return (
      <div className='padresCtn'>
          <EncuentroHero />
          <EjemploComponente />
          <PadresBotonRow />
      </div>
    );
  }
  
  export default EncuentroRoot;