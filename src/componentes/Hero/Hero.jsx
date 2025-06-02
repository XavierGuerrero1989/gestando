import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import nombre from '../../imgs/nombre.png'
import embarazada from '../../imgs/embarazada.jpg'
import padres from '../../imgs/padres.jpg'
import familia from '../../imgs/familia.jpg'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Hero() {

  const { t } = useTranslation();

  return (
    <div className='ctnHero' style={{ 
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url(${familia})`,
        backgroundSize: 'cover',
      }}>
        <div className="row justify-content-md-center row1">
            <img src={nombre} alt="Nombre de la institucion" className='nombre' />
        </div>
        <div className='row justify-content-md-center row1'>
                <Card  className='card text-center'>
                    <Card.Img variant="top" src={embarazada} className='miniFoto'/>
                    <Card.Body className='text-center'>
                        <Card.Title className='text-center'>{t('homeGestanteCard')}</Card.Title>
                        <Card.Text>
                        </Card.Text>
                        <Link to="/padres">
                           <Button className='custom-button text-center'>{t('homeGestanteCardBoton')}</Button>
                        </Link>
                        
                    </Card.Body>
                </Card> 
                <Card  className='card text-center'>
                    <Card.Img variant="top" src={padres} className='miniFoto'/>
                    <Card.Body className='text-center'>
                        <Card.Title className='text-center'>{t('homePadresCard')}</Card.Title>
                        <Card.Text>
                        </Card.Text>
                        <Link to="/subrogante">
                          <Button className='custom-button text-center'>{t('homePadresCardBoton')}</Button>
                        </Link>
                        
                    </Card.Body>
                </Card>
        </div>
    </div>
  );
}

export default Hero;