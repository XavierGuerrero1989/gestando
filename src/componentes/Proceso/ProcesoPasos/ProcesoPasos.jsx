import React, { useState } from 'react';
import firma from '../../../imgs/contrato.png';
import match from '../../../imgs/match.png';
import medicallegal from '../../../imgs/medicolegal.png';
import embarazo from '../../../imgs/embarazo.png';
import paternidad from '../../../imgs/paternidad.png';
import { useTranslation } from 'react-i18next';

const ProcesoPasos = () => {

  const { t } = useTranslation();

  const [selectedItem, setSelectedItem] = useState(null);

  const data = [
    { id: 1, title: t('padresPasosTit1'), text: t('padresPasosText1'), image: firma },
    { id: 2, title: t('padresPasosTit2'), text: t('padresPasosText2'), image:match},
    { id: 3, title: t('padresPasosTit3'), text: t('padresPasosText3'), image: medicallegal},
    { id: 4, title: t('padresPasosTit4'), text: t('padresPasosText4'), image: embarazo},
    { id: 5, title: t('padresPasosTit5'), text: t('padresPasosText5'), image: paternidad },
  ];

  const renderListItem = (item) => (
    <div className='renderctn' key={item.id} onClick={() => setSelectedItem(item)}>
      <div className='render-seleccion' style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
        <img src={item.image} style={{ width: 50, height: 50, margin: 10 }} alt={item.title} />
        <span>{t(item.title)}</span>
      </div>
    </div>
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      {/* Columna Izquierda */}
      <div style={{ flex: 1, padding: 20}}>
        <h2 className='titulo-principal text-center' style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>{t('padresProcesoPasosTitulo')}</h2>
        <p className='texto-principal'>{t('padresProcesoPasosTexto')}</p>
        {data.map(renderListItem)}
      </div>

      {/* Columna Derecha */}
      <div style={{ flex: 1, padding: 20, backgroundColor: 'rgba(50,171,216,0.5)' }}>
        {selectedItem && (
          <>
            <h2 className='titulo-render text-center'>{t(selectedItem.title)}</h2>
            <p className='texto-render text-center'>{t(selectedItem.text)}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default ProcesoPasos;
