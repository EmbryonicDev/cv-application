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

  function submitPersonal(e) {
    e.preventDefault();
    setPersonalData(prevState => {
      return ({
        ...prevState,
        display: true
      })
    })
  }

  console.log(personalData);

  return (
    <div className="App">
      <PersonalForm
        data={personalData}
        handleChange={handleChange}
        submitPersonal={submitPersonal}
      />
    </div>
  );
}

export default App;
