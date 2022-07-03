import * as React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { isClose } from "../../../redux/reducers/openNewTaskReducer";
import {
  taskNameReducer,
  priorityReducer,
  statusReducer,
  deadlineReducer,
  descriptionReducer,
} from "../../../redux/reducers/taskReducer";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { addTodo } from "../../../redux/reducers/todoListReducer";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  const dispatch = useDispatch();

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function AddTaskModal({ openModal }) {
  const [taskName, setTaskName] = useState("");
  const [priority, setPriority] = useState("high");
  const [status, setStatus] = useState("todo");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    const task = {
      taskName,
      priority,
      status,
      description,
    };
    dispatch(addTodo(task));
    dispatch(isClose());
  };

  const handleClose = () => {
    dispatch(isClose());
  };

  return (
    <div>
      <BootstrapDialog
        fullWidth
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={openModal}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          New Task
        </BootstrapDialogTitle>
        <DialogContent
          dividers
          sx={{ display: "flex", flexDirection: "column", gap: "2rem" }}
        >
          <TextField
            label="Task Name"
            variant="outlined"
            onChange={(e) => setTaskName(e.target.value)}
          />
          <Box sx={{ display: "flex", gap: "2rem" }}>
            <FormControl fullWidth>
              <InputLabel id="priority-label">Priority</InputLabel>
              <Select
                labelId="priority-label"
                id="selectPriority"
                value={priority}
                label="priority"
                onChange={(e) => setPriority(e.target.value)}
              >
                <MenuItem value="low">Low</MenuItem>
                <MenuItem value="medium">Medium</MenuItem>
                <MenuItem value="high">High</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="status-label">Status</InputLabel>
              <Select
                labelId="status-label"
                id="selectStatus"
                value={status}
                label="Status"
                onChange={(e) => setStatus(e.target.value)}
              >
                <MenuItem value="todo">Todo</MenuItem>
                <MenuItem value="doing">Doing</MenuItem>
                <MenuItem value="done">Done</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <TextField
            multiline
            rows={3}
            label="Task Description"
            variant="outlined"
            onChange={(e) => setDescription(e.target.value)}
          />
        </DialogContent>
        <DialogActions
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Button onClick={handleClose} variant="outlined">
            Cancel
          </Button>
          <Button variant="contained" autoFocus onClick={handleAddTask}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
