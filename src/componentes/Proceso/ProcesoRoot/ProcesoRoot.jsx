import React from 'react';
import PadresBotonRow from '../../Padres/PadresRowBoton/PadresRowBoton';
import ProcesoClose from '../ProcesoClose/ProcesoClose';
import ProcesoHero from '../ProcesoHero/ProcesoHero';
import ProcesoPasos from '../ProcesoPasos/ProcesoPasos';

function Proceso() {
    return (
      <div className='padresCtn'>
          <ProcesoHero />
          <ProcesoPasos />
          <ProcesoClose />
          <PadresBotonRow />
      </div>
    );
  }
  
  export default Proceso;