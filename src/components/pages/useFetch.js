import { useDispatch } from "react-redux";
import { mailAction } from "../store/mail-Slice";

export const useFetch = () => {
  const dispatch = useDispatch();

  const deleteEmail = async (idEmail, ckey, from) => {
    try {
      const res = await fetch(
        `https://mail-box-fb2fe-default-rtdb.firebaseio.com/${idEmail}/${from}/${ckey}.json`,
        {
          method: "DELETE",
        }
      );
      dispatch(mailAction.someChanges());
      if (!res.ok) {
        throw new Error("Failed to delete email");
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  const sendEmail = async (idEmail, obj) => {
    try {
      const response = await fetch(
        `https://mail-box-fb2fe-default-rtdb.firebaseio.com/${idEmail}/inbox.json`,
        {
          method: "POST",
          body: JSON.stringify(obj),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      const data = await response.json();
      dispatch(mailAction.someChanges());
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const allEmail = async (idEmail, obj) => {
    try {
      const response = await fetch(
        `https://mail-box-fb2fe-default-rtdb.firebaseio.com/${idEmail}/sentbox.json`,
        {
          method: "POST",
          body: JSON.stringify(obj),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      const data = await response.json();
      dispatch(mailAction.someChanges());
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  return { deleteEmail, sendEmail, allEmail };
};
