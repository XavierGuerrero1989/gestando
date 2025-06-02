import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logoimg from "../../imgs/logo.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import spain from '../../../src/imgs/espana.png';
import ingles from '../../../src/imgs/reino-unido.png';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import { useTranslation } from 'react-i18next';

import LoginAdm from '../../imgs/personas.png';


function BasicExample() {

  const { t } = useTranslation();

  return (
    <Navbar sticky="top" expand="lg" className="bg-body-tertiary" style={{ margin: '0 auto' }}>
      <Container>
        <Navbar.Brand href="/"><img src={logoimg} alt="imagen de logo" className='navImg' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='ctnNavComp'>
          <Nav className="me-auto navLinksCtn">
            <NavDropdown title={t('navTop1')} id="basic-nav-dropdown">
              <NavDropdown.Item href="/padres" className='linkElement'>{t('navTop1-1')}</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/padres/ayuda" className='linkElement'>
              {t('navTop1-2')}
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/padres/proceso" className='linkElement'>{t('navTop1-3')}</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/padres/encuentro" className='linkElement'>
              {t('navTop1-4')}
              </NavDropdown.Item>
              
              
            </NavDropdown>
            <NavDropdown title={t('navTop2')} id="basic-nav-dropdown">
              <NavDropdown.Item href="/subrogante" className='linkElement'>{t('navTop2-1')}</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/subrogante/proceso" className='linkElement'>
              {t('navTop2-2')}
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/subrogante/aplicacion" className='linkElement'>{t('navTop2-3')}</NavDropdown.Item>
              
            </NavDropdown>
            <Link to="padres/formulario">
              <Button variant="primary" className="custom-button custom-button-1">
              {t('botonPadreForm')}
              </Button>
            </Link>
            <Link to="/subrogante/formulario">
              <Button variant="primary" className="custom-button custom-button-1">
              {t('botonSubroForm')}
              </Button>
            </Link>

            <Link to="/SystemAdminLog">
              
              <img src={LoginAdm} alt="" className='loginBoton'/>
              
            </Link>
            <div>
                <LanguageSelector/>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;