import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import { mailAction } from "../../store/mail-Slice";

const Reademail = () => {
  const items = useSelector((state) => state.mail.items);
  const param = useParams();

  const email = items.filter((item) => item.ckey == param.emailID);

  return (
    <div>
      {email.map((item) => (
        <div key={item.ckey}>{item.emailBody}</div>
      ))}
    </div>
  );
};

export default Reademail;