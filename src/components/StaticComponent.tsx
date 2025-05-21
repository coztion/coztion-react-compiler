import { styled } from "@mui/material";

const StaticComponent = () => {
  return (
    <StaticComponentContainer>React Compiler Test</StaticComponentContainer>
  );
};

const StaticComponentContainer = styled("div")`
  color: white;
  font-weight: 900;
`;

export default StaticComponent;
