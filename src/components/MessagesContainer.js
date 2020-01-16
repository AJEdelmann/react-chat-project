import React from "react";
import noodle from "../images/wasabys-avatar.png";
import sad from "../images/dogFather.png";
import TypingMessage from "./TypingMessage";

const MessagesContainer = props => {
  const messages = props.messages;

  function makeTimePerfect(time) {
    const date = new Date(time);
    const hours = date.getHours();
    const minutes = "0" + date.getMinutes();
    const formattedTime = `${hours}:${minutes.substr(-2)}`;
    return formattedTime;
  }

  const messageItems = messages.map(el => {
    const beauTime = makeTimePerfect(el.timestamp);

    return (
      <div
        className={el.sender === "user-1" ? "message sent" : "message received"}
        key={el.timestamp}
      >
        <div className="avatar">
          <img src={el.sender === "user-1" ? sad : noodle}></img>
        </div>
        <div className="text">
          <p>{el.message}</p>
        </div>
        <div className="time">
          <p>{beauTime}</p>
        </div>
      </div>
    );
  });
  return (
    <div className="messages-container">
      {props.typing && <TypingMessage userId={props.userId}></TypingMessage>}
      {messageItems}
    </div>
  );
};

export default MessagesContainer;
