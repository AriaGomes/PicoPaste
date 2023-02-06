import axios from "axios";
import { Suspense, useState } from "react";
import { Card } from "../components";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  vs,
  atomOneDarkReasonable,
} from "react-syntax-highlighter/dist/esm/styles/hljs";
import { CopyCliboard } from "../assets/CopyClipboard";
import { BsDownload } from "react-icons/bs";

export const Pastes = (props: any) => {
  let [paste, setPaste] = useState("");
  let [code, setCode] = useState(false);
  let [line, setLine] = useState(false);
  //let [theme, setTheme] = useState(props.isDark ? atomOneDarkReasonable : vs)

  axios
    .get(
      `${document.location.protocol}//${
        document.location.hostname || "localhost"
      }:${
        process.env.PORT || 5000
      }/pastes/${document.location.pathname.substring(8)}`
    )
    .then(function (response) {
      setPaste(response.data.paste);
      setCode(response.data.options.isCode);
      setLine(response.data.options.lineNumbers);
      console.log(response.data._id);
    })
    .catch(function (error) {
      console.log(error);
    });

  const style: React.CSSProperties = {
    overflowY: "auto",
    overflowX: "hidden",
    maxHeight: "80vh",
  };

  const handleCopyText = () => {
    //navigator.clipboard.writeText(document.getElementById("a")?.value);
  };

  const handleDownloadText = () => {};

  return (
    <div className="p-4">
      <div className="text-wrap">
        {code ? (
          line ? (
            <Card>
              <div className="flex items-center justify-between border-b px-3 py-2 dark:border-gray-600">
                <button
                  onClick={handleCopyText}
                  className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <CopyCliboard className="h-5 w-5 dark:fill-white" />
                </button>

                <button
                  onClick={handleDownloadText}
                  className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <BsDownload className="h-5 w-5 dark:fill-white" />
                </button>
              </div>

              <Suspense fallback={<div>Loading...</div>}>
                <SyntaxHighlighter
                  wrapLongLines
                  showLineNumbers
                  customStyle={style}
                  style={props.isDark ? atomOneDarkReasonable : vs}
                >
                  {paste}
                </SyntaxHighlighter>
              </Suspense>
            </Card>
          ) : (
            <Card>
              <div className="flex items-center justify-between border-b px-3 py-2 dark:border-gray-600">
                <button className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                  <CopyCliboard className="h-5 w-5 dark:fill-white" />
                </button>

                <button className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                  <BsDownload className="h-5 w-5 dark:fill-white" />
                </button>
              </div>
              <Suspense fallback={<div>Loading...</div>}>
                <SyntaxHighlighter
                  wrapLongLines
                  customStyle={style}
                  style={props.isDark ? atomOneDarkReasonable : vs}
                >
                  {paste}
                </SyntaxHighlighter>
              </Suspense>
            </Card>
          )
        ) : (
          <Card className>
            <div className="flex items-center justify-between border-b px-3 py-2 dark:border-gray-600">
              <button className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                <CopyCliboard className="h-5 w-5 dark:fill-white" />
              </button>

              <button className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                <BsDownload className="h-5 w-5 dark:fill-white" />
              </button>
            </div>
            <Suspense fallback={<div>Loading...</div>}>
              <pre className="p-4">
                <p className="dark:text-white">{paste}</p>
              </pre>
            </Suspense>
          </Card>
        )}

        {/* <DefaultButton onClick={() => console.log(props.isOn)}>test</DefaultButton> */}
      </div>
    </div>
  );
};
