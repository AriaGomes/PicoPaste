import axios from "axios";
import { useState } from "react";

export const Raw = (props:any) => {

    const [paste, setPaste] = useState("")

    axios
    .get(
      `http://${
        process.env.HOST || "localhost"
      }:${
        process.env.PORT || 5000
      }/pastes/raw/${document.location.pathname.substring(12)}`
    )
    .then(function (response) {
        console.log(response)
      setPaste(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
    return(
         <pre className="text-black">{paste}</pre>
    )
}