import React from 'react';
import FotoCorrecta from '../../../imgs/correctoFoto.png';


function EncuentroCorrecto() {
  return (
    <div className='containerfluid correcto-ctn'>
        <div className='row align-items-center text-center'>
            <div className='col-md-6 correcto-textoctn'>
                <h2 className='correcto-tit'>Encontrar la Coincidencia Adecuada con la Gestante</h2>
                <p className='correcto-txt'>Aunque nuestros Especialistas en Coincidencias hacen un trabajo fenomenal al emparejar padres y gestantes, hay ocasiones en las que compartiremos una coincidencia que no parece adecuada. Brindar retroalimentación honesta sobre por qué estás rechazando una coincidencia nos ayudará a acertar la segunda vez. Los criterios que utilizas para determinar una buena coincidencia son personales y pueden incluir:<br/> -Algunos padres desean saber por qué una gestante ha decidido embarcarse en un viaje de gestación subrogada. <br/> -Algunas portadoras gestacionales les gusta conocer la historia de los futuros padres: cómo se conocieron y por qué tienen interés en expandir su familia. <br/> -En otras ocasiones, es simplemente una corazonada de que es "correcto".</p>
            </div>
            <div className='col-md-6'>
                <img src={FotoCorrecta} alt='imagen de familia con bebe' className='correcto-img'></img>
            </div>
        </div>
    </div>
  );
}

export default EncuentroCorrecto;