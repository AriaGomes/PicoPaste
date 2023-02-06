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

  axios
    .get(
      `${document.location.protocol}//${
        process.env.HOST || "localhost"
      }:${
        process.env.PORT || 5000
      }/pastes/${document.location.pathname.substring(8)}`
    )
    .then(function (response) {
      setPaste(response.data.paste);
      setCode(response.data.options.isCode);
      setLine(response.data.options.lineNumbers);
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
   navigator.clipboard.writeText(paste) 
  };

  const handleDownloadText = () => {
    const file = new Blob([paste], {
      type: "text/plain"
    });

    const element = document.createElement("a");
    element.href = URL.createObjectURL(file);
    element.download = document.location.pathname.substring(8) + '.txt';
    document.body.appendChild(element);
    element.click();
  };

  const handleRawText = () => {
    document.location = `${document.location.protocol}//${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}/pastes/raw/${document.location.pathname.substring(8)}`
  }

  return (
    <div className="p-4">
      <div className="text-wrap">
        {code ? (
          
            <Card>
              <div className="flex items-center justify-between border-b px-3 py-2 dark:border-gray-600">
                <div>
                <button
                  onClick={handleCopyText}
                  className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <CopyCliboard className="h-5 w-5 dark:fill-white" />
                </button>
                </div>
                <div>
                <button
                  onClick={handleRawText}
                  className="cursor-pointer rounded p-2 top text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <p className="dark:text-white text-black text-sm -translate-y-0.5 h-4 p-1 mb-1">RAW</p>
                </button>
                <button
                  onClick={handleDownloadText}
                  className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <BsDownload className="h-5 w-5 dark:fill-white" />
                </button>
                </div>
              </div>

              <Suspense fallback={<div>Loading...</div>}>
                <SyntaxHighlighter
                  wrapLongLines
                  showLineNumbers={line}
                  customStyle={style}
                  style={props.isDark ? atomOneDarkReasonable : vs}
                >
                  {paste}
                </SyntaxHighlighter>
              </Suspense>
            </Card>
        ) : (
          <Card className>
            <div className="flex items-center justify-between border-b px-3 py-2 dark:border-gray-600">
                <div>
                <button
                  onClick={handleCopyText}
                  className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <CopyCliboard className="h-5 w-5 dark:fill-white" />
                </button>
                </div>
                <div>
                <button
                  onClick={handleRawText}
                  className="cursor-pointer rounded p-2 top text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <p className="dark:text-white text-black text-sm -translate-y-0.5 h-4 p-1 mb-1">RAW</p>
                </button>
                <button
                  onClick={handleDownloadText}
                  className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <BsDownload className="h-5 w-5 dark:fill-white" />
                </button>
                </div>
              </div>
            <Suspense fallback={<div>Loading...</div>}>
              <pre className="p-4">
                <p className="dark:text-white" id="copyme">{paste}</p>
              </pre>
            </Suspense>
          </Card>
        )}
      </div>
    </div>
  );
};
