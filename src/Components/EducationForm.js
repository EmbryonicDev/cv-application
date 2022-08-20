export default function EducationForm(props) {
  const { onSubmit, handleChange, data } = props;


  return (
    <div id="educationForm">
      <h1 className="formHeading">Education</h1>
      <form action="#" onSubmit={onSubmit}
      >
        <p className="inputSet">
          <label htmlFor="schoolName">School / Institute:</label>
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
          <label htmlFor="country">Country:</label>
          <input
            type="text"
            id="country"
            name="country"
            value={data.country}
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