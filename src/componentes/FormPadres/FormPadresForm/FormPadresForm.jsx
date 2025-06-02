import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import { format, parse } from 'date-fns';
import { useTranslation } from 'react-i18next';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { initializeApp } from "firebase/app";

const ParentApplicationForm = () => {

  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    fullName: '',
    gender: '',
    birthDate: '',
    email: '',
    phone: '',
    sexualOrientation: '',
    country: '',
    province: '',
    city: '',
    hasPartner: '',
    neededService: '',
    startTimeline: '',
    agencySelectionCriteria: '',
    howYouHeard: '',
    additionalQuestions: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Configuración para EmailJS (reemplaza con tus propias claves y detalles)
    const emailjsConfig = {
      serviceId: 'service_p31b87b',
      templateId: 'template_mqamulz',
      userId: 'rEd25JuCCJeo2Ktea',
    };

    // Obtén el elemento de formulario actual
    const form = e.target;

    // Envío del formulario a través de EmailJS
    emailjs.sendForm(emailjsConfig.serviceId, emailjsConfig.templateId, form, emailjsConfig.userId)
      .then((response) => {
        console.log('Formulario enviado con éxito:', response);
        // Mostrar SweetAlert después de enviar el formulario
        Swal.fire({
          title: t('padresFormSweetMsj1'),
          text: t('padresFormSweetMsj2'),
          icon: 'info',
        });
        // Limpiar el formulario después de enviar
        form.reset();
        // Reiniciar el estado del formulario
        setFormData({
          fullName: '',
          gender: '',
          birthDate: null,
          email: '',
          phone: '',
          sexualOrientation: '',
          country: '',
          province: '',
          city: '',
          hasPartner: '',
          neededService: '',
          startTimeline: '',
          agencySelectionCriteria: '',
          howYouHeard: '',
          additionalQuestions: '',
        });
      })
      .catch((error) => {
        console.error('Error al enviar el formulario:', error);
      });

    // Guardar los datos del formulario en la base de datos de Firestore
    const firebaseConfig = {
      apiKey: "AIzaSyD7B17PeE5lXxRCdiNN9MntUMDBNt49hFI",
        authDomain: "fertiform.firebaseapp.com",
        projectId: "fertiform",
        storageBucket: "fertiform.appspot.com",
        messagingSenderId: "1004257952697",
        appId: "1:1004257952697:web:4b3e360cba550e66242c68",
    };

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const formRef = collection(db, 'formResponsesPadres');
    addDoc(formRef, formData)
      .then((docRef) => {
        console.log('Documento agregado con ID: ', docRef.id);
      })
      .catch((error) => {
        console.error('Error al agregar documento: ', error);
      });
  };

  

  return (
    <div className='container'>
        <div className='row form-ctn'>
        <form onSubmit={handleSubmit} className='col-md-6'>
      <label className='input-form-element'>
        1) {t('padresForm1')} <br/>
        <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} />
      </label>
        <br/>
      <label className='input-form-element'>
        2) {t('padresForm2')} <br/>
        <select name="gender" value={formData.gender} onChange={handleChange}>
          <option value="">{t('padresForm2-1')}</option>
          <option value="masculino">{t('padresForm2-2')}</option>
          <option value="femenino">{t('padresForm2-3')}</option>
          <option value="transMasculino">{t('padresForm2-4')}</option>
          <option value="transFemenino">{t('padresForm2-5')}</option>
          <option value="noBinario">{t('padresForm2-6')}</option>
          <option value="otro">{t('padresForm2-7')}</option>
        </select>
      </label>
        <br/>
      <label className='input-form-element'>
        3) {t('padresForm3')}<br/>
        <input
              type="text"
              name="birthDate"
              placeholder="dd/mm/aaaa"
              value={formData.birthDate}
              onChange={handleChange}
            />
      </label>
<br/>
      <label className='input-form-element'>
        4) Email:<br/>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
<br/>
      <label className='input-form-element'>
        5) {t('padresForm5')} <br/>
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
      </label>
<br/>
      <label className='input-form-element'>
        6) {t('padresForm6')} <br/>
        <select name="sexualOrientation" value={formData.sexualOrientation} onChange={handleChange}>
          <option value="">{t('padresForm6-1')}</option>
          <option value="heterosexual">{t('padresForm6-2')}</option>
          <option value="homosexual">{t('padresForm6-3')}</option>
          <option value="bisexual">{t('padresForm6-4')}</option>
          <option value="otro">{t('padresForm6-5')}</option>
        </select>
      </label>
<br/>
      <label className='input-form-element'>
        7) {t('padresForm7')}<br/>
        <input type="text" name="country" value={formData.country} onChange={handleChange} />
      </label>
<br/>
      <label className='input-form-element'>
        8) {t('padresForm8')}<br/>
        <input type="text" name="province" value={formData.province} onChange={handleChange} />
      </label>
<br/>
      <label className='input-form-element'>
        9) {t('padresForm9')}<br/>
        <input type="text" name="city" value={formData.city} onChange={handleChange} />
      </label>
<br/>
      <label className='input-form-element'>
        10) {t('padresForm10')}<br/>
        <div>
          <input
            type="radio"
            id="siCompanero"
            name="hasPartner"
            value="si"
            checked={formData.hasPartner === 'si'}
            onChange={handleChange}
          />
          <label htmlFor="siCompanero">{t('padresForm10-1')}</label>
        </div>
        <div >
          <input
            type="radio"
            id="noCompanero"
            name="hasPartner"
            value="no"
            checked={formData.hasPartner === 'no'}
            onChange={handleChange}
          />
          <label htmlFor="noCompanero">{t('padresForm10-2')}</label>
        </div>
      </label>
<br/>
      <label className='input-form-element'>
        11) {t('padresForm11')}<br/>
        <select name="neededService" value={formData.neededService} onChange={handleChange} className="selectionFieldForm">
          <option value="">{t('padresForm11-1')}</option>
          <option value="subrogacionDonante">{t('padresForm11-2')}</option>
          <option value="soloSubrogacion">{t('padresForm11-3')}</option>
          <option value="traerPropioSubrogante">{t('padresForm11-4')}</option>
          <option value="noEstoySeguro">{t('padresForm11-5')}</option>
        </select>
      </label>
<br/>
      <label className='input-form-element'>
        12) {t('padresForm12')}
        <div>
          <input
            type="radio"
            id="inmediatamente"
            name="startTimeline"
            value="inmediatamente"
            checked={formData.startTimeline === 'inmediatamente'}
            onChange={handleChange}
          />
          <label htmlFor="inmediatamente">{t('padresForm12-1')}</label>
        </div>
        <div>
          <input
            type="radio"
            id="proximos6Meses"
            name="startTimeline"
            value="proximos6Meses"
            checked={formData.startTimeline === 'proximos6Meses'}
            onChange={handleChange}
          />
          <label htmlFor="proximos6Meses">{t('padresForm12-2')}</label>
        </div>
        <div>
          <input
            type="radio"
            id="proximoAno"
            name="startTimeline"
            value="proximoAno"
            checked={formData.startTimeline === 'proximoAno'}
            onChange={handleChange}
          />
          <label htmlFor="proximoAno">{t('padresForm12-3')}</label>
        </div>
        <div>
          <input
            type="radio"
            id="noEstoySeguroTiempo"
            name="startTimeline"
            value="noEstoySeguro"
            checked={formData.startTimeline === 'noEstoySeguro'}
            onChange={handleChange}
          />
          <label htmlFor="noEstoySeguroTiempo">{t('padresForm12-4')}</label>
        </div>
      </label>
<br/>
      <label className='input-form-element'>
        13) {t('padresForm13')} <br/>
        <select name="agencySelectionCriteria" value={formData.agencySelectionCriteria} onChange={handleChange}  className="selectionFieldForm">
          <option value="">{t('padresForm13-1')}</option>
          <option value="experienciaYServicios">{t('padresForm13-2')}</option>
          <option value="tiempoParaEncontrar">{t('padresForm13-3')}</option>
          <option value="costos">{t('padresForm13-4')}</option>
          <option value="ubicacion">{t('padresForm13-5')}</option>
          <option value="otro">{t('padresForm13-6')}</option>
        </select>
      </label>
<br/>
      <label className='input-form-element'>
        14) {t('padresForm14')}<br/>
        <select name="howYouHeard" value={formData.howYouHeard} onChange={handleChange}>
          <option value="">{t('padresForm14-1')}</option>
          <option value="instagram">{t('padresForm14-2')}</option>
          <option value="paginaWeb">{t('padresForm14-3')}</option>
          <option value="google">{t('padresForm14-4')}</option>
          <option value="recomendado">{t('padresForm14-5')}</option>
          <option value="otros">{t('padresForm14-6')}</option>
        </select>
      </label>

      <label className='input-form-element'>
        15) {t('padresForm15')}<br/>
        <textarea
          name="additionalQuestions"
          value={formData.additionalQuestions}
          onChange={handleChange}
          className="inputComent"
        />
      </label>
<br/>
      <button type="submit" className='submit-button'>{t('padresFormBotonEnviar')}</button>
    </form>
    </div>
    </div>
    
    
  );
};

export default ParentApplicationForm;
