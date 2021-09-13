import { Component } from "react";
import { GetFeedData, GetUserData } from "../services/UserData";
import Header from "./Bootstrap/Header";
import Feed from "./Feed";
import Main from "./Main";
import Sidebar from "./Sidebar";

class App extends Component {
  state = {
    UserData: null,
    FeedData: []
  };
  componentDidMount() {
    GetUserData().then(({ data: UserData }) => this.setState({ UserData }));
    GetFeedData().then(({ data: FeedData }) => this.setState({ FeedData }));
  }
  render() {
    return (
      <div className="App">
        <Header
          className="Header"
          UserMeta={this.state.UserData && this.state.UserData.UserMeta}
        >
          Facebook Clone
        </Header>
        {this.state.UserData ? (
          <div className="container">
            <div className="row">
              <Sidebar
                ContentList={this.state.UserData.ContentList}
                UserMeta={this.state.UserData.UserMeta}
              />
              <Main />
              <Feed
                Birthdays={this.state.UserData.Birthdays}
                Pages={this.state.UserData.Pages}
                NewsFeeds={this.state.UserData.NewsFeeds}
              />
            </div>
          </div>
        ) : (
          "Login Screen"
        )}
      </div>
    );
  }
}

export default App;
