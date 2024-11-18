const Signup = () => {
  return (
    <div className="ui container" style={{ marginTop: "50px" }}>
      <div className="ui centered grid">
        <div className="six wide column">
          <h2 className="ui teal header">
            <i className="signup icon"></i>
            <div className="content">Sign Up</div>
          </h2>
          <form className="ui form" id="signup-form">
            <div className="field">
              <label>First Name</label>
              <input
                type="text"
                name="first-name"
                placeholder="First Name"
                required
              />
            </div>
            <div className="field">
              <label>Last Name</label>
              <input
                type="text"
                name="last-name"
                placeholder="Last Name"
                required
              />
            </div>
            <div className="field">
              <label>Username</label>
              <input
                type="text"
                name="username"
                placeholder="Username"
                required
              />
            </div>
            <div className="field">
              <label>Email</label>
              <input type="email" name="email" placeholder="Email" required />
            </div>
            <div className="field">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
              />
            </div>
            <button className="ui teal button" type="submit">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
