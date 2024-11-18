import { useState, type FormEvent, type ChangeEvent } from "react";
import { Link } from "react-router-dom";

import { useMutation } from "@apollo/client";

import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";

const Signup = () => {
  const [formState, setFormState] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
  });
  const [addUser] = useMutation(ADD_USER);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

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
      const { data } = await addUser({
        variables: { input: { ...formState } },
      });

      Auth.login(data.addU.token);
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
            <div className="content">Sign Up</div>
          </h2>
          <form
            className="ui form"
            id="signup-form"
            onSubmit={handleFormSubmit}
          >
            <div className="field">
              <label>First Name</label>
              <input
                type="text"
                name="first_name"
                placeholder="First Name"
                required
                onChange={handleChange}
              />
            </div>
            <div className="field">
              <label>Last Name</label>
              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                required
                onChange={handleChange}
              />
            </div>
            <div className="field">
              <label>Username</label>
              <input
                type="text"
                name="username"
                placeholder="Username"
                required
                onChange={handleChange}
              />
            </div>
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
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
