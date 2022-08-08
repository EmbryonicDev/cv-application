export default function ExperienceForm(props) {
  const { submitExperience, data, handleChange } = props
  return (
    <div className="ExperienceForm">
      <form action="#" onSubmit={submitExperience}>
        <p className="inputSet">
          <label htmlFor="workName">Company Name: </label>
          <input
            type="text"
            id='workName'
            name='workName'
            value={data.workName}
            onChange={(event) => handleChange('experience', event)}
          />
        </p>
        <p className="inputSet">
          <label htmlFor="workTitle">Job Title: </label>
          <input
            type="text"
            id='workTitle'
            name='workTitle'
            value={data.workTitle}
            onChange={(event) => handleChange('experience', event)}
          />
        </p>
        <p className="inputSet">
          <label htmlFor="jobTasks">Main Tasks of Job: </label>
          <textarea
            cols="30"
            rows="10"
            type="textArea"
            id='jobTasks'
            name='jobTasks'
            value={data.jobTasks}
            onChange={(event) => handleChange('experience', event)}
          >
          </textarea>
        </p>
        <p className="inputSet">
          <label htmlFor="startDate">Start Date: </label>
          <input
            type="date"
            id='startDate'
            name='startDate'
            value={data.startDate}
            onChange={(event) => handleChange('experience', event)}
          />
        </p>
        <p className="inputSet">
          <label htmlFor="endDate">End Date: </label>
          <input
            type="date"
            id='endDate'
            name='endDate'
            value={data.endDate}
            onChange={(event) => handleChange('experience', event)}
          />
        </p>
        <button className="submitBtn" type="submit">
          Submit
        </button>
      </form>
    </div>
  )
}