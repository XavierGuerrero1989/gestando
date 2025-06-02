import React from 'react';
import FormPadresHero from '../FormPadresHero/FormPadresHero';
import ParentApplicationForm from '../FormPadresForm/FormPadresForm';

function FormPadresRoot() {
    return (
      <div>
          <FormPadresHero />
          <ParentApplicationForm />
      </div>
    );
  }
  
  export default FormPadresRoot;