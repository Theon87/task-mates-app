import { useState, useLayoutEffect } from "react";
import { Link } from "react-router-dom";

import TaskList from "../components/TaskList";
import auth from "../utils/auth";
import Navbar from "../components/Navbar";
import logo from "../assets/taskmates-logo-no-background.png";

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
        <>
            <div className="landingPage">
                <h1>Welcome to Task Mates</h1>
                <p>
                    Task Mates is a simple app that allows you to manage your tasks.
                </p>
                <p>
                    Click <Link to="/login">here</Link> to login or{" "}
                    <Link to="/signup">here</Link> to sign up.
                </p>
            </div>
            <div className="taskMatesLogo">
                <img src={logo} alt="Task Mates logo" />
            </div>
        </>
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
