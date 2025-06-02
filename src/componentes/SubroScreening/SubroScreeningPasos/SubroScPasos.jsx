import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SubroScPasos = () => {

    useEffect(() => {
        AOS.init({
          duration: 800, // Duración de la animación en milisegundos
          once: true, // La animación solo ocurre una vez
        });
      }, []);


  return (
    <div className="subro-sc-pasos-ctn">
      <div className="row subro-sc-pasos-row1">
        <div className="col-md-8 text-center" data-aos="fade-up">
          <h2 className='subro-sc-tit'>Preselección de Gestantes</h2>
          <p className='subro-sc-txt'>Este primer paso en el proceso de evaluación ocurre justo después de que completes tu solicitud de gestante. Serás invitada a nuestro portal de gestantes para completar documentos adicionales que nos permitirán conocerte mejor. En la preselección, recopilaremos la siguiente información sobre ti:<br/><br/> Historial de salud y embarazos.
<br/> Verificaciones de antecedentes criminales y financieros.<br/> Información sobre seguros.<br/> Registros médicos.<br/><br/> Si después del proceso de preselección parece que eres adecuada para la gestación subrogada, y sientes que es una buena opción para tu vida, avanzarás al segundo paso del proceso: la Consulta de Gestación Subrogada con un profesional de salud mental con licencia.</p>
        </div>
      </div>
      <div className="row subro-sc-pasos-row2" data-aos="fade-up">
        <div className="col-md-8 text-center">
          <h2 className='subro-sc-tit'>Tu consulta de gestación subrogada</h2>
          <p className='subro-sc-txt'>Tu consulta de gestación subrogada se realiza con un profesional de salud mental con licencia y experiencia en hablar y evaluar a candidatas a gestantes. Esta evaluación social puede durar aproximadamente 2 horas (¡pero puedes dividirla en dos reuniones más cortas si lo prefieres!). Durante tu consulta de gestación subrogada, responderás preguntas y compartirás información sobre lo siguiente:<br/><br/>Tu motivación para querer ser gestante.<br/> Tu historial de embarazos.<br/> Tu familia y relaciones interpersonales.<br/> Cualquier pasatiempo, interés y experiencia de vida.<br/> Quiénes serán parte de tu red de apoyo, incluida la identificación de tu Persona de Apoyo Principal.<br/> Registros médicos.<br/><br/> Durante esta fase de evaluación, tu Persona de Apoyo Principal también se someterá a una evaluación por separado con un profesional de salud mental con licencia para asegurarse de que estén listos para asumir el papel muy importante de apoyarte a ti.</p>
        </div>
      </div>
      <div className="row subro-sc-pasos-row3" data-aos="fade-up">
        <div className="col-md-8 text-center">
          <h2 className='subro-sc-tit'>Examen Psicologico</h2>
          <p className='subro-sc-txt'>Tu tercer y último paso en el Proceso de Evaluación de Gestantes es la evaluación psicológica. Cada gestante debe completar pruebas psicológicas a través del Inventario de Evaluación de la Personalidad (PAI), que es interpretado por un psicólogo con licencia. Esta prueba suele tomar alrededor de 30-45 minutos y se utiliza para evaluar aún más a las candidatas a gestantes y determinar su función psicológica general para determinar si es una candidata adecuada para la gestación subrogada. Un viaje de gestación subrogada puede ser complejo y tratamos de determinar desde el principio si tú y tu familia están listos para comenzar esta increíble aventura.</p>
        </div>
      </div>
    </div>
  );
};

export default SubroScPasos;
