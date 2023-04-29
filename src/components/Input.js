import React, { useState } from 'react';
import { InputWrapper, FileInput, SubmitButton } from "../style/styles";

export default function Input({ onUpload }) {
  const [csvFile, setCsvFile] = useState(null);

  function handleFileUpload(e) {
    const file = e.target.files[0];
    setCsvFile(file);
  }

  return (
    <InputWrapper onSubmit={() => onUpload && onUpload(csvFile)}>
      <FileInput
        id="fileInput"
        type="file"
        accept=".csv"
        onChange={handleFileUpload}
      />
      <SubmitButton type="submit">
        Upload</SubmitButton>
    </InputWrapper>
  );
}
