import axios from "axios";
import { useState } from "react";
import { Card } from "../components";

export const Pastes = () => {
  let [paste, setPaste] = useState("");

  axios
    .get(
      `http://localhost:${
        process.env.PORT || 5000
      }/pastes/${document.location.pathname.substring(8)}`
    )
    .then(function (response) {
      setPaste(response.data.paste);
      console.log(response.data._id);
    })
    .catch(function (error) {
      console.log(error);
    });
  return (
    <div className="p-4">
      <div className="text-wrap">
        <Card>
          <p className="text-wrap dark:text-white ">{paste}</p>
        </Card>
      </div>
    </div>
  );
};
