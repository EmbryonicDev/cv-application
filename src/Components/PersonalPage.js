export default function PersonalPage(props) {
  const { firstName, lastName, email, tel } = props.personalData;

  return (
    <div id="personalPage">
      <h4 className="cvHeading">Name: </h4>
      <h4 className="userDetails" id='name'>{` ${firstName} ${lastName}`}</h4>
      <h4 className="cvHeading">Email: </h4>
      <h4 className="userDetails" id="email">{email}</h4>
      <h4 className="cvHeading">Telephone Number: </h4>
      <h4 className="userDetails" id="tel"> {tel}</h4>
    </div>
  )
}