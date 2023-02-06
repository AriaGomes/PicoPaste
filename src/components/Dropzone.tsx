import React from "react";
import { useDropzone } from "react-dropzone";

export const Dropzone = (props: any) => {
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    noClick: true,
    onDrop: props.onDrop,
  });
  const files = acceptedFiles.map((file) => (
    <li key={file.name}>{file.name}</li>
  ));
  //console.log(acceptedFiles)
  return (
    <section>
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        {props.children}
      </div>
    </section>
  );
};
