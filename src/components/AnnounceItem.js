import React, { Component } from "react";
import "./Post.css";

class AnnounceItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "mynotes",
      selectedMessage: null,
      list: ["공지사항 1", "공지사항 2", "공지사항"],
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

export default AnnounceItem;
