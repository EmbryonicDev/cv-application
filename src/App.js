import React, { useState } from 'react';
import PersonalForm from './Components/PersonalForm';
import PersonalPage from './Components/PersonalPage';
import EducationForm from './Components/EducationForm';
import EducationDiv from './Components/EducationDiv';
import './index.css';
import uniqid from 'uniqid';
import ExperienceForm from './Components/ExperienceForm';

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
    studyDate: '',
    id: uniqid()
  });
  const [educationArr, setEducationArr] = useState([]);
  const [experienceData, setExperienceData] = useState({
    workName: '',
    workTitle: '',
    jobTasks: '',
    startDate: '',
    endDate: '',
  })

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
    setEducationArr(prevState => prevState.concat(educationData));
    setEducationData({
      schoolName: '',
      titleOfStudy: '',
      studyDate: '',
      id: uniqid()
    })
  }

  console.log(educationArr)
  // console.log(personalData);

  const educationElmts = educationArr.map(el => {
    const index = educationArr.findIndex(x => x.id === el.id)
    return (
      <EducationDiv
        school={el.schoolName}
        title={el.titleOfStudy}
        date={el.studyDate}
        index={index + 1}
        key={el.id}
      />
    )
  });

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
      {
        educationArr.length > 0 &&
        educationElmts
      }
    </div>
  );
}

export default App;
