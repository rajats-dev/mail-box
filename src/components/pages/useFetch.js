import { useDispatch } from "react-redux";
import { mailAction } from "../store/mail-Slice";

export const useFetch = () => {
  const dispatch = useDispatch();

  const deleteEmail = async (idEmail, ckey) => {
    try {
      const res = await fetch(
        `https://mail-box-fb2fe-default-rtdb.firebaseio.com/${idEmail}/${ckey}.json`,
        {
          method: "DELETE",
        }
      );
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
        `https://mail-box-fb2fe-default-rtdb.firebaseio.com/${idEmail}.json`,
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

  return { deleteEmail, sendEmail };
};
