import React, { useState } from 'react';
import SweetAlert from 'react-bootstrap-sweetalert';
import FondoCurvo from '../../../imgs/embarazada2.png';
import { useTranslation } from 'react-i18next';

const AlternativeLayout = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [showAlert, setShowAlert] = useState(false);

  const { t } = useTranslation();

  const cards = [
    { id: 1, title: '#1', text: t('subroganteCosasTexto1') },
    { id: 2, title: '#2', text: t('subroganteCosasTexto2') },
    { id: 3, title: '#3', text: t('subroganteCosasTexto3') },
    { id: 4, title: '#4', text: t('subroganteCosasTexto4') },
    { id: 5, title: '#5', text: t('subroganteCosasTexto5') },
  ];

  const handleCardClick = (cardId) => {
    setActiveCard(cardId);
    setShowAlert(true);
  };

  return (
    <div className="alternative-layout" style={{ 
      backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${FondoCurvo})`,
      backgroundSize: 'cover',
    }}>
      <div className="content">
        <h2 className="title">{t('subrogante5cosasTitulo')}</h2>
        <p className="subtitle">{t('subrogante5cosasTexto')}</p>
        <div className="cards-container">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`card ${activeCard === card.id ? 'active' : ''}`}
              onClick={() => handleCardClick(card.id)}
            >
              <h3>{card.title}</h3>
              
            </div>
          ))}
        </div>
      </div>

      {showAlert && (
        <SweetAlert
          title={cards[activeCard - 1].title}
          onConfirm={() => setShowAlert(false)}
        >
          {cards[activeCard - 1].text}
        </SweetAlert>
      )}
    </div>
  );
};

export default AlternativeLayout;
