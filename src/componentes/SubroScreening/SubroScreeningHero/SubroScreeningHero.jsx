import React from 'react';
import BackHeroSc from '../../../imgs/screeningHero.png';

function SubroScreeningHero() {
  return (
    
      <div className='container-fluid subroScreening-ctn' style={{ 
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 1), rgba(255, 255, 255, 0)), url(${BackHeroSc})`,
        backgroundSize: 'cover',
      }}>
        <div className='row subroScreening-row'>
          <h2 className='col-md-6 subroScreening-tit'>El Proceso de Evaluación de Gestantes</h2>
          <p className='col-md-6 subroScreening-txt'>Como solicitante a gestante, participarás en un proceso de evaluación de 3 pasos para asegurarte de que estás adecuadamente informada sobre lo que implica ser gestante y de que la gestación subrogada es la opción adecuada para ti y tu familia.</p>
        </div>
      </div>
    
  );
}

export default SubroScreeningHero;