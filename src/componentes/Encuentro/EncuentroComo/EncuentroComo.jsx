import React from 'react';
import FondoComo from '../../../imgs/fondoNuevo.png';


function EncuentroComo() {
  return (
    <div className='container-fluid como-ctn' style={{ backgroundImage:` url(${FondoComo}) `}}>
        <div className='row align-items-center text-center'>
            <h2 className='col-md-6 encuentro-tit'>¿Cómo encontrar un Subrogante?</h2>
            <p className='col-md-6 encuentro-txt'>En Gestando Sueños, nuestros Especialistas en Coincidencias trabajan estrechamente contigo para asegurarse de encontrar la mejor coincidencia posible con una gestante. Gracias a esto, nuestros futuros padres y gestantes desarrollan vínculos sólidos durante su viaje, tanto durante como después del proceso. Desde tu primera reunión con Gestando Sueños, te preguntaremos cómo te imaginas tu viaje de gestación subrogada. Cuando te presentamos a nuestros Especialistas en Coincidencias, continúan conociéndote y te piden que completes un perfil de padre. Responder a estas preguntas ayuda a nuestro equipo a encontrarte la mejor coincidencia con una gestante para tu viaje. Contamos con décadas de experiencia en unir a futuros padres y gestantes que desarrollan vínculos profundos a lo largo de la gestación subrogada y más allá. El proceso de coincidencia puede generar sentimientos de aprensión y nerviosismo. Con nuestra orientación, esperamos que sientas emoción ante la posibilidad de encontrar una coincidencia para esta experiencia extraordinaria. En Gestando Sueños, nuestro equipo encuentra coincidencias significativas para ti de manera específica; es decir, las coincidencias se seleccionan cuidadosamente en función de las preferencias de ambas partes, además de criterios adicionales como la ubicación y la compatibilidad legal.</p>
        </div>
    </div>
  );
}

export default EncuentroComo;