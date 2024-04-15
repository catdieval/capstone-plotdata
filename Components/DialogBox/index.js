import { Dialog, DialogTitle, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Button from "../Button";
import Paragraph from "../Paragraph";
import { useState } from "react";
import styled from "styled-components";
import InfoCircle from "../../utils/infoCircle";

const StyledIconButton = styled(IconButton)`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
`;

const StyledDialogTitle = styled(DialogTitle)`
  display: flex;
  justify-content: center;
`;

const DialogContainer = styled.section`
  padding: 20px;
  max-width: 500px;
`;

const InfoCircleWrapper = styled.section`
  align-items: center;
  display: flex;
  justify-content: center;
`;

export default function DialogBox() {
  const [openDialog, setOpenDialog] = useState(false);

  function handleOpenDialog() {
    setOpenDialog(true);
  }

  function handleCloseDialog() {
    setOpenDialog(false);
  }
  return (
    <>
      <Button $variant="info" onClick={handleOpenDialog} aria-label="info">
        <InfoCircleWrapper>
          <InfoCircle />
        </InfoCircleWrapper>
      </Button>
      <Dialog onClose={handleCloseDialog} open={openDialog}>
        <DialogContainer>
          <StyledIconButton aria-label="close" onClick={handleCloseDialog}>
            <CloseIcon />
          </StyledIconButton>
          <StyledDialogTitle>Information</StyledDialogTitle>
          <Paragraph $variant="start">
            A logarithmic scale (or log scale) is a way of displaying numerical
            data over a very wide range of values in a compact way. This is
            useful when the values are either very small or very large.
          </Paragraph>
          <Paragraph $variant="start">
            As opposed to a linear scale in which every unit of distance
            corresponds to adding by the same amount, on a logarithmic scale,
            every unit of length corresponds to multiplying the previous value
            by the same amount.
          </Paragraph>
        </DialogContainer>
      </Dialog>
    </>
  );
}
