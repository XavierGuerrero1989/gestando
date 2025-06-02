import React from 'react';
import LegalBack from '../../../imgs/legal.png';

function LegalHero() {
  return (
    
      <div className='container-fluid legalHero-ctn' style={{ backgroundImage:` url(${LegalBack}) `}}>
        <div className='row legalHero-row'>
          <div className='col-md-6 text-center legalHero-col'>
            <h1 className='legalHero-tit'>Cómo se emparejan los futuros padres y las gestantes</h1>
            <p className='legalHero-txt'>
              Gestando Sueños ha emparejado con éxito a cientos de futuros padres y gestantes desde 1995. Comprendemos qué elementos constituyen una relación saludable entre padres y gestantes, y utilizamos nuestra experiencia y conocimiento personal para fomentar cada emparejamiento. Nuestro equipo te conocerá, comprenderá tus esperanzas y preferencias en cuanto a tu gestante, y se embarcará en la búsqueda del emparejamiento adecuado para ti.
            </p>
          </div>
        </div>
      </div>
    
  );
}

export default LegalHero;