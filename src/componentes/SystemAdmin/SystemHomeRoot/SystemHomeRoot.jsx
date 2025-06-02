import React from 'react';
import SecondaryNavBar from '../SystemNav/SystemNav';
import PatientList from '../BaseMails/BaseMails';



function SystemHomeRoot() {
    return (
      <div className='systemRootCtn'>
        <SecondaryNavBar />
        <PatientList />
      </div>
          
      
    );
  }
  
  export default SystemHomeRoot;