import { Component } from "react";
import Header from "./Bootstrap/Header";
import Feed from "./Feed";
import Main from "./Main";
import Sidebar from "./Sidebar";

class App extends Component {
  state = {
    UserData: {},
    FeedData: []
  };
  render() {
    return (
      <div className="App">
        <Header className="Header">Facebook Clone</Header>
        <div className="container">
          <div className="row">
            <Sidebar />
            <Main />
            <Feed />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
