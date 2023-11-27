import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { MailAction } from "../features/mailSlice/MailSlice";

const useFetchEmail = (url, someChange, from) => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .catch((error) => {
        return error;
      })
      .then((data) => {
        let loadData = [];
        for (const key in data) {
          loadData.push({
            ckey: key,
            emailBody: data[key].enteredEmailBody,
            subject: data[key].enteredSubject,
            senderEmail: data[key].enteredEmail,
            id: data[key].id,
            isRead: data[key].isRead,
          });
        }

        if (from === "sentbox") {
          dispatch(MailAction.sentboxData(loadData));
        } else {
          dispatch(MailAction.inboxData(loadData));
          const total = loadData.reduce((acc, curr) => {
            return acc + !curr.isRead;
          }, 0);
          dispatch(MailAction.totalUnread(total));
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [dispatch, someChange, from, url]);

  return <div>useFetchEmail</div>;
};

export default useFetchEmail;
