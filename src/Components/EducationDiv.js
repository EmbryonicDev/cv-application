export default function EducationDiv(props) {
  const { school, title, date, index } = props

  return (
    <div className="educationDiv">
      <h1 className='categoryHeading'>Education {index}</h1>
      <h4 className="pageLabel">School / Institute Name: </h4>
      <h4 className="pageData">{school}</h4>
      <h4 className="pageLabel">Title of Study: </h4>
      <h4 className="pageData">{title}</h4>
      <h4 className="pageLabel">Date of Completion: </h4>
      <h4 className="pageData"> {date}</h4>
    </div>
  )
}