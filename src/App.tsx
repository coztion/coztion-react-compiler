import { styled } from "@mui/material";

import InputSplitter from "./components/InputSplitter";

import "@/App.css";

const App = () => {
  return (
    <AppContainer>
      <InputSplitter />
    </AppContainer>
  );
};

const AppContainer = styled("div")`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #2a3383;
`;

export default App;
