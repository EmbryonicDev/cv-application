export default function ExperienceDiv(props) {
  const { workName, workTitle, jobTasks, startDate, endDate, index, edit, remove } = props
  return (
    <div className="experienceDiv">
      <h1 className='categoryHeading'>Work History {index}</h1>
      <h4 className="pageLabel">Company Name: </h4>
      <h4 className="pageData">{workName}</h4>
      <h4 className="pageLabel">Job Title: </h4>
      <h4 className="pageData">{workTitle}</h4>
      <h4 className="pageLabel">Main Tasks of Job: </h4>
      <h4 className="pageData">{jobTasks}</h4>
      <h4 className="pageLabel">Start Date: </h4>
      <h4 className="pageData"> {startDate}</h4>
      <h4 className="pageLabel">End Date: </h4>
      <h4 className="pageData"> {endDate}</h4>
      <button className="editBtn" onClick={edit}>↑ Edit ↑</button>
      <button className="deleteBtn" onClick={remove}>↑ Delete ↑</button>
    </div>
  )
}