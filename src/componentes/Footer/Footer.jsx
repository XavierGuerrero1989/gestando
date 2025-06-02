import React from "react";
import { Link } from "react-router-dom";
import backgroundFooter from "../../imgs/fondoFooter.png";
import Logo from "../../imgs/logo.png";
import IG from "../../imgs/iglogo.png";
import EmailLogo from "../../imgs/emailLogo.png";
import { useTranslation } from 'react-i18next';

function Footer() {

  const { t } = useTranslation();

  return (
    <footer className="footer" style={{ 
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url(${backgroundFooter})`,
        backgroundSize: 'auto',
      }}>
      <div className="container">
        <div className="row">
          {/* Columna 1 */}
          <div className="col-md-4 footer-col1">
            {/* Logo */}
            <img src={Logo} alt="Logo" className="footer-logo" />

            {/* Link a Políticas de Privacidad */}
            <Link to="/AcuerdoPrivacidad" className="footer-link">
            {t('footerAcuerdo')}
            </Link>

            {/* Logo que completarás después */}
            <div>
              <a href="https://www.instagram.com/gestando.gs?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="footer-ig">
              <img src={IG} alt="Placeholder Logo" className="footer-ig" />
              </a>
              <a href="mailto:info@gestandogs.com" className="footer-ig">
                <img src={EmailLogo} alt="Placeholder Logo" className="footer-ig" />
              </a>
            </div>
            


            
          </div>

          {/* Columna 2 */}
          <div className="col-md-4 footer-col2">
            {/* Título Padres */}
            <h5 className="footer-title">{t('navTop1')}</h5>

            {/* Links para Padres */}
            <Link to="/padres" className="footer-link">
            {t('navTop1-1')}
            </Link>
            <Link to="/padres/ayuda" className="footer-link">
            {t('navTop1-2')}
            </Link>
            <Link to="/padres/proceso" className="footer-link">
            {t('navTop1-3')}
            </Link>
            <Link to="/padres/encuentro" className="footer-link">
            {t('navTop1-4')}
            </Link>
            
          </div>

          {/* Columna 3 */}
          <div className="col-md-4 footer-col3">
            {/* Título Subrogante */}
            <h5 className="footer-title">{t('navTop2')}</h5>

            {/* Links para Subrogante */}
            <Link to="/subrogante" className="footer-link">
            {t('navTop2-1')}
            </Link>
            <Link to="/subrogante/proceso" className="footer-link">
            {t('navTop2-2')}
            </Link>
            <Link to="/subrogante/aplicacion" className="footer-link">
            {t('navTop2-3')}
            </Link>
            
          </div>
        </div>
        <div className="justify-content-center desarrollo-ctn">
          <h2 className="text-center desarrollo">{t('footerDesarrollo')} <a href="https://clickandwebpro.com/" target={"_blank"} className="desarrollo-link">Click & Web</a></h2>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
