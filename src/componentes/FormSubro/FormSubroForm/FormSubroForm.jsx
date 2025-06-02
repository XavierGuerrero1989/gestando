import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import { useTranslation } from 'react-i18next';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { initializeApp } from "firebase/app";

const SurrogacyApplicationForm = () => {
  const { t } = useTranslation();

  const initialFormData = {
    fullName: '',
    email: '',
    agencySelectionCriteria: '',
    previousApplication: '',
    phoneNumber: '',
    country: '',
    province: '',
    city: '',
    birthDate: '',
    referralSource: '',
    reasonToBecomeSurrogate: '',
    previousPregnancy: '',
    previousPregnancyDetails: '',
    hadMiscarriage: '',
    currentPregnancy: '',
    previousSurrogacyExperience: '',
    height: '',
    weight: '',
    medications: '',
    healthHistory: [],
    maritalStatus: '',
    contraceptiveMethod: '',
    partnerPresence: '',
    criminalConviction: '',
    legalObligations: '',
    readinessForSurrogacy: '',
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    if (e.target.type === 'checkbox') {
      const isChecked = e.target.checked;
      const value = e.target.value;

      setFormData((prevFormData) => ({
        ...prevFormData,
        healthHistory: [...prevFormData.healthHistory, value],
      }));
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailjsConfig = {
      serviceId: 'service_p31b87b',
      templateId: 'template_v1q5ofp',
      userId: 'rEd25JuCCJeo2Ktea',
    };

    const form = e.target;

    try {
      const response = await emailjs.sendForm(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        form,
        emailjsConfig.userId
      );

      console.log('Formulario enviado con éxito:', response);
      Swal.fire({
        title: t('padresFormSweetMsj1'),
        text: t('padresFormSweetMsj2'),
        icon: 'info',
      });

      form.reset();
      setFormData(initialFormData);

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
      const firestore = getFirestore(app);

      await addDoc(collection(firestore, 'formResponses'), formData);
      console.log('Datos del formulario guardados en Firestore');
    } catch (error) {
      console.error('Error al enviar o guardar el formulario:', error);
    }
  };
  return (
    <div className="container formCtnBig">
    <div className="row">
    <div className="col-md-6">
    <form onSubmit={handleSubmit}>
      <label>
        1) {t('subroForm1')} <br/>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className="inputField"
        />
      </label>
<br/> <br/>
      <label>
        2) Email: <br/>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="inputField"
        />
      </label>
      <br/> <br/>
      <label>
        3) {t('subroForm3')} <br/>
        <select
          name="agencySelectionCriteria"
          value={formData.agencySelectionCriteria}
          onChange={handleChange}
          className="selectionFieldForm"
        >
          <option value="">{t('subroForm3-1')}</option>
          <option value="Experiencia de la agencia y servicios ofrecidos">
          {t('subroForm3-2')}
          </option>
          <option value="Tiempo para encontrar un subrogante">
          {t('subroForm3-3')}
          </option>
          <option value="Costos">{t('subroForm3-4')}</option>
          <option value="Ubicación">{t('subroForm3-5')}</option>
          <option value="Otro">{t('subroForm3-6')}</option>
        </select>
      </label>
      <br/> <br/>
      {/* Pregunta 4 */}
      <label>
        4) {t('subroForm4')} <br/>
        <select
          name="previousApplication"
          value={formData.previousApplication}
          onChange={handleChange}
        >
          <option value="yes">{t('subroForm4-1')}</option>
          <option value="no">{t('subroForm4-2')}</option>
          
        </select>
      </label>
      <br/> <br/>
      {/* Pregunta 5 */}
      <label>
        5) {t('subroForm5')} <br/>
        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          className="inputField"
        />
      </label>
      <br/> <br/>
      {/* Pregunta 6 */}
      <label>
        6) {t('subroForm6')} <br/>
        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChange}
          className="inputField"
        />
      </label>
      <br/> <br/>
      {/* Pregunta 7 */}
      <label>
        7) {t('subroForm7')} <br/>
        <input
          type="text"
          name="province"
          value={formData.province}
          onChange={handleChange}
          className="inputField"
        />
      </label>
      <br/> <br/>
      {/* Pregunta 8 */}
      <label>
        8) {t('subroForm8')} <br/>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          className="inputField"
        />
      </label>
      <br/> <br/>
      {/* Pregunta 9 */}
      <label>
        9) {t('subroForm9')} <br/>
        <input
          type="date"
          name="birthDate"
          value={formData.birthDate}
          onChange={handleChange}
        />
      </label>
      <br/> <br/>

      <label>
        10) {t('subroForm10')} <br/>
        <input
          type="text"
          name="healthInsurance"
          value={formData.healthInsurance}
          onChange={handleChange}
          placeholder="Ingresa aquí"
          className="inputField"
        />
      </label>
<br/> <br/>
      {/* Pregunta 10 */}
      <label>
        11) {t('subroForm11')}<br/> 
        <select
          name="referralSource"
          value={formData.referralSource}
          onChange={handleChange}
        >
          <option value="instagram">{t('subroForm11-1')}</option>
          <option value="web">{t('subroForm11-2')}</option>
          <option value="google">{t('subroForm11-3')}</option>
          <option value="recommendation">{t('subroForm11-4')}</option>
          <option value="ovodonacion">{t('subroForm11-5')}</option>
          <option value="other">{t('subroForm11-6')}</option>
        </select>
      </label>
      <br/> <br/>
      {/* Pregunta 11 */}
      <label>
        12) {t('subroForm12')}<br/>
        <textarea
          name="reasonToBecomeSurrogate"
          value={formData.reasonToBecomeSurrogate}
          onChange={handleChange}
          className="inputField"
        />
      </label>
      <br/> <br/>
      {/* Pregunta 12 */}
      <label>
        13) {t('subroForm13')} <br/>
        <select
          name="previousPregnancy"
          value={formData.previousPregnancy}
          onChange={handleChange}
          className="inputField"
        >
          <option value="yes">{t('subroForm13-1')}</option>
          <option value="no">{t('subroForm13-2')}</option>
        </select>
      </label>
      <br/> <br/>
      <label>
        13) A) {t('subroForm13a')}<br/>
        <input
          type="text"
          name="previousPregnancyDetails"
          value={formData.previousPregnancyDetails}
          onChange={handleChange}
          placeholder="Ingrese los detalles aquí"
          className="inputField"
        />
      </label>
 <br/> <br/>
      <label>
  13) B) {t('subroForm13b')}
  <div>
    <label>
      <input
        type="radio"
        name="hadMiscarriage"
        value="Sí"
        onChange={handleChange}
      />
      {t('subroForm13b-1')}
    </label>
  </div>
  <div>
    <label>
      <input
        type="radio"
        name="hadMiscarriage"
        value="No"
        onChange={handleChange}
      />
      {t('subroForm13b-2')}
    </label>
  </div>
</label>
      <br/> <br/>
      {/* Pregunta 13 */}
      <label>
        14) {t('subroForm14')}<br/> 
        <select
          name="currentPregnancy"
          value={formData.currentPregnancy}
          onChange={handleChange}
        >
          <option value="yes">{t('subroForm14-1')}</option>
          <option value="no">{t('subroForm14-2')}</option>
        </select>
      </label>
      <br/> <br/>
      {/* Pregunta 14 */}
      <label>
        15) {t('subroForm15')}<br/>
        <select
          name="previousSurrogacyExperience"
          value={formData.previousSurrogacyExperience}
          onChange={handleChange}
        >
          <option value="yes">{t('subroForm14-1')}</option>
          <option value="no">{t('subroForm14-2')}</option>
        </select>
      </label>
      <br/> <br/>
      {/* Pregunta 15 */}
      <label>
        16) {t('subroForm16')} <br/>
        <input
          type="text"
          name="height"
          value={formData.height}
          onChange={handleChange}
        />
      </label>
      <br/> <br/>
      {/* Pregunta 16 */}
      <label>
        17) {t('subroForm17')}<br/>
        <input
          type="text"
          name="weight"
          value={formData.weight}
          onChange={handleChange}
        />
      </label>

      {formData.bmi && (
        <div>
          <strong>IMC:</strong> {formData.bmi}
        </div>
      )}
      <br/> <br/>
      {/* Pregunta 17 */}
      <label>
        18) {t('subroForm18')} <br/>
        <textarea
          name="medications"
          value={formData.medications}
          onChange={handleChange}
          className="inputField"
        />
      </label>

      <br/><br/>

      <label>
  19) {t('subroForm19')} <br/>
  <div>
    <label>
      <input
        type="checkbox"
        name="healthHistory"
        value="Tuberculosis"
        onChange={handleChange}
      />
      {t('subroForm19-1')}
    </label>
  </div>
  <div>
    <label>
      <input
        type="checkbox"
        name="healthHistory"
        value="Diabetes"
        onChange={handleChange}
      />
      {t('subroForm19-2')}
    </label>
  </div>
  <div>
    <label>
      <input
        type="checkbox"
        name="healthHistory"
        value="Enfermedad Renal"
        onChange={handleChange}
      />
      {t('subroForm19-3')}
    </label>
  </div>
  <div>
    <label>
      <input
        type="checkbox"
        name="healthHistory"
        value="Infarto antes de los 50 años"
        onChange={handleChange}
      />
      {t('subroForm19-4')}
    </label>
  </div>
  <div>
    <label>
      <input
        type="checkbox"
        name="healthHistory"
        value="Fibrosis Quistica"
        onChange={handleChange}
      />
      {t('subroForm19-5')}
    </label>
  </div>
  <div>
    <label>
      <input
        type="checkbox"
        name="healthHistory"
        value="Neurofibromatosis"
        onChange={handleChange}
      />
      {t('subroForm19-6')}
    </label>
  </div>
  <div>
    <label>
      <input
        type="checkbox"
        name="healthHistory"
        value="Defectos Cardiacos Congenitos"
        onChange={handleChange}
      />
      {t('subroForm19-7')}
    </label>
  </div>
  <div>
    <label>
      <input
        type="checkbox"
        name="healthHistory"
        value="Hipertension"
        onChange={handleChange}
      />
      {t('subroForm19-8')}
    </label>
  </div>
  <div>
    <label>
      <input
        type="checkbox"
        name="healthHistory"
        value="Convulsiones"
        onChange={handleChange}
      />
      {t('subroForm19-9')}
    </label>
  </div>
  <div>
    <label>
      <input
        type="checkbox"
        name="healthHistory"
        value="Trastorno Bipolar"
        onChange={handleChange}
      />
      {t('subroForm19-10')}
    </label>
  </div>
  <div>
    <label>
      <input
        type="checkbox"
        name="healthHistory"
        value="Esquizofrenia"
        onChange={handleChange}
      />
      {t('subroForm19-11')}
    </label>
  </div>
  <div>
    <label>
      <input
        type="checkbox"
        name="healthHistory"
        value="Cataratas antes de los 40 años"
        onChange={handleChange}
      />
      {t('subroForm19-12')}
    </label>
  </div>
  <div>
    <label>
      <input
        type="checkbox"
        name="healthHistory"
        value="Artritis Reumatoidea"
        onChange={handleChange}
      />
      {t('subroForm19-13')}
    </label>
  </div>
  <div>
    <label>
      <input
        type="checkbox"
        name="healthHistory"
        value="Cancer"
        onChange={handleChange}
      />
      {t('subroForm19-14')}
    </label>
  </div>
  <div>
    <label>
      <input
        type="checkbox"
        name="healthHistory"
        value="Enfermedad Auto-inmune (Fibromialgia, Esclerosis multiple, Enfermedad de Crohn, etc)"
        onChange={handleChange}
      />
      {t('subroForm19-15')}
    </label>
  </div>
  <div>
    <label>
      <input
        type="checkbox"
        name="healthHistory"
        value="Trastorno de la coagulación sanguínea"
        onChange={handleChange}
      />
      {t('subroForm19-16')}
    </label>
  </div>
  <div>
    <label>
      <input
        type="checkbox"
        name="healthHistory"
        value="Más de 2 abortos espontáneos"
        onChange={handleChange}
      />
      {t('subroForm19-17')}
    </label>
  </div>
  <div>
    <label>
      <input
        type="checkbox"
        name="healthHistory"
        value="Otra"
        onChange={handleChange}
      />
      {t('subroForm19-18')}
    </label>
  </div>
  <div>
    <label>
      <input
        type="checkbox"
        name="healthHistory"
        value="Ninguna de las anteriores"
        onChange={handleChange}
      />
      {t('subroForm19-19')}
    </label>
  </div>
</label>
<br/> <br/>
<label>
  20) {t('subroForm20')} <br/>
  <select
    name="maritalStatus"
    onChange={handleChange}
  >
    <option value="Casada">{t('subroForm20-1')}</option>
    <option value="Comprometida">{t('subroForm20-2')}</option>
    <option value="En una relación (conviviendo)">{t('subroForm20-3')}</option>
    <option value="En una relación (viviendo separada)">{t('subroForm20-4')}</option>
    <option value="Soltera">{t('subroForm20-5')}</option>
    <option value="Divorciada (en proceso)">{t('subroForm20-6')}</option>
    <option value="Divorciada (finalizado)">{t('subroForm20-7')}</option>
  </select>
</label>
<br/><br/>
<label>
  20) B) {t('subroForm20b')} <br/>
  <input
    type="text"
    name="contraceptiveMethod"
    value={formData.contraceptiveMethod}
    onChange={handleChange}
    className="inputField"
    placeholder={t('subroForm20b-1')}
  />
</label>
<br/> <br/>
<label>
  21) {t('subroForm21')}<br/>
  <input
    type="radio"
    name="partnerPresence"
    value="Sí"
    onChange={handleChange}
  />
  {t('subroForm21-1')} <br/>
  <input
    type="radio"
    name="partnerPresence"
    value="No"
    onChange={handleChange}
  />
  {t('subroForm21-2')}
</label>
<br/> <br/>
<label>
  22) {t('subroForm22')}<br/>
  <input
    type="radio"
    name="criminalConviction"
    value="Sí"
    onChange={handleChange}
  />
  {t('subroForm21-1')}  <br/>
  <input
    type="radio"
    name="criminalConviction"
    value="No"
    onChange={handleChange}
  />
  {t('subroForm21-2')}
</label>
<br/> <br/>
<label>
  23) {t('subroForm23')} <br/>
  <input
    type="radio"
    name="legalObligations"
    value="Sí"
    onChange={handleChange}
  />
  {t('subroForm21-1')} <br/>
  <input
    type="radio"
    name="legalObligations"
    value="No"
    onChange={handleChange}
  />
  {t('subroForm21-2')}
</label>
<br/> <br/>
<label>
  24) {t('subroForm24')}<br/>
  <select
    name="readinessForSurrogacy"
    onChange={handleChange}
    className="selectionFieldForm"
  >
    <option value="Estoy lista Ahora">{t('subroForm24-1')}</option>
    <option value="Estoy interesada en realizarlo entre 3 y 6 meses.">{t('subroForm24-2')}</option>
    <option value="Estoy interesada en realizarlo en 6 meses o más.">{t('subroForm24-3')}</option>
    <option value="No estoy segura. Estoy buscando información">{t('subroForm24-4')}</option>
  </select>
</label>
<br/> <br/>


      <button type="submit" className='submit-button'>{t('padresFormBotonEnviar')}</button> <br/><br/>
    </form>
    </div>
    </div>
    </div>
  );
};

export default SurrogacyApplicationForm;
