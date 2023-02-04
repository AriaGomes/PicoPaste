import { DefaultButton, TextArea } from "../components";
import axios from "axios";

export const LandingPage = () => {
    console.log(document.location)
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
        <DefaultButton onClick={SubmitPaste}>Submit Paste</DefaultButton>
      </div>
    </>
  );
};

const SubmitPaste = () => {
  //@ts-ignore
  let paste: any = document.getElementById("editor")?.value;

  if (!paste) return console.log("Error getting text from the text area");

  axios
    .post(`${document.location.protocol}//${ document.location.hostname || "localhost"}:${process.env.PORT || 5000}/pastes/add`, {
      paste: paste,
    })
    .then(function (response) {
      console.log(response.data._id);
      document.location.href = `${document.location.href}pastes/${response.data._id}`;
    })
    .catch(function (error) {
      console.log(error);
    });
};
