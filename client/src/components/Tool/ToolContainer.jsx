import React, { useState } from "react";
import InputForm from "./InputForm";
import ToolResult from "./ToolResult";
import { SimpleGrid } from "@chakra-ui/react";

export default function ToolContainer() {

  let [result, setResult] = useState("");

  return (
    <SimpleGrid columns={2} spacing={2}>
      <InputForm setResult={setResult} />
      <ToolResult result={result} />
    </SimpleGrid>
  );
}
