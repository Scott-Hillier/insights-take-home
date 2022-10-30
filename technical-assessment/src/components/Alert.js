import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
// import DialogContent from "@material-ui/core/DialogContent";
// import DialogContentText from "@material-ui/core/DialogContentText";
import { DialogTitle } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { setAlertState } from "../features/alert";

const Alert = () => {
  const dispatch = useDispatch();

  const alert = useSelector((state) => state.alert.value.alert);

  const handleToClose = () => {
    dispatch(setAlertState({ alert: false }));
  };

  console.log(alert);

  return (
    <div>
      <Dialog
        open={alert}
        onClose={() => {
          dispatch(handleToClose);
        }}
      >
        <DialogTitle>Woof Invalid Action Woof</DialogTitle>
        {/* <DialogContent>
          <DialogContentText>Woof Invalid Action Woof</DialogContentText>
        </DialogContent> */}
        <DialogActions>
          <Button onClick={handleToClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Alert;
