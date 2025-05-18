import { styled } from "@mui/material";

interface CharacterBoxProps {
  value: string;
}

const CharacterBox = ({ value }: CharacterBoxProps) => {
  const isEmpty = value.trim() === "";

  return (
    <CharacterBoxContainer $showBorder={!isEmpty}>
      {value}
    </CharacterBoxContainer>
  );
};

interface CharacterBoxContainerProps {
  $showBorder?: boolean;
}

const CharacterBoxContainer = styled("div")<CharacterBoxContainerProps>(
  ({ $showBorder }) => ({
    color: "white",
    margin: "0.5rem",
    padding: "0.5rem",
    border: $showBorder ? "1px solid white" : "none",
    borderRadius: "0.5rem",
  }),
);

export default CharacterBox;
