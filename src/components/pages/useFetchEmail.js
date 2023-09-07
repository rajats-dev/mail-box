import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { mailAction } from "../store/mail-Slice";

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
          dispatch(mailAction.sentboxData(loadData));
        } else {
          dispatch(mailAction.inboxData(loadData));
          const total = loadData.reduce((acc, curr) => {
            return acc + !curr.isRead;
          }, 0);
          console.log(total);
          dispatch(mailAction.totalUnread(total));
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [dispatch, someChange]);

  return <div>useFetchEmail</div>;
};

export default useFetchEmail;
