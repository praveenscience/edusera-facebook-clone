import { Fragment } from "react";

const Sidebar = () => {
  const ContentList = {
    Default: [
      {
        Link: "/",
        Icon: "news",
        Text: "News Feed"
      },
      {
        Link: "/",
        Icon: "chat",
        Text: "Messenger"
      },
      {
        Link: "/",
        Icon: "watch",
        Text: "Watch"
      },
      {
        Link: "/",
        Icon: "market",
        Text: "Marketplace"
      }
    ],
    Shortcuts: [
      {
        Link: "https://rb.gy/movl7r",
        Icon: "web",
        Text: "Personal Website"
      }
    ],
    Explore: [
      {
        Link: "https://rb.gy/fupw21",
        Icon: "yt",
        Text: "YouTube Channel"
      }
    ]
  };
  return (
    <div className="Sidebar col-2">
      <div className="UserMeta">
        <a href="/">
          <img src="https://i.imgur.com/QDBSMr2b.jpg" alt="Marku" />
          Zuck
        </a>
      </div>
      {Object.keys(ContentList).map(section => (
        <Fragment key={section}>
          {section !== "Default" && <h3>{section}</h3>}
          <ul className="Sidebar-Links">
            {ContentList[section].map(link => (
              <li key={link.Icon}>
                <a href={link.Link} className={link.Icon === "news" ? "active" : null} target={link.Link !== "/" ? "_blank" : null} rel="noreferrer">
                  <span className={"Sprite-" + link.Icon} />
                  {link.Text}
                </a>
              </li>
            ))}
          </ul>
        </Fragment>
      ))}
    </div>
  );
};

export default Sidebar;
