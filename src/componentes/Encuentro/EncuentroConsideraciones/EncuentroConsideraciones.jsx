import React from 'react';
import ImagenConsi from '../../../imgs/imagenConsideraciones.png';


function EncuentroConsideraciones() {
  return (
    <div className='containerfluid consideraciones-ctn'>
        <div className='row align-items-center text-center'>
            <div className='col-md-6'>
                <img src={ImagenConsi} alt='imagen de familia con bebe' className='consideraciones-img'></img>
            </div>
            <div className='col-md-6'>
                <h2 className='consideraciones-tit'>Consideraciones para la Coincidencia con la Gestante</h2>
                <p className='consideraciones-txt'>Cuando las gestantes y los futuros padres comienzan a trabajar con Gestando Sueños, les haremos preguntas para ayudar a nuestro equipo a encontrar la mejor coincidencia posible. Los especialistas en coincidencias apoyarán a los futuros padres, mientras que los asesores de gestantes guiarán a las gestantes a través del proceso. Gestando Sueños preguntará a los futuros padres y a las gestantes sobre sus preferencias en lo siguiente: <br/> -Nivel de comunicación que desean tener entre ellos durante y después de la gestación subrogada. <br/> -Ubicación. <br/> -Número de embriones a transferir (embriones únicos o múltiples). <br/> -Opiniones sobre la reducción selectiva y la interrupción.</p>
            </div>
        </div>
    </div>
  );
}

export default EncuentroConsideraciones;