import React from "react";

class ChatContainer extends React.Component {
  state = {
    user: "me"
  };

  handleChat = e => {
    return this.user !== "me" ? (
      <li>
        <img src="../images/dogFather.png" className="my-avatar" />
        <input
          type="text"
          name="todo"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <div>Time</div>
      </li>
    ) : (
      <li>
        <div>Time</div>
        <input
          type="text"
          name="todo"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <img src="../images/wasabys-avatar.png" className="friend-avatar" />
      </li>
    );
  };

  render() {
    return (
      <div>
        <ul>{this.handleChat()}</ul>
      </div>
    );
  }
}

export default ChatContainer;
