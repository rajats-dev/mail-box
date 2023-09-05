import React from "react";
import Headers from "./Headers";

const Root = (props) => {
  return (
    <div>
      <Headers></Headers>
      <main>{props.children}</main>
    </div>
  );
};

export default Root;
