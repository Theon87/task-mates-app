import { useState, useLayoutEffect } from "react";
import { Link } from "react-router-dom";

import TaskList from "../components/TaskList";
import auth from "../utils/auth";
import Navbar from "../components/Navbar";

const Home = () => {
  const [loginCheck, setLoginCheck] = useState(false);

  useLayoutEffect(() => {
    checkLogin();
  }, []);

  const checkLogin = () => {
    if (auth.isLoggedIn()) {
      setLoginCheck(true);
    } else {
      setLoginCheck(false);
    }
  };

  return (
    <>
      {!loginCheck ? (
        <div>
          <h1>Welcome to Task Manager</h1>
          <p>
            Task Manager is a simple app that allows you to manage your tasks.
          </p>
          <p>
            Click <Link to="/login">here</Link> to login or{" "}
            <Link to="/signup">here</Link> to sign up.
          </p>
        </div>
      ) : (
        <div>
          <Navbar />
          <TaskList />
        </div>
      )}
    </>
  );
};

export default Home;
