import { DefaultButton, TextArea } from "../components";
import axios from "axios";
import { Card } from "flowbite-react";
import { DefaultToggle } from "../components/DefaultToggle";
import { useState } from "react";

export const LandingPage = (props: any) => {
  const [codeToggle, setCodeToggle] = useState(false);
  const [lineToggle, setLineToggle] = useState(false);

  const SubmitPaste = () => {
    //@ts-ignore
    let paste: String = document.getElementById("editor")?.value;
    //@ts-ignore
    let code: boolean = document.getElementById("code")?.checked;
    //@ts-ignore
    let line: boolean = document.getElementById("line")?.checked;

    if (!paste) return console.log("Error getting text from the text area");

    axios
      .post(
        `${document.location.protocol}//${
          document.location.hostname || "localhost"
        }:${process.env.PORT || 5000}/pastes/add`,
        {
          paste: paste,
          options: {
            isCode: code,
            lineNumbers: line,
          },
        }
      )
      .then(function (response) {
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
          <p className="title pt-10 text-5xl dark:text-white">PicoPaste</p>
        </center>
      </div>
      <div className="p-4 pt-20">
        <TextArea setIsDark={props.setIsDark} isDark={props.isDark} />
        <div className="flex place-content-between ">
          <Card className="p-5">
            <div className="flex flex-col gap-4">
              <DefaultToggle
                onChange={() => {
                  setCodeToggle(!codeToggle);
                }}
                id="code"
                toggled={true}
              >
                {" "}
                Code{" "}
              </DefaultToggle>
              <DefaultToggle
                onClick={() => {
                  setLineToggle(!lineToggle);
                }}
                checked={codeToggle && !lineToggle && null}
                id="line"
                toggled={codeToggle}
              >
                {" "}
                Line Numbers{" "}
              </DefaultToggle>
            </div>
          </Card>
          <DefaultButton onClick={SubmitPaste}>Submit Paste</DefaultButton>
        </div>
      </div>
    </>
  );
};
