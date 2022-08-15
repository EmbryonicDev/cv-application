import React, { useState } from 'react';
import PersonalForm from './Components/PersonalForm';
import PersonalDiv from './Components/PersonalDiv';
import EducationForm from './Components/EducationForm';
import EducationDiv from './Components/EducationDiv';
import './index.css';
import uniqid from 'uniqid';
import ExperienceForm from './Components/ExperienceForm';
import ExperienceDiv from './Components/ExperienceDiv';
import { PersonalCv } from './Components/PersonalCv';
import ExperienceCv from './Components/ExperienceCv';

function App() {
  const [personalData, setPersonalData] = useState({
    firstName: '',
    lastName: '',
    profession: '',
    email: '',
    tel: '',
    address: '',
    website: '',
    display: false
  });
  const [educationData, setEducationData] = useState({
    schoolName: '',
    titleOfStudy: '',
    country: '',
    studyDate: '',
    id: uniqid(),
    edit: false
  });
  const [educationArr, setEducationArr] = useState([]);
  const [experienceData, setExperienceData] = useState({
    workName: '',
    workTitle: '',
    country: '',
    jobTasks: '',
    startDate: '',
    endDate: '',
    id: uniqid(),
    edit: false
  });
  const [experienceArr, setExperienceArr] = useState([]);
  const [showCv, setShowCv] = useState(false);

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

  function editPersonal() {
    setPersonalData(prevState => {
      return ({
        ...prevState,
        display: false
      })
    })
  }

  function clearEducation() {
    setEducationData({
      schoolName: '',
      titleOfStudy: '',
      studyDate: '',
      country: '',
      id: uniqid(),
      edit: false,
    })
  }

  function submitEducation(e) {
    e.preventDefault();
    setEducationArr(prevState => prevState.concat(educationData));
    clearEducation();
  }

  function resubmitEducation(id, event) {
    event.preventDefault()
    setEducationArr(prevState => prevState.map(obj => {
      return obj.id === id ?
        {
          schoolName: educationData.schoolName,
          titleOfStudy: educationData.titleOfStudy,
          studyDate: educationData.studyDate,
          country: educationData.country,
          id: id,
          edit: false
        } :
        obj
    }));
    clearEducation();
  }

  function editArr(id, arr, setData) {
    const editObj = arr.filter(obj => obj.id === id);
    setData(editObj[0]);
    setData(prevState => {
      return {
        ...prevState,
        edit: true
      }
    })
  }

  function deleteArrValue(id, arr, setData) {
    setData(arr.filter(value => value.id !== id))
  }

  function clearExperience() {
    setExperienceData({
      workName: '',
      workTitle: '',
      jobTasks: '',
      country: '',
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

  function resubmitExperience(id, event) {
    event.preventDefault()
    setExperienceArr(prevState => prevState.map(obj => {
      return obj.id === id ?
        {
          workName: experienceData.workName,
          workTitle: experienceData.workTitle,
          country: experienceData.country,
          jobTasks: experienceData.jobTasks,
          startDate: experienceData.startDate,
          endDate: experienceData.endDate,
          id: id,
          edit: false
        } :
        obj
    }));
    clearExperience();
  }

  function toggleCv() {
    setShowCv(prevState => !prevState)
  }

  const educationElmts = educationArr.map(el => {
    const index = educationArr.findIndex(x => x.id === el.id)
    return (
      <EducationDiv
        school={el.schoolName}
        title={el.titleOfStudy}
        country={el.country}
        date={el.studyDate}
        index={index + 1}
        key={el.id}
        edit={() => editArr(el.id, educationArr, setEducationData)}
        remove={() => deleteArrValue(el.id, educationArr, setEducationArr)}
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
        country={el.country}
        startDate={el.startDate}
        endDate={el.endDate}
        index={index + 1}
        key={el.id}
        edit={() => editArr(el.id, experienceArr, setExperienceData)}
        remove={() => deleteArrValue(el.id, experienceArr, setExperienceArr)}
      />
    )
  });

  const experienceCvDivs = experienceArr.map(el => {
    return (
      <ExperienceCv
        workName={el.workName}
        workTitle={el.workTitle}
        jobTasks={el.jobTasks}
        country={el.country}
        startDate={el.startDate}
        endDate={el.endDate}
        key={el.id}
      />
    )
  })

  return (
    <div className="App">
      <button id="toggleCv" onClick={toggleCv}>{showCv ? 'Edit CV' : 'Show CV'}</button>
      {
        showCv &&
        <div id="showCv">
          <PersonalCv
            personalData={personalData}
          />
          <h2 className="cvHeading">Work Experience</h2>
          <div className="experienceCvDiv">
            {experienceCvDivs}
          </div>
        </div>
      }
      {
        !showCv &&
        <div id="editInfo">
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
            <PersonalDiv
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
            onSubmit={
              !experienceData.edit ?
                submitExperience :
                (event) => resubmitExperience(experienceData.id, event)
            }
          />
          {experienceElmts}
        </div>
      }
    </div >
  );
}

export default App;
