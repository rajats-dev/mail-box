import React from "react";
import { useSelector } from "react-redux";
// import { useParams } from "react-router-dom/cjs/react-router-dom";

const Reademail = (props) => {
  const items = useSelector((state) => state.mail.clickitem);

  // const param = useParams();
  // const email = items.filter((item) => item.ckey == param.emailID);

  const parse = (html) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const content = doc.body.textContent;
    return content;
  };

  return (
    <div className="container">
      <h4>Email Messasge</h4>
      <hr></hr>
      <div key={items.ckey} style={{ fontSize: "20px" }}>
        {parse(items.emailBody)}
      </div>
    </div>
  );
};

export default Reademail;
