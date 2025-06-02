import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

class NewsMarquee extends Component {
  componentDidMount() {
    // Inicia la animación de la marquesina aquí
  }

  componentWillUnmount() {
    // Detén la animación cuando el componente se desmonte
  }

  render() {
    const { t } = this.props;

    return (
      <div className="marquee-container">
        <div className="marquee-content">
          <span>{t('marqueeText')}</span>
        </div>
      </div>
    );
  }
}

export default withTranslation()(NewsMarquee);
