import { DefaultButton, TextArea } from "../components";
import axios from "axios";
import { useState } from "react";



export const LandingPage = () => {

    const [paste, setPaste] = useState("")

  return (
    <>
      <div>
        <center>
          {" "}
          <p className="dark:text-white">PicoPaste</p>
        </center>
      </div>
      <div className="p-4 pt-20">
        <TextArea  {...setPaste} paste/>
        <DefaultButton onClick={submitPaste}>Submit Paste</DefaultButton>
      </div>
    </>
  );
  
  
};


const submitPaste = () => {
    //@ts-ignore
    let paste : any = document.getElementById("editor")?.value

    if(!paste) return(console.log("Error getting text from the text area"))

    axios.post(`http://localhost:${process.env.PORT || 5000}/pastes/add`, {
        paste: paste
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
};