export default function PersonalForm(props) {
  const { data, handleChange, submitPersonal } = props;

  return (
    <div id="personalForm">
      <h1 className="formHeading">Personal Information</h1>
      <form action="#" onSubmit={submitPersonal}>
        <p className="inputSet">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={data.firstName}
            required
            onChange={(event) => handleChange('personal', event)}
          />
        </p>
        <p className="inputSet">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={data.lastName}
            required
            onChange={(event) => handleChange('personal', event)}
          />
        </p>
        <p className="inputSet">
          <label htmlFor="profession">Profession:</label>
          <input
            type="text"
            id="profession"
            name="profession"
            value={data.profession}
            required
            onChange={(event) => handleChange('personal', event)}
          />
        </p>
        <p className="inputSet">
          <label htmlFor="email">Email:</label>
          <input type="email"
            id="email"
            name="email"
            value={data.email}
            required
            onChange={(event) => handleChange('personal', event)}
          />
        </p>
        <p className="inputSet">
          <label htmlFor="tel">Telephone Number:</label>
          <input type="numeric"
            id="tel"
            name="tel"
            value={data.tel}
            required
            onChange={(event) => handleChange('personal', event)}
            pattern="^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$"
          />
        </p>
        <p className="inputSet">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={data.address}
            required
            onChange={(event) => handleChange('personal', event)}
          />
        </p>
        <p className="inputSet">
          <label htmlFor="website">Website:</label>
          <input
            type="url"
            id="website"
            name="website"
            value={data.website}
            required
            onChange={(event) => handleChange('personal', event)}
          />
        </p>
        <button className="submitBtn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
