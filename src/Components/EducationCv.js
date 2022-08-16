export default function EducationCv(props) {
  const { school, title, country, date } = props;

  return (
    <div className="educationCv">
      <div className="educationDateCv">
        <h3>{school}</h3>
        <h4>{country}</h4>
        <h4>Graduation: {date}</h4>
      </div>
      <div className="educationDescription">
        <h3>{title}</h3>
      </div>
    </div>
  )
}