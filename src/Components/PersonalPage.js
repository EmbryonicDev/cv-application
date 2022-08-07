export default function PersonalPage(props) {
  const { firstName, lastName, email, tel } = props.personalData;

  return (
    <div id="personalPage">
      <h4 className="pageLabel">Name: </h4>
      <h4 className="pageData" id='name'>{` ${firstName} ${lastName}`}</h4>
      <h4 className="pageLabel">Email: </h4>
      <h4 className="pageData" id="email">{email}</h4>
      <h4 className="pageLabel">Telephone Number: </h4>
      <h4 className="pageData" id="tel"> {tel}</h4>
    </div>
  )
}