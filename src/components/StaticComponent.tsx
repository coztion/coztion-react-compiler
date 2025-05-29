import { styled } from "@mui/material";

export default function StaticComponent() {
  return (
    <StaticComponentContainer>React Compiler Test</StaticComponentContainer>
  );
}

const StaticComponentContainer = styled("div")`
  color: white;
  font-weight: 900;
`;
