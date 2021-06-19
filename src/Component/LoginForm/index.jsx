import axios from "axios";
import React from "react";

const LoginForm = () => {
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = {
      "Project-ID": process.env.REACT_APP_PROJECTID,
      "User-Name": userName,
      "User-Secret": password,
    };
    try {
      await axios.get("https://api.chatengine.io/chats", {
        headers: authObject,
      });
      localStorage.setItem("username", userName);
      localStorage.setItem("password", password);
      window.location.reload();
    } catch (e) {
      setError("Oops,Incorrect credentials");
    }
  };

  React.useEffect(() => {
    console.log("Hi devs");
    console.log("user1:pass = tom:tom ");
    console.log("user2:pass = jerry:jerry");
  });

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Welcome To Charming </h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="input"
            placeholder="UserName"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            placeholder="Password"
            required
          />
          <div align="center">
            <button type="submit" className="button">
              <span>Start Chatting</span>
            </button>
          </div>
          <h2 className="error">{error}</h2>
        </form>
        <span
          style={{
            color: "wheat",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          PLease Check console for Users and Passwords
        </span>
      </div>
    </div>
  );
};

export default LoginForm;
