import React, { useState } from 'react';
import PersonalForm from './Components/PersonalForm';
import PersonalPage from './Components/PersonalPage';
import EducationForm from './Components/EducationForm';

import './index.css';

function App() {
  const [personalData, setPersonalData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    tel: '',
    display: false
  });
  const [educationData, setEducationData] = useState({
    schoolName: '',
    titleOfStudy: '',
    studyDate: ''
  });
  const [educationArr, setEducationArr] = useState([]);

  function handleChange(dataType, event) {
    const { name, value } = event.target;
    if (dataType === 'personal') {
      setPersonalData((prevState) => {
        return {
          ...prevState,
          [name]: value
        };
      });
    } else if (dataType === 'education') {
      setEducationData((prevState) => {
        return {
          ...prevState,
          [name]: value
        };
      });
    }
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

  function submitEducation(e) {
    e.preventDefault();
    console.log('Education Submitted')
  }

  // console.log(personalData);

  return (
    <div className="App">
      {
        !personalData.display &&
        <PersonalForm
          data={personalData}
          handleChange={handleChange}
          submitPersonal={submitPersonal}
        />
      }
      {
        personalData.display &&
        <PersonalPage
          personalData={personalData}
        />
      }
      <EducationForm
        data={educationData}
        handleChange={handleChange}
        submitEducation={submitEducation}
      />
    </div>
  );
}

export default App;
