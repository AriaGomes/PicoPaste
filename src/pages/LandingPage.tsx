import { DefaultButton, TextArea } from "../components";
import axios from "axios";
import { Card, ToggleSwitch } from "flowbite-react";
import { DefaultToggle } from "../components/DefaultToggle";
import { useState } from "react";

export const LandingPage = () => {
const [codeToggle, setCodeToggle] = useState(false)
const [lineToggle, setLineToggle] = useState(false)

    const SubmitPaste = () => {
        //@ts-ignore
        let paste: String = document.getElementById("editor")?.value;
        //@ts-ignore
        let code: boolean = document.getElementById("code")?.checked;
        //@ts-ignore
        let line: boolean = document.getElementById("line")?.checked;
      
        console.log(line)
      
        if (!paste) return console.log("Error getting text from the text area");
      
        axios
          .post(`${document.location.protocol}//${ document.location.hostname || "localhost"}:${process.env.PORT || 5000}/pastes/add`, {
            paste: paste,
            options: {
                isCode: code,
                lineNumbers: line,
            }
          })
          .then(function (response) {
            console.log(response.data._id);
            document.location.href = `${document.location.href}pastes/${response.data._id}`;
          })
          .catch(function (error) {
            console.log(error);
          });
      };
      


  return (
    <>
      <div>
        <center>
          {" "}
          <p className="dark:text-white">PicoPaste</p>
        </center>
      </div>
      <div className="p-4 pt-20">
        <TextArea />
        <div className="flex place-content-between ">
            <Card>
                <div className="flex flex-col gap-4">
                <DefaultToggle onChange={() => {setCodeToggle(!codeToggle)}} id="code"> Code </DefaultToggle>
                <DefaultToggle onClick={() => {setLineToggle(!lineToggle)}} checked={codeToggle && !lineToggle && null} id="line"> Line Numbers </DefaultToggle>
                </div>
            </Card>
        <DefaultButton onClick={SubmitPaste}>Submit Paste</DefaultButton>
        </div>
       
      </div>
    </>
  );
  
};

