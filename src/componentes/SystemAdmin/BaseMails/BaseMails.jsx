import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, query, getDocs, deleteDoc, doc } from 'firebase/firestore';
import Swal from 'sweetalert2';

const PatientList = () => {
  const [gestantes, setGestantes] = useState([]);
  const [padres, setPadres] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);

  useEffect(() => {
    const app = initializeApp({
      apiKey: "AIzaSyD7B17PeE5lXxRCdiNN9MntUMDBNt49hFI",
      authDomain: "fertiform.firebaseapp.com",
      projectId: "fertiform",
      storageBucket: "fertiform.appspot.com",
      messagingSenderId: "1004257952697",
      appId: "1:1004257952697:web:4b3e360cba550e66242c68",
    });
    const db = getFirestore(app);

    fetchPatients(db, 'formResponses', setGestantes);
    fetchPatients(db, 'formResponsesPadres', setPadres);
  }, []);

  const fetchPatients = async (db, collectionName, setState) => {
    const q = query(collection(db, collectionName));
    const querySnapshot = await getDocs(q);
    const patients = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    setState(patients);
  };

  const handlePatientClick = (patient) => {
    setSelectedPatient(patient);
  };

  const deletePatient = (patientId, collectionName) => {
    const db = getFirestore();
    Swal.fire({
      title: '¿Estás seguro?',
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, bórralo!'
    }).then((result) => {
      if (result.isConfirmed) {
        deleteDoc(doc(db, collectionName, patientId)).then(() => {
          Swal.fire(
            '¡Eliminado!',
            'El registro ha sido eliminado.',
            'success'
          );
          fetchPatients(db, collectionName, collectionName === 'formResponses' ? setGestantes : setPadres);
        }).catch(error => {
          console.error("Error removing document: ", error);
        });
      }
    });
  };

  return (
    <div style={{ display: 'flex', width: '100%' }}>
      <div className="patientList-column">
        <h2>Gestantes</h2>
        <ul>
          {gestantes.map((patient) => (
            <li key={patient.id} 
                className={`patientList-item ${selectedPatient && selectedPatient.id === patient.id ? 'patientList-selected' : ''}`} 
                onClick={() => handlePatientClick(patient)}>
              {patient.fullName}
              <span className="delete-icon" onClick={(e) => {
                e.stopPropagation();
                deletePatient(patient.id, 'formResponses');
              }}>Borrar</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="patientList-column">
        <h2>Padres Intencionales</h2>
        <ul>
          {padres.map((patient) => (
            <li key={patient.id} 
                className={`patientList-item ${selectedPatient && selectedPatient.id === patient.id ? 'patientList-selected' : ''}`} 
                onClick={() => handlePatientClick(patient)}>
              {patient.fullName}
              <span className="delete-icon" onClick={(e) => {
                e.stopPropagation();
                deletePatient(patient.id, 'formResponsesPadres');
              }}>Borrar</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="patientList-column patientList-info">
        <h2>Información del Paciente</h2>
        {selectedPatient && (
          <div>
            {Object.entries(selectedPatient).map(([key, value]) => (
              key !== 'id' && <p key={key}>{`${key}: ${value}`}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PatientList;
