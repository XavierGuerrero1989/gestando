// EjemploComponente.jsx
import React from 'react';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import Busqueda from '../../../imgs/lupa.png';
import Estudios from '../../../imgs/estudios.png';
import psicologo from '../../../imgs/psicologo.png';
import asistentesocial from '../../../imgs/asistentesocial.png';
import legalesLogo from '../../../imgs/legalLogo.png';
import evaluacionPsico from '../../../imgs/evpsicologica.png';
import cobmedica from '../../../imgs/cobmedica.png';
import segurovida from '../../../imgs/segurovida.png';
import compensacion from '../../../imgs/compensacion.png';
import obstetrico from '../../../imgs/obstetra.png';
import clinica from '../../../imgs/clinica.png';
import fiv from '../../../imgs/fiv.png';
import { useTranslation } from 'react-i18next';



const EjemploComponente = () => {

    const { t } = useTranslation();

  const celdas = [
    { titulo: t('internacionalTitulo1'), imagen: Busqueda, texto: t('internacionalTexto1') },
    { titulo: t('internacionalTitulo2'), imagen: Estudios, texto: t('internacionalTexto2') },
    { titulo: t('internacionalTitulo3'), imagen:psicologo, texto: t('internacionalTexto3') },
    { titulo: t('internacionalTitulo4'), imagen: asistentesocial, texto: t('internacionalTexto4') },
    { titulo: t('internacionalTitulo5'), imagen: legalesLogo, texto:t('internacionalTexto5') },
    { titulo: t('internacionalTitulo6'), imagen: evaluacionPsico, texto: t('internacionalTexto6') },
    { titulo: t('internacionalTitulo7'), imagen: cobmedica, texto: t('internacionalTexto7') },
    { titulo: t('internacionalTitulo8'), imagen: segurovida, texto: t('internacionalTexto8') },
    { titulo: t('internacionalTitulo9'), imagen: compensacion, texto: t('internacionalTexto9') },
    { titulo: t('internacionalTitulo10'), imagen: obstetrico, texto: t('internacionalTexto10') },
    { titulo: t('internacionalTitulo11'), imagen: clinica, texto: t('internacionalTexto11') },
    { titulo: t('internacionalTitulo12'), imagen: fiv, texto: t('internacionalTexto12') },
  ];

  const handleClick = (titulo, texto) => {
    Swal.fire({
      icon: 'info',
      title: titulo,
      text: texto,
    });
  };

  return (
    <div className="container-internacional">
      <h1>{t('internacionalElementostitulo')}</h1>
      <h2>{t('internacionalElementostexto')}</h2>
      
      <div className="grid-container">
        {/* Celdas */}
        {celdas.map((celda, index) => (
          <div key={index} className="grid-item" onClick={() => handleClick(celda.titulo, celda.texto)}>
            <h3>{celda.titulo}</h3>
            <img src={celda.imagen} alt={`Imagen ${index + 1}`} className='imagenElemento'/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EjemploComponente;
