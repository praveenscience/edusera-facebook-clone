import { Component } from "react";
import Header from "./Bootstrap/Header";
import Feed from "./Feed";
import Main from "./Main";
import Sidebar from "./Sidebar";

class App extends Component {
  state = {
    UserData: {
      FullName: "Mark Zuckerberg",
      Avatar: "",
      ProfileURL: "/",
      Birthdays: [
        {
          FullName: "Sadaf Jamal",
          ProfileURL: "/"
        },
        {
          FullName: "Mukesh Dani",
          ProfileURL: "/"
        },
        {
          FullName: "Rahul Agre",
          ProfileURL: "/"
        }
      ],
      Pages: [
        {
          Avatar: "https://i.imgur.com/SrTKlVe.png",
          PageURL: "/",
          Name: "Edusera",
          MessageCount: "20+",
          NotificationCount: "20+"
        },
        {
          Avatar: "https://i.imgur.com/QDBSMr2b.jpg",
          PageURL: "/",
          Name: "Zucku Mama",
          MessageCount: "15",
          NotificationCount: "15"
        }
      ],
      NewsFeeds: [
        {
          Image: "https://i.imgur.com/nOT5zBD.jpeg",
          NewsLink: "/",
          Title: "Best Cat Foods",
          DateTime: "12th Sunday September 2021",
          DatePosted: "today"
        },
        {
          Image: "https://i.imgur.com/BipVIkJ.jpeg",
          NewsLink: "/",
          Title: "Hello Kitties!",
          DateTime: "12th Sunday September 2021",
          DatePosted: "yesterday"
        },
        {
          Image: "https://i.imgur.com/ZM5xWH9.jpeg",
          NewsLink: "/",
          Title: "Some Cute Cat Stuff",
          DateTime: "12th Sunday September 2021",
          DatePosted: "2 days ago"
        }
      ]
    },
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
