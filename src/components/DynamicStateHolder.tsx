import { styled } from "@mui/material";

interface DynamicStateHolderProps {
  value: string;
}

const DynamicStateHolder = ({ value }: DynamicStateHolderProps) => {
  const isEmpty = value.trim() === "";

  return (
    <DynamicStateHolderContainer $showBorder={!isEmpty}>
      {value}
    </DynamicStateHolderContainer>
  );
};

interface DynamicStateHolderContainerProps {
  $showBorder?: boolean;
}

const DynamicStateHolderContainer = styled(
  "div",
)<DynamicStateHolderContainerProps>(({ $showBorder }) => ({
  color: "white",
  margin: "0.5rem",
  padding: "0.5rem",
  border: $showBorder ? "1px solid white" : "none",
  borderRadius: "0.5rem",
}));

export default DynamicStateHolder;
