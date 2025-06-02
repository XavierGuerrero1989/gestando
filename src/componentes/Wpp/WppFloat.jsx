import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const WppFloat = () => {
  const handleClick = () => {
    // Al hacer clic, abre la ventana de WhatsApp con el número especificado
    window.open('https://wa.me/5491170654433', '_blank');
  };

  return (
    <div className="wpp-float" onClick={handleClick}>
      <FontAwesomeIcon icon={faWhatsapp} />
    </div>
  );
};

export default WppFloat;
