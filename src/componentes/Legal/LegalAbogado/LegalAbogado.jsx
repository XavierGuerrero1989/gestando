import React from 'react';
import { Carousel, Card } from 'react-bootstrap';

function LegalAbogado() {
  const carouselItems = [
    { id: 1, title: 'El Acuerdo con la Portadora (Contrato)', text: 'El Acuerdo con la Portadora es el contrato legal entre la portadora gestacional (surrogada) y los futuros padres. El acuerdo establecerá los derechos y responsabilidades de cada parte. Deberá detallar minuciosamente las responsabilidades de la portadora gestacional hacia ustedes, como futuros padres, tales como asistir a todas las citas médicas requeridas, mantener un estilo de vida saludable durante el embarazo y mantener contacto con los futuros padres. El acuerdo de gestación subrogada también garantizará que la portadora gestacional renuncie a su reclamo de derechos parentales sobre el niño después del nacimiento.El acuerdo de gestación subrogada también detallará las responsabilidades de los futuros padres hacia la portadora, describirá sus obligaciones financieras y listará cuidadosamente todos los gastos que deben cubrir a lo largo de la gestación subrogada. El acuerdo de gestación subrogada también debe detallar todos los posibles riesgos y responsabilidades, y describir las responsabilidades de cada parte en caso de que ocurran ciertas contingencias, como una cesárea o un aborto espontáneo. Es esencial que todas las partes involucradas en un acuerdo de gestación subrogada se aseguren de que el acuerdo cumpla con las leyes de gestación subrogada de su estado. También es importante que todas las partes utilicen abogados competentes en la redacción y negociación del acuerdo.' },
    { id: 2, title: 'Establecimiento de Derechos Parentales', text: 'El problema legal más apremiante que enfrenta cualquier futura pareja es la ejecución del acuerdo de gestación subrogada entre los futuros padres y la gestante, así como el establecimiento de los derechos parentales de los futuros padres. Es crucial que todas las partes trabajen con abogados experimentados que conozcan los requisitos en la jurisdicción donde se llevará a cabo el trabajo legal de parentesco al redactar y negociar sus contratos, para que sus contratos sean respaldados durante toda la gestación subrogada y se otorguen los adecuados derechos parentales, y que los certificados de nacimiento reflejen correctamente el parentesco. Es necesario redactar un contrato de gestación subrogada legalmente vinculante y exhaustivo, pero en última instancia, corresponde al estado hacer cumplir el contrato y proporcionar la documentación oficial que establece los derechos parentales de los futuros padres.' },
    { id: 3, title: 'La Orden Previa al Nacimiento', text: 'La orden previa al nacimiento es un fallo judicial que establece el parentesco de los futuros padres con el bebé que lleva su gestante y es uno de los documentos más importantes de todo el proceso de gestación subrogada. Este documento garantiza que los futuros padres sean los únicos progenitores del niño inmediatamente después del nacimiento. Cada estado tiene su propio conjunto de requisitos (ya sea en estatutos o jurisprudencia) necesarios para establecer los derechos de los futuros padres a través del proceso judicial. En general, es mejor iniciar el proceso de parentesco tan pronto como sea posible después de confirmar el embarazo para que la orden judicial esté en su lugar antes del nacimiento.' },
    { id: 4, title: 'La Orden Posterior al Nacimiento', text: 'Similar a la Orden Previa al Nacimiento, esta orden judicial establece el parentesco de los futuros padres con el bebé que lleva su gestante. Se necesita una Orden Posterior al Nacimiento en ciertos estados donde el progenitor no biológico se agrega al certificado de nacimiento después del nacimiento del bebé.' },
    { id: 5, title: 'Adopción por Segundo Padre', text: 'En algunos casos, los futuros padres deberán completar un proceso de adopción para obtener plenos derechos legales de paternidad sobre el niño. La mayoría de las situaciones que requieren adopción involucran a futuros padres donde uno de los padres no tiene relación biológica con el niño. En esos casos, el progenitor no biológico está adoptando al hijo biológico de su cónyuge. Por lo general, es un proceso más simple y ágil que una adopción a gran escala.' },
  ];

  // Colores para cada Card
  const cardColors = ['#FFC0CB', '#ADD8E6', '#98FB98', '#FFD700', '#FFA07A'];

  return (    
    <div className='container-fluid legalAbogado-ctn'>
      <div className='row text-center legalAbogado-row'>
        <h2 className='col-md-6 legalAbogado-tit'>¿Qué hace un abogado de gestación subrogada?</h2>
        <p className='col-md-6 legalAbogado-txt'>Hay algunos hitos clave durante tu viaje de gestación subrogada en los que necesitarás los servicios de un abogado con experiencia en gestación subrogada y en la ley de Tecnología de Reproducción Asistida (TRA). El primer conjunto de hitos ocurre temprano en tu viaje durante la fase de contratos, mientras que el segundo conjunto de hitos ocurre cuando estás estableciendo tus derechos parentales, aproximadamente a la mitad del embarazo.</p>
      </div>
      <div className='row legalCarrousel'>
        <div className="col-md-6 text-center legalCarousel-card">
          <Carousel>
            {carouselItems.map((item, index) => (
              <Carousel.Item key={item.id}>
                <Card style={{ backgroundColor: cardColors[index] }}>
                  <Card.Body>
                    <Card.Title className='legalCard-tit'>{item.title}</Card.Title>
                    <Card.Text className='legalCard-txt'>{item.text}</Card.Text>
                  </Card.Body>
                </Card>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default LegalAbogado;
