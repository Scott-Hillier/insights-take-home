import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import { DialogTitle } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { setAlertState } from "../features/alert";

const Alert = () => {
  const dispatch = useDispatch();

  const alert = useSelector((state) => state.alert.value.alert);

  const handleToClose = () => {
    dispatch(setAlertState({ alert: false }));
  };

  return (
    <div>
      <Dialog
        open={alert}
        onClose={() => {
          dispatch(handleToClose);
        }}
      >
        <DialogTitle>Woof! Invalid Action Woof!</DialogTitle>
        <DialogActions id="alert-close">
          <Button onClick={handleToClose} id="alert-close-button">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Alert;
