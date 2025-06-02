import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './componentes/nabvar/Nabvar';
import { NotFound } from './componentes/404/NotFound';
import Footer from './componentes/Footer/Footer';
import Home from './componentes/Home/home';
import Padres from './componentes/Padres/PadresRoot/PadresRoot';
import Ayuda from './componentes/AQuienAyudamos/AyudaRoot/AyudaRoot';
import Proceso from './componentes/Proceso/ProcesoRoot/ProcesoRoot';
import EncuentroRoot from './componentes/Encuentro/EncuentroRoot/EncuentroRoot';
import Legal from './componentes/Legal/LegalRoot/LegalRoot';
import SubroganteRoot from './componentes/Subrogante/SubroganteRoot/SubroganteRoot';
import SubroProcesoRoot from './componentes/SubroProceso/SubroProcesoRoot/SubroProcesoRoot';
import SubroAplicacionRoot from './componentes/SubroAplicacion/SubroAplicacionRoot/SubroAplicacionRoot';
import SubroScreeningRoot from './componentes/SubroScreening/SubroScreeningRoot/SubroScreeningRoot';
import FormPadresRoot from './componentes/FormPadres/FormPadresRoot/FormPadresRoot';
import FormSubroRoot from './componentes/FormSubro/FormSubroRoot/FormSubroRoot';
import WppFloat from './componentes/Wpp/WppFloat';
import BasicExample from './componentes/NewNav/NewNav';
import AcuerdoPrivacidad from './componentes/AcuerdoPrivacidad/Acuerdoprivacidad';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import Login from './componentes/SystemAdmin/LogIn/Login';

import enTranslations from '../src/traslations/en/en.json'; // Importa tus archivos de traducción
import esTranslations from '../src/traslations/es/es.json';
import SystemHomeRoot from './componentes/SystemAdmin/SystemHomeRoot/SystemHomeRoot';

const CookieBanner = ({ onAccept, onReject }) => {

  const { t } = useTranslation(); 

  const [acceptedCookies, setAcceptedCookies] = useState(false);

  useEffect(() => {
    const hasAcceptedCookies = Cookies.get('cookiesAccepted') === 'true';
    setAcceptedCookies(hasAcceptedCookies);
  }, []);

  const handleAcceptCookies = () => {
    Cookies.set('cookiesAccepted', 'true', { expires: 365 });
    setAcceptedCookies(true);
    onAccept();
  };

  const handleRejectCookies = () => {
    Cookies.set('cookiesAccepted', 'false', { expires: 365 });
    setAcceptedCookies(false);
    onReject();
  };

  if (acceptedCookies) {
    return null;
  }

  return (
    <div className="cookie-banner">
      <p>{t('cookiesTexto')}</p>
      <div>
        <Button variant="success" onClick={handleAcceptCookies}>{t('cookiesBotonSi')}</Button>
        <Button variant="danger" onClick={handleRejectCookies}>{t('cookiesBotonNo')}</Button>
      </div>
    </div>
  );
};

i18n.init({
  resources: {
    en: { translation: enTranslations },
    es: { translation: esTranslations },
  },
  lng: 'es', // Establece el idioma predeterminado
  fallbackLng: 'en', // Idioma de respaldo en caso de que no se encuentre una traducción
  interpolation: {
    escapeValue: false,
  },
});

function App() {
  const [showCookieBanner, setShowCookieBanner] = useState(true);
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleCookiesAccepted = () => {
    console.log('Cookies aceptadas');
    setShowCookieBanner(false);
  };

  const handleCookiesRejected = () => {
    console.log('Cookies rechazadas');
    setShowCookieBanner(false);
  };

  const handleLogin = (username) => {
    setLoggedInUser(username);
  };

  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        {/* <Navigation /> */}
        <BasicExample/>
        {showCookieBanner && <CookieBanner onAccept={handleCookiesAccepted} onReject={handleCookiesRejected} />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/padres" element={<Padres />} />
          <Route path="padres/ayuda" element={<Ayuda />} />
          <Route path="padres/proceso" element={<Proceso />} />
          <Route path="padres/encuentro" element={<EncuentroRoot />} />
          <Route path="padres/legal" element={<Legal />} />
          <Route path="subrogante" element={<SubroganteRoot />} />
          <Route path="subrogante/proceso" element={<SubroProcesoRoot />} />
          <Route path="subrogante/aplicacion" element={<SubroAplicacionRoot />} />
          <Route path="subrogante/screening" element={<SubroScreeningRoot />} />
          <Route path="padres/formulario" element={<FormPadresRoot />} />
          <Route path="subrogante/formulario" element={<FormSubroRoot />} />
          <Route path="/AcuerdoPrivacidad" element={<AcuerdoPrivacidad />} /> 

          <Route path="/SystemAdminLog" element={<Login onLogin={handleLogin} />} />
          <Route path="/sistemaAdmin" element={<SystemHomeRoot />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        <WppFloat />
        <Footer />
      </BrowserRouter>
    </I18nextProvider>
  );
}

export default App;
