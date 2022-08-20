export default function ExperienceDiv(props) {
  const { workName, workTitle, country, jobTasks, startDate, endDate, index, edit, remove } = props

  console.log(country)

  return (
    <div className="experienceDiv">
      <h1 className='categoryHeading'>Work History {index}</h1>
      <div className="dataWrap">
        <h4 className="pageLabel">Company Name: </h4>
        <h4 className="pageData">{workName}</h4>
      </div>
      <div className="dataWrap">
        <h4 className="pageLabel">Job Title: </h4>
        <h4 className="pageData">{workTitle}</h4>
      </div>
      <div className="dataWrap">
        <h4 className="pageLabel">Country: </h4>
        <h4 className="pageData">{country}</h4>
      </div>
      <div className="dataWrap">
        <h4 className="pageLabel">Main Tasks of Job: </h4>
        <h4 className="pageData">{jobTasks}</h4>
      </div>
      <div className="dataWrap">
        <h4 className="pageLabel">Start Date: </h4>
        <h4 className="pageData"> {startDate}</h4>
      </div>
      <div className="dataWrap">
        <h4 className="pageLabel">End Date: </h4>
        <h4 className="pageData"> {endDate}</h4>
      </div>
      <button className="editBtn" onClick={edit}>↑ Edit ↑</button>
      <button className="deleteBtn" onClick={remove}>↑ Delete ↑</button>
    </div>
  )
}