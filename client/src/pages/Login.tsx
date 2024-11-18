import { useState, type FormEvent, type ChangeEvent } from "react";
import { Link } from "react-router-dom";

import { useMutation } from "@apollo/client";

import Auth from "../utils/auth";
import { LOGIN_USER } from "../utils/mutations";

const Login = () => {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  const [login] = useMutation(LOGIN_USER);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target as HTMLInputElement;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event: FormEvent) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await login({
        variables: { email: formState.email, password: formState.password },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div className="ui container" style={{ marginTop: "50px" }}>
      <div className="ui centered grid">
        <div className="six wide column">
          <h2 className="ui teal header">
            <i className="signup icon"></i>
            <div className="content">Login</div>
          </h2>
          <form
            className="ui form"
            id="signup-form"
            onSubmit={handleFormSubmit}
          >
            <div className="field">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                onChange={handleChange}
              />
            </div>
            <div className="field">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                onChange={handleChange}
              />
            </div>
            <button className="ui teal button" type="submit">
              Login
            </button>
          </form>
          <div style={{ marginTop: "20px" }}>
            Don't have an account? <Link to="/Signup">Signup</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
