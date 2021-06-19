import React from "react";
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./Component/ChatFeed";
import LoginForm from "./Component/LoginForm";
import "./App.css";

function App() {
  if (!localStorage.getItem("username")) return <LoginForm />;
  const handleLogOut = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    window.location.reload();
  };

  return (
    <div className="App">
      <ChatEngine
        height="100vh"
        projectID={process.env.REACT_APP_PROJECTID}
        userName={localStorage.getItem("username")}
        userSecret={localStorage.getItem("password")}
        renderChatFeed={(chatAppProps) => {
          return <ChatFeed {...chatAppProps} />;
        }}
        renderChatSettingsTop={(creds, chat) => (
          <button
            className="button"
            style={{
              borderRadius: "20px",
              position: "absolute",
              bottom: 20,
              backgroundColor: "#3b2a50",
              color: "#fff",
            }}
            onClick={handleLogOut}
          >
            sign out
          </button>
        )}
      />
    </div>
  );
}

export default App;
