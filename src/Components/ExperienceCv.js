export default function ExperienceCv(props) {
  const { companyName, jobTitle, country, tasks, start, end } = props.experienceArr;
  const [startYear, endYear] = [Date.getYear(start), Date.getYear(end)]

  return (
    <div className="experienceCv">
      <div className="companyDateCv">
        <h3>{companyName}</h3>
        <h4>{country}</h4>
        <h4>{startYear} - {endYear}</h4>
      </div>
      <div className="workTasksCv">
        <h3>{jobTitle}</h3>
        <p>{tasks}</p>
      </div>
    </div>
  )
}