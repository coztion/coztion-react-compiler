import { styled } from "@mui/material";

interface InputFieldProps {
  onChange: (value: string) => void;
}

const InputField = ({ onChange }: InputFieldProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    onChange(value);
  };

  return (
    <InputContainer>
      <StyledTextField onChange={handleInputChange} />
    </InputContainer>
  );
};

const InputContainer = styled("div")`
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

export default InputField;
