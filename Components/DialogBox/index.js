export default function DialogBox() {
  const [openDialog, setOpenDialog] = useState(false);

  function handleOpenDialog() {
    setOpenDialog(!openDialog);
  }

  function handleCloseDialog() {
    setOpenDialog();
  }
}
