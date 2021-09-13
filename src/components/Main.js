import React from "react";
import FBBox from "./FBBox";

const Main = ({ WallData }) => {
  return (
    <div className="col-7">
      <FBBox Heading="Create a Post"></FBBox>
      <pre className="bg-light border rounded p-2">
        {JSON.stringify(WallData, null, 2)}
      </pre>
    </div>
  );
};

export default Main;
