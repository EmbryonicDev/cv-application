export default function PersonalPage(props) {
  const { firstName, lastName, email, tel, profession, address, website } = props.personalData;
  const { edit } = props;

  return (
    <div id="personalPage">
      <h1 className='categoryHeading'>Personal Information</h1>
      <h4 className="pageLabel">Name: </h4>
      <h4 className="pageData" id='name'>{` ${firstName} ${lastName}`}</h4>
      <h4 className="pageLabel">Profession: </h4>
      <h4 className="pageData" id="profession">{profession}</h4>
      <h4 className="pageLabel">Email: </h4>
      <h4 className="pageData" id="email">{email}</h4>
      <h4 className="pageLabel">Telephone Number: </h4>
      <h4 className="pageData" id="tel"> {tel}</h4>
      <h4 className="pageLabel">Address: </h4>
      <h4 className="pageData" id="address">{address}</h4>
      <h4 className="pageLabel">Website: </h4>
      <h4 className="pageData" id="website"><a href={website}>{website}</a></h4>
      <button className="editBtn" onClick={edit}>↑ Edit ↑</button>
    </div>
  )
}