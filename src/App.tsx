import { styled } from "@mui/material";

import CompilerTester from "./components/CompilerTester";

import "@/App.css";

function App() {
  return (
    <AppContainer>
      <CompilerTester />
    </AppContainer>
  );
}

const AppContainer = styled("div")`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #2a3383;
`;

export default App;
