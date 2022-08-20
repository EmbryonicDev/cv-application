export default function EducationDiv(props) {
  const { school, title, date, index, edit, remove } = props

  return (
    <div className="educationDiv">
      <h1 className='categoryHeading'>Education {index}</h1>
      <div className="dataWrap">
        <h4 className="pageLabel">Institute Name: </h4>
        <h4 className="pageData">{school}</h4>
      </div>
      <div className="dataWrap">
        <h4 className="pageLabel">Title of Study: </h4>
        <h4 className="pageData">{title}</h4>
      </div>
      <div className="dataWrap">
        <h4 className="pageLabel">Date of Completion: </h4>
        <h4 className="pageData"> {date}</h4>
      </div>
      <button className="editBtn" onClick={edit}>↑ Edit ↑</button>
      <button className="deleteBtn" onClick={remove}>↑ Delete ↑</button>
    </div>
  )
}