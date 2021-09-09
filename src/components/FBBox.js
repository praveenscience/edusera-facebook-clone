import React from "react";

const FBBox = ({ children, className }) => {
  return (
    <div className={"FBBox" + (className ? " " + className : "")}>
      {children}
    </div>
  );
};

export default FBBox;
