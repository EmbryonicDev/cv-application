import React, { useState } from 'react';
import PersonalForm from './Components/PersonalForm';
import PersonalPage from './Components/PersonalPage';
import EducationForm from './Components/EducationForm';
import EducationDiv from './Components/EducationDiv';
import './index.css';
import uniqid from 'uniqid';
import ExperienceForm from './Components/ExperienceForm';
import ExperienceDiv from './Components/ExperienceDiv';

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
    id: uniqid(),
    edit: false
  });
  const [educationArr, setEducationArr] = useState([]);
  const [experienceData, setExperienceData] = useState({
    workName: '',
    workTitle: '',
    jobTasks: '',
    startDate: '',
    endDate: '',
    id: uniqid(),
    edit: false
  });
  const [experienceArr, setExperienceArr] = useState([]);

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
    } else if (dataType === 'experience') {
      setExperienceData((prevState) => {
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

  function clearEducation() {
    setEducationData({
      schoolName: '',
      titleOfStudy: '',
      studyDate: '',
      id: uniqid(),
      edit: false,
    })
  }

  function submitEducation(e) {
    e.preventDefault();
    setEducationArr(prevState => prevState.concat(educationData));
    clearEducation();
  }

  function editEducation(id) {
    const editObj = educationArr.filter(obj => obj.id === id);
    setEducationData(editObj[0]);
    setEducationData(prevState => {
      return {
        ...prevState,
        edit: true
      }
    })
  }

  function resubmitEducation(id, event) {
    event.preventDefault()
    setEducationArr(prevState => prevState.map(obj => {
      return obj.id === id ?
        {
          ...obj,
          schoolName: educationData.schoolName,
          titleOfStudy: educationData.titleOfStudy,
          studyDate: educationData.studyDate,
          id: id,
          edit: false
        } :
        obj
    }));
    clearEducation();
  }

  function clearExperience() {
    setExperienceData({
      workName: '',
      workTitle: '',
      jobTasks: '',
      startDate: '',
      endDate: '',
      id: uniqid(),
      edit: false
    })
  }

  function submitExperience(e) {
    e.preventDefault();
    setExperienceArr(prevState => prevState.concat(experienceData));
    clearExperience();
  }

  function editExperience(id) {
    const editObj = experienceArr.filter(obj => obj.id === id);
    setExperienceData(editObj[0]);
    setExperienceData(prevState => {
      return {
        ...prevState,
        edit: true
      }
    })
  }

  function editPersonal() {
    setPersonalData(prevState => {
      return ({
        ...prevState,
        display: false
      })
    })
  }

  const educationElmts = educationArr.map(el => {
    const index = educationArr.findIndex(x => x.id === el.id)
    return (
      <EducationDiv
        school={el.schoolName}
        title={el.titleOfStudy}
        date={el.studyDate}
        index={index + 1}
        key={el.id}
        edit={() => editEducation(el.id)}
      />
    )
  });

  const experienceElmts = experienceArr.map(el => {
    const index = experienceArr.findIndex(x => x.id === el.id);
    return (
      <ExperienceDiv
        workName={el.workName}
        workTitle={el.workTitle}
        jobTasks={el.jobTasks}
        startDate={el.startDate}
        endDate={el.endDate}
        index={index + 1}
        key={el.id}
        edit={() => editExperience(el.id)}
      />
    )
  })

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
          edit={editPersonal}
        />
      }
      <EducationForm
        data={educationData}
        handleChange={handleChange}
        onSubmit={
          !educationData.edit ?
            submitEducation :
            (event) => resubmitEducation(educationData.id, event)
        }
      />
      {
        educationArr.length > 0 &&
        educationElmts
      }
      <ExperienceForm
        data={experienceData}
        handleChange={handleChange}
        submitExperience={submitExperience}
      />
      {experienceElmts}
    </div>
  );
}

export default App;
