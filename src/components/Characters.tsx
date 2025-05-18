import { styled } from "@mui/material";

import CharacterBox from "./CharacterBox";

interface CharactersProps {
  value: string;
}

const Characters = ({ value }: CharactersProps) => {
  const characters = value.split("");

  return (
    <CharactersContainer>
      {characters.map((char, index) => (
        <CharacterBox key={index} value={char} />
      ))}
    </CharactersContainer>
  );
};

const CharactersContainer = styled("div")`
  width: 100%;

  display: flex;
  justify-content: center;

  flex-wrap: wrap;
`;

export default Characters;
