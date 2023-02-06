import { useRef, useState } from "react";
import { EmojiPickerPopout } from "./EmojiPickerPopout";
import { Dropzone } from "./Dropzone";
import { BsFillTrashFill } from "react-icons/bs";

export const TextArea = (props: any) => {
  const [fullscreen, setFullscreen] = useState(false);
  const [emojiPopout, setEmojiPopout] = useState<Boolean>(false);
  const [text, setText] = useState("");
  const [files, setFiles] = useState(); // For testing (makes list)
  const inputRef = useRef<HTMLInputElement | null>(null);
  let reader: FileReader;

  const handleFileRead = (e: any) => {
    let content = reader.result;
    console.log(content);
    if (!content) return; // only uploads one file for now as was getting errors stops null and undefined from being printed
    // @ts-ignore
    setText(text + content);
  };

  const handleFileChosen = (file: Blob) => {
    reader = new FileReader();
    reader.onloadend = handleFileRead;
    reader.readAsText(file);
  };

  const handleFileChange = (e: any) => {
    if (e.hasOwnProperty("target")) {
      e = [...e.target.files];
    }

    //setFiles(e.map((file:any) => <li key={file.name}>{file.name}</li>));

    // Fill textarea with file(s) contents

    for (let i = 0; i < e?.length; i++) {
      //Not Working
      handleFileChosen(e[i]);
    }
  };

  const handleTextAreaChange = () => {
    // @ts-ignore
    setText(document.getElementById("editor").value);
  };

  const handleDeleteButton = () => {
    setText("");
  };

  const handleUploadClick = () => {
    // 👇 We redirect the click event onto the hidden input element
    inputRef.current?.click();
  };

  return (
    <>
      <div>
        {emojiPopout && (
          <EmojiPickerPopout
            emojiPopout={emojiPopout}
            setEmojiPopout={setEmojiPopout}
            setIsDark={props.setIsDark}
            isDark={props.isDark}
            text={text}
            setText={setText}
          />
        )}
      </div>
      <div className="mb-4 w-full rounded-lg border border-gray-200 bg-gray-50 dark:border-gray-600 dark:bg-gray-700">
        <div className="flex items-center justify-between border-b px-3 py-2 dark:border-gray-600">
          <div className="flex flex-wrap items-center divide-gray-200 dark:divide-gray-600 sm:divide-x">
            <div className="flex items-center space-x-1 sm:pr-4">
              <button
                type="button"
                className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={handleUploadClick}
              >
                <svg
                  aria-hidden="true"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Attach file</span>
              </button>
              <input
                type="file"
                ref={inputRef}
                onChange={handleFileChange}
                style={{ display: "none" }}
                multiple
              />

              <button
                type="button"
                className={`cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white ${
                  emojiPopout && "bg-gray-300 dark:bg-gray-900"
                }`}
                onClick={() => {
                  setEmojiPopout(!emojiPopout);
                }}
              >
                <svg
                  aria-hidden="true"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="flex flex-wrap items-center space-x-1 sm:pl-4">
              <button
                onClick={handleDeleteButton}
                type="button"
                className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <div className="h-[20px] w-[20px] pt-[2px]">
                  <center>
                    <BsFillTrashFill />
                  </center>
                </div>
              </button>
            </div>
          </div>
          <button
            type="button"
            onClick={() => {
              setFullscreen(!fullscreen);
            }}
            data-tooltip-target="tooltip-fullscreen"
            className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white sm:ml-auto"
          >
            <svg
              aria-hidden="true"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Full screen</span>
          </button>
          <div
            id="tooltip-fullscreen"
            role="tooltip"
            className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
          >
            Show full screen
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
        </div>

        <Dropzone onDrop={handleFileChange}>
          <div className="rounded-b-lg bg-white px-4 py-2 dark:bg-gray-800">
            <textarea
              id="editor"
              className={` max-h-[60vh] min-h-[50px] w-full border-0 bg-white px-0 text-sm text-gray-800 focus:ring-0 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400`}
              placeholder="Paste your paste..."
              required
              style={{ height: `${fullscreen ? "60vh" : "20vh"}` }}
              spellCheck
              value={text}
              onChange={handleTextAreaChange}
            ></textarea>
          </div>
        </Dropzone>
        {files}
      </div>
    </>
  );
};
