export default function PersonalForm(props) {
  const { data, handleChange, submitPersonal } = props;

  return (
    <div id="personalForm">
      <form action="#" onSubmit={submitPersonal}>
        <p className="personalInput">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={data.firstName}
            onChange={(event) => handleChange('personal', event)}
          />
        </p>
        <p className="personalInput">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={data.lastName}
            onChange={(event) => handleChange('personal', event)}
          />
        </p>
        <p className="personalInput">
          <label htmlFor="email">Email:</label>
          <input type="email"
            id="email"
            name="email"
            value={data.email}
            onChange={(event) => handleChange('personal', event)}
          />
        </p>
        <p className="personalInput">
          <label htmlFor="tel">Telephone Number:</label>
          <input type="numeric"
            id="tel"
            name="tel"
            value={data.tel}
            onChange={(event) => handleChange('personal', event)}
          />
        </p>
        <button id="personalSubmit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
