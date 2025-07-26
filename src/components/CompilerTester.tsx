import { useState } from "react";

import { styled } from "@mui/material";

import DynamicComponent from "@/components/DynamicComponent";
import StateChanger from "@/components/StateChanger";
import StaticComponent from "@/components/StaticComponent";

function CompilerTester() {
  const [value, setValue] = useState("");

  const handleTextStateChange = (changedValue: string) => {
    setValue(changedValue);
  };

  return (
    <CompilerTesterContainer>
      <StateChanger onChange={handleTextStateChange} />
      <DynamicComponent dynamicValue={value} />
      <StaticComponent />
    </CompilerTesterContainer>
  );
}

const CompilerTesterContainer = styled("div")`
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

export default CompilerTester;
