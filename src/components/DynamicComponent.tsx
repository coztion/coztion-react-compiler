import { styled } from "@mui/material";

import DynamicStateHolder from "./StaticStateHolder";

interface DynamicComponentProps {
  dynamicValue: string;
}

const DynamicComponent = ({ dynamicValue }: DynamicComponentProps) => {
  const splittedValues = dynamicValue.split("");

  return (
    <DynamicComponentContainer>
      {splittedValues.map((splittedValue, index) => (
        <DynamicStateHolder key={index} value={splittedValue} />
      ))}
    </DynamicComponentContainer>
  );
};

const DynamicComponentContainer = styled("div")`
  width: 100%;

  display: flex;
  justify-content: center;

  flex-wrap: wrap;
  overflow: scroll;
`;

export default DynamicComponent;
