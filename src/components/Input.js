import React, { useState } from 'react';
import { InputWrapper, FileInput, SubmitButton } from "../style/styles";

export default function Input({ onUpload }) {
  const [csvFile, setCsvFile] = useState(null);

  function handleFileUpload(e) {
    const file = e.target.files[0];
    setCsvFile(file);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (onUpload) {
      onUpload(csvFile);
    }
  }

  return (
    <InputWrapper action="/upload" method="post" enctype="multipart/form-data" onSubmit={handleSubmit}>
      <FileInput
        id="fileInput"
        type="file"
        accept=".csv"
        onChange={handleFileUpload}
      />
      <SubmitButton type="submit">
        Upload
      </SubmitButton>
    </InputWrapper>
  );
}
