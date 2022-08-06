export default function EducationForm(props) {
  const { submitEducation, handleChange, data } = props;

  return (
    <div className="educationForm">
      <form action="#" onSubmit={submitEducation}>
        <p className="personalInput">
          <label htmlFor="schoolName">School / Institute Name:</label>
          <input
            type="text"
            id="schoolName"
            name="schoolName"
            value={data.schoolName}
            onChange={(event) => handleChange('education', event)}
          />
        </p>
        <p className="personalInput">
          <label htmlFor="titleOfStudy">Title of Study:</label>
          <input
            type="text"
            id="titleOfStudy"
            name="titleOfStudy"
            value={data.titleOfStudy}
            onChange={(event) => handleChange('education', event)}
          />
        </p>
        <p className="personalInput">
          <label htmlFor="studyDate">Completion Date:</label>
          <input
            type="date"
            id="studyDate"
            name="studyDate"
            value={data.studyDate}
            onChange={(event) => handleChange('education', event)}
          />
        </p>
        <button id="personalSubmit" type="submit">
          Submit
        </button>
      </form>
    </div>
  )
}