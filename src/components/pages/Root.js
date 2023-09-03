import React from "react";
import Header from "./Header";

const Root = (props) => {
  return (
    <div>
      <Header></Header>
      <main>{props.children}</main>
    </div>
  );
};

export default Root;
