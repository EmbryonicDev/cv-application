import React, { useEffect, useState } from 'react';
import PersonalForm from './Components/PersonalForm';
import EducationForm from './Components/EducationForm';
import EducationDiv from './Components/EducationDiv';
import './index.css';
import uniqid from 'uniqid';
import ExperienceForm from './Components/ExperienceForm';
import ExperienceDiv from './Components/ExperienceDiv';
import { PersonalCv } from './Components/PersonalCv';
import ExperienceCv from './Components/ExperienceCv';
import EducationCv from './Components/EducationCv';
import Header from './Components/Header';

function App() {
  const [personalData, setPersonalData] = useState(JSON.parse(localStorage.getItem('personalData')) || {
    firstName: '',
    lastName: '',
    profession: '',
    email: '',
    tel: '',
    address: '',
    website: '',
  });
  const [educationData, setEducationData] = useState({
    schoolName: '',
    titleOfStudy: '',
    country: '',
    studyDate: '',
    id: uniqid(),
    edit: false
  });
  const [educationArr, setEducationArr] = useState(JSON.parse(localStorage.getItem('educationArr')) || []);
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
  const [experienceArr, setExperienceArr] = useState(JSON.parse(localStorage.getItem('experienceArr')) || []);
  const [showCv, setShowCv] = useState(false);

  useEffect(() => {
    localStorage.setItem('educationArr', JSON.stringify(educationArr));
  }, [educationArr]);

  useEffect(() => {
    localStorage.setItem('experienceArr', JSON.stringify(experienceArr));
  }, [experienceArr])

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
    localStorage.setItem('personalData', JSON.stringify(personalData))
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

  const educationCvDivs = educationArr.map(el => {
    return (
      <EducationCv
        school={el.schoolName}
        title={el.titleOfStudy}
        country={el.country}
        date={el.studyDate}
        key={el.id}
      />
    )
  })

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
      <Header
        toggleCv={toggleCv}
        showCv={showCv}
      />
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
          <h2 className="cvHeading">Education</h2>
          <div className="educationCvDiv">
            {educationCvDivs}
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
