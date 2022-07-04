import * as React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { viewTaskIsClosed } from "../../../redux/reducers/openModalReducer";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import DatePicker, { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "./addTaskModal.style.css";

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

export default function ViewTaskModal({ openModal }) {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(viewTaskIsClosed());
  };

  const foundTask = useSelector((state) => state.todoListReducer.foundTask);

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
          View Task
        </BootstrapDialogTitle>
        <DialogContent
          dividers
          sx={{ display: "flex", flexDirection: "column", gap: "2rem" }}
        >
          <TextField
            disabled
            value={foundTask.taskName}
            label="Task Name"
            variant="outlined"
          />
          <Box sx={{ display: "flex", gap: "2rem" }}>
            <FormControl fullWidth>
              <InputLabel id="priority-label">Priority</InputLabel>
              <Select
                disabled
                value={foundTask.priority}
                labelId="priority-label"
                id="selectPriority"
                label="priority"
              >
                <MenuItem value="low">Low</MenuItem>
                <MenuItem value="medium">Medium</MenuItem>
                <MenuItem value="high">High</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="status-label">Status</InputLabel>
              <Select
                disabled
                value={foundTask.status}
                labelId="status-label"
                id="selectStatus"
                label="Status"
              >
                <MenuItem value="todo">Todo</MenuItem>
                <MenuItem value="doing">Doing</MenuItem>
                <MenuItem value="done">Done</MenuItem>
              </Select>
            </FormControl>
            <Box sx={{ height: "10rem" }}>
              <DatePicker
                disabled
                value={foundTask.deadline}
                calendar={persian}
                locale={persian_fa}
                calendarPosition="bottom-right"
              />
            </Box>
          </Box>
          <TextField
            disabled
            value={foundTask.description}
            multiline
            rows={3}
            label="Task Description"
            variant="outlined"
          />
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
