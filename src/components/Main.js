import React from "react";
import FBBox from "./FBBox";
import PostUserMeta from "./PostUserMeta";

const Main = ({ WallData }) => {
  return (
    <div className="col-7 Main">
      <FBBox Heading="Create a Post"></FBBox>
      {WallData.map((item, key) => (
        <FBBox key={key}>
          <PostUserMeta {...item.UserMeta} />
          <p>{item.Text}</p>
          {item.Attachment && (
            <>
              {item.Type === "Picture" && (
                <img src={item.Attachment} alt={item.Text} />
              )}
              {item.Type === "Video" && (
                <div class="embed-container">
                  <iframe
                    src={
                      "https://www.youtube-nocookie.com/embed/" +
                      item.Attachment.replace("https://youtu.be/", "") +
                      "?controls=0&autohide=2"
                    }
                    title={item.Text}
                    frameborder="0"
                    allowfullscreen
                  ></iframe>
                </div>
              )}
            </>
          )}
        </FBBox>
      ))}
    </div>
  );
};

export default Main;
