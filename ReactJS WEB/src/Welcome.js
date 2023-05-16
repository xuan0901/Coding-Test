import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const Welcome = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    history.push("/");
  };

  return (
    <div>
      <h1>Welcome</h1>
      <p>You are logged in.</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Welcome;
