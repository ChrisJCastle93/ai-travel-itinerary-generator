import React from "react";
import { Box } from "@chakra-ui/react";

export default function ToolResult(props) {
  const resultone = props.result.replaceAll('"', "");
  console.log(props.result);

  const generatedText = resultone.split("\\n").map((line) => {
    // console.log(line);
    return (
      <>
        <br />
        <p>{line}</p>
      </>
    );
  });

  //   console.log(generatedText);
  //   console.log(typeof generatedText);

  return <div>{generatedText}</div>;
}
