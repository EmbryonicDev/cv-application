import locationIcon from '../assets/location-icon.svg';
import phoneIcon from '../assets/phone-icon.svg';
import emailIcon from '../assets/email-icon.svg';
import websiteIcon from '../assets/website-icon.svg';

export function PersonalCv(props) {
  const { firstName, lastName, profession, website, tel, address, email } = props.personalData;

  return (
    <div id="personalCv">
      <div id="nameDiv">
        <h1 className="name">{firstName}</h1>
        <h1 className="name">{lastName}</h1>
        <h3 className="professionText">{profession}</h3>
      </div>
      <ul className="contactList">
        <li className='contactData'>
          <img src={locationIcon} alt="Location Icon" className="personalIcon" />
          <h4 className='contactText'>{address}</h4>
        </li>
        <li className='contactData'>
          <img src={phoneIcon} alt="Phone Icon" className="personalIcon" />
          <h4 className='contactText'>{tel}</h4>
        </li>
        <li className='contactData'>
          <img src={emailIcon} alt="Email Icon" className="personalIcon" />
          <h4 className='contactText'>{email}</h4>
        </li>
        <li className='contactData'>
          <img src={websiteIcon} alt="Website Icon" className="personalIcon" />
          <h4 className='contactText'>
            <a href={website}>{website}</a></h4>
        </li>
      </ul>
    </div>
  )
}