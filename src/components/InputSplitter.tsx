import { useState } from "react";

import { styled } from "@mui/material";

import Characters from "@/components/Characters";
import Footer from "@/components/Footer";
import InputField from "@/components/Input";

const InputSplitter = () => {
  const [text, setText] = useState("");

  const handleInputChange = (value: string) => {
    setText(value);
  };

  return (
    <InputSplitterContainer>
      <InputField onChange={handleInputChange} />
      <Characters value={text} />
      <Footer />
    </InputSplitterContainer>
  );
};

const InputSplitterContainer = styled("div")`
  width: 60vw;
  height: 50vh;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  border-radius: 50px;
  background: #2a3383;
  box-shadow:
    20px 20px 50px #151940,
    -20px -20px 50px #3f4dc6;
`;

export default InputSplitter;
