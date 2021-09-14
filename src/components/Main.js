import React from "react";
import FBBox from "./FBBox";
import PostAttachment from "./PostAttachment";
import PostUserMeta from "./PostUserMeta";

const Main = ({ WallData }) => {
  return (
    <div className="col-7 Main">
      <FBBox Heading="Create a Post"></FBBox>
      {WallData.map((item, key) => (
        <FBBox key={key}>
          <PostUserMeta {...item.UserMeta} />
          <p>{item.Text}</p>
          <PostAttachment item={item} />
        </FBBox>
      ))}
    </div>
  );
};

export default Main;
