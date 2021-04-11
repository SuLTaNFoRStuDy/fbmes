import React, { useState, useEffect } from "react";
import { FormControl, Input } from "@material-ui/core";
import "./App.css";
import Message from "./Message";

import FlipMove from "react-flip-move";
import SendIcon from "@material-ui/icons/Send";
import { IconButton } from "@material-ui/core";
import axios from "./axios";

function App() {
  // useState = variable in REACT
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  const sync = async () => {
    await axios.get("api/").then((res) => {
      console.log(res.data);
      setMessages(res.data);
    });
  };
  useEffect(() => {
    sync();
  }, [messages]);

  // useEffect = run code on a condition
  useEffect(() => {
    setUsername(prompt("Please enter your name"));
    // if its blank inside [], this code runs ONCE when the app components load
    // if we have a variable like input, it will be firing at every change
  }, []); // condition

  const sendMessage = (event) => {
    // all the logic to send the message
    event.preventDefault(); // prevent form to refresh the page

    axios.post("api/", {
      message: input,
      userName: username
    });

    setInput("");
  };

  return (
    <div className="App">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Facebook_Messenger_logo_2020.svg/800px-Facebook_Messenger_logo_2020.svg.png"
        width="100px"
        height="100px"
        alt="messenger_logo"
      />
      <h1>Facebook-Messenger-clone</h1>
      <h2>Welcome {username}</h2>

      {/* form and button type submit allow the enter to send the message */}
      <form className="app__form">
        <FormControl className="app__formControl">
          {/* set the input value of the state */}
          <Input
            className="app__input"
            placeholder="Enter a message..."
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />

          <IconButton
            className="app__iconButton"
            disabled={!input}
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessage}
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>

      <FlipMove>
        {messages.map((message) => (
          <Message key={message.id} username={username} message={message} />
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
