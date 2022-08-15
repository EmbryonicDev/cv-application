export default function ExperienceCv(props) {
  console.log(props)
  const { workName, workTitle, country, jobTasks, startDate, endDate } = props;
  console.log(typeof endDate)
  const [startYear, endYear] = [startDate.substring(0, 4), endDate.substring(0, 4)]

  return (
    <div className="experienceCv">
      <div className="companyDateCv">
        <h3>{workName}</h3>
        <h4>{country}</h4>
        <h4>{startYear} - {endYear}</h4>
      </div>
      <div className="workTasksCv">
        <h3>{workTitle}</h3>
        <p>{jobTasks}</p>
      </div>
    </div>
  )
}