import React, { Component } from "react";
import "./Post.css";

class ReceiveItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "mynotes",
      selectedMessage: null,
      list: ["받은 쪽지 1", "받은 쪽지 2", "받은 쪽지3"],
    };
  }

  handleTabChange = (tab) => {
    this.setState({ activeTab: tab, selectedMessage: null });
  };

  handleMessageClick = (message) => {
    this.setState((prev) => ({
      selectedMessage: prev.selectedMessage === message ? null : message,
    }));
  };

  render() {
    const { activeTab, selectedMessage } = this.state;

    return (
      <div>
        <div className="postcontent">
          {activeTab === "mynotes" && (
            <div>
              {this.state.list.map((item, index) => {
                return (
                  <>
                    <ul>
                      <li onClick={() => this.handleMessageClick(item)}>
                        {item}
                      </li>
                    </ul>
                  </>
                );
              })}
            </div>
          )}
        </div>
        {selectedMessage && (
          <div className="postcontent">
            <p>{selectedMessage}</p>
          </div>
        )}
      </div>
    );
  }
}

export default ReceiveItem;
