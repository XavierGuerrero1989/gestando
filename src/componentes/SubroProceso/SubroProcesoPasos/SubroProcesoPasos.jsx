import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const SubroProcesoPasos = () => {

  const { t } = useTranslation();

  const [pasoActual, setPasoActual] = useState(1);

  const handlePasoClick = (paso) => {
    setPasoActual(paso);
  };

  const pasosData = [
    { title: t('subrogantePasostitulo1'), content: t('subrogantePasostexto1') },
    { title: t('subrogantePasostitulo2'), content: t('subrogantePasostexto2') },
    { title: t('subrogantePasostitulo3'), content: t('subrogantePasostexto3') },
    { title: t('subrogantePasostitulo4'), content: t('subrogantePasostexto4')},
    { title: t('subrogantePasostitulo5'), content:  t('subrogantePasostexto5')},
    { title: t('subrogantePasostitulo6'), content: t('subrogantePasostexto6') },
    { title: t('subrogantePasostitulo7'), content: t('subrogantePasostexto7') },
  ];

  return (
    <div className="subro-proceso-pasos-container">

      <div className='pasostitulo-ctn'>
        <h2 className='pasos-titulo'>{t('subrogante7PasosTitulo')}</h2>
        <p className='pasos-texto'>{t('subrogante7PasosTexto')} <br/> {t('subrogante7PasosTexto2')} </p>
      </div>

      <div className="pasos">
        {pasosData.map((paso, index) => (
          <motion.div
            key={index + 1}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: pasoActual === index + 1 ? 1 : 0.7, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className={`paso ${
              index + 1 === pasoActual ? 'paso-selected' : 'paso-not-selected'
            }`}
            onClick={() => handlePasoClick(index + 1)}
          >
            {t(paso.title)}
          </motion.div>
        ))}
      </div>

      <div className="contenido">
        {pasosData.map((paso, index) => (
          <motion.div
            key={index + 1}
            className={`contenido-inner fade-in ${pasoActual === index + 1 ? 'contenido-visible' : ''}`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: pasoActual === index + 1 ? 1 : 0, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {pasoActual === index + 1 && (
              <>
                <h2 className='paso-titulo'>{t(paso.title)}</h2>
                <motion.p className="paso-sub animista-fade-in">{t(paso.content)}</motion.p>
              </>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SubroProcesoPasos;
