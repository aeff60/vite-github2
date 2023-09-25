import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function FinishIcon() {
  const [open, setOpen] = React.useState(false);
  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    setOpen(true);
    setChecked(!checked);
  };

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Stack spacing={2} sx={{ width: '10%' }}>
      <Button variant="text" onClick={handleClick}>
        { checked ? <CheckCircleIcon sx={{ color: 'green'}} /> : <RadioButtonUncheckedIcon /> }
      </Button>
      <Snackbar open={open} autoHideDuration={1500} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          This is a success message!
        </Alert>
      </Snackbar>
    </Stack>
  );
}