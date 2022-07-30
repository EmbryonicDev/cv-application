export default function PersonalForm(props) {
  const { data, handleChange } = props;

  return (
    <div id="personalForm">
      <form action="#">
        <p className="personalInput">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={data.firstName}
            onChange={handleChange}
          />
        </p>
        <p className="personalInput">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={data.lastName}
            onChange={handleChange}
          />
        </p>
        <p className="personalInput">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={data.email} onChange={handleChange} />
        </p>
        <p className="personalInput">
          <label htmlFor="tel">Telephone Number:</label>
          <input type="numeric" id="tel" name="tel" value={data.tel} onChange={handleChange} />
        </p>
        <button id="personalSubmit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
