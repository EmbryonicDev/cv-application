export function PersonalCv(props) {
  const { firstName, lastName, profession, email, tel, address, website } = props.personalData;

  return (
    <div id="personalCv">
      <div id="nameDiv">
        <h1 className="name">{firstName}</h1>
        <h1 className="name">{lastName}</h1>
        <h3 className="professionText">{profession}</h3>
      </div>
    </div>
  )
}