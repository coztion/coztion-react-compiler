import { styled } from "@mui/material";

interface StateChangerProps {
  onChange: (value: string) => void;
}

export default function StateChanger({ onChange }: StateChangerProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    onChange(value);
  };

  return (
    <StateChangerContainer>
      <StyledTextField onChange={handleChange} />
    </StateChangerContainer>
  );
}

const StateChangerContainer = styled("div")`
  width: 100%;

  padding: 25px;
`;

const StyledTextField = styled("input")`
  width: 100%;
  height: 50px;

  padding: 10px;
  color: white;
  border-color: transparent;
  border-radius: 50px;
  background: #2a3383;
  box-shadow:
    inset 20px 20px 50px #151940,
    inset -20px -20px 50px #3f4dc6;

  :focus {
    border-color: black;
  }
`;
