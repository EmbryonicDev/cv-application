import React, { useState } from 'react';
import PersonalForm from './Components/PersonalForm';
import './index.css';

function App() {
  const [personalData, setPersonalData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    tel: '',
    display: false
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setPersonalData((prevState) => {
      return {
        ...prevState,
        [name]: value
      };
    });
  }
  console.log(personalData);

  return (
    <div className="App">
      <PersonalForm
        data={personalData}
        handleChange={handleChange}
      />
    </div>
  );
}

export default App;
