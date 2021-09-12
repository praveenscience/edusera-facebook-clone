import FBBox from "./FBBox";

const Feed = () => {
  return (
    <div className="col-3 Feed">
      <FBBox>
        <div className="BirthdayContainer">
          <img src="https://i.imgur.com/6AoNBzI.png" alt="Gift" />
          <a href="/">Sadaf</a>, <a href="/">Mukesh</a>, <a href="/">Rahul</a>{" "}
          and 3 others.
        </div>
      </FBBox>
      <FBBox>
        <div className="PagesContainer">
          <h4>Your Pages (2)</h4>
          <ul>
            <li>
              <img src="https://i.imgur.com/SrTKlVe.png" alt="Edusera" />
              <div className="PageMeta">
                <a href="/">
                  <strong>Edusera</strong>
                </a>
                <a href="/">
                  <img src="https://i.imgur.com/bwVSUrj.png" alt="Messages" />
                  Messages (20+)
                </a>
                <a href="/">
                  <img
                    src="https://i.imgur.com/iU3hjYR.png"
                    alt="Notifications"
                  />
                  Notifications (20+)
                </a>
              </div>
            </li>
            <li>
              <img src="https://i.imgur.com/QDBSMr2b.jpg" alt="Zucku Mama" />
              <div className="PageMeta">
                <a href="/">
                  <strong>Zucku Mama</strong>
                </a>
                <a href="/">
                  <img src="https://i.imgur.com/bwVSUrj.png" alt="Messages" />
                  Messages (20+)
                </a>
                <a href="/">
                  <img
                    src="https://i.imgur.com/iU3hjYR.png"
                    alt="Notifications"
                  />
                  Notifications (20+)
                </a>
              </div>
            </li>
          </ul>
        </div>
      </FBBox>
      <FBBox>
        <div className="FeedsContainer">Feeds</div>
      </FBBox>
    </div>
  );
};

export default Feed;
