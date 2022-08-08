export default function EducationForm(props) {
  const { submitEducation, handleChange, data } = props;

  return (
    <div className="educationForm">
      <h1 className="formHeading">Education</h1>
      <form action="#" onSubmit={submitEducation}>
        <p className="inputSet">
          <label htmlFor="schoolName">School / Institute Name:</label>
          <input
            type="text"
            id="schoolName"
            name="schoolName"
            value={data.schoolName}
            onChange={(event) => handleChange('education', event)}
          />
        </p>
        <p className="inputSet">
          <label htmlFor="titleOfStudy">Title of Study:</label>
          <input
            type="text"
            id="titleOfStudy"
            name="titleOfStudy"
            value={data.titleOfStudy}
            onChange={(event) => handleChange('education', event)}
          />
        </p>
        <p className="inputSet">
          <label htmlFor="studyDate">Completion Date:</label>
          <input
            type="date"
            id="studyDate"
            name="studyDate"
            value={data.studyDate}
            onChange={(event) => handleChange('education', event)}
          />
        </p>
        <button className="submitBtn" type="submit">
          Submit
        </button>
      </form>
    </div>
  )
}