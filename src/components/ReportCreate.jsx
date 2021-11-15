
import React, { useState } from 'react';
import { createReport } from '../api';
import { Redirect } from 'react-router';

import {
    Modal,
    TextField,
    Button,
    Box,
    MenuItem,
    IconButton,
    Grid,
    Typography,
  } from "@mui/material";
  import CloseIcon from "@mui/icons-material/Close";
const ReportCreate = (props) => {
    const [reason, setReason] = useState('');
    const [error, setError] = useState(false);

    const handleClose = () => {
        props.setOpen(false);
    }

    const handleCreateClick = async e => {
      console.log('ran create report click function')
        try {
            const { status, json } = await createReport(props.auth, {
                reason: reason,
                reviewId: props.review.id
            })
            console.log(status, json);
            if(status === 200) {
                handleClose();
            }
            else {
                setError(true);
            }
        }
        catch(error) {
          console.log('shit got fucked up');
        }
    }

    return (
        error || props.auth.role === '' ?
        <Redirect to='/' />
        : 
        <>
 <Modal
      open={props.open}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "550px",
          height: "250px",
          maxWidth: "100%",
          maxHeight: "100%",
          bgcolor: "background.paper",
          borderRadius: 5,
          boxShadow: 24,
          p: 4,
        }}
      >
        <IconButton
          aria-label="close"
          type='button'
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: "info",
          }}
        >
          <CloseIcon />
        </IconButton>

        <h2>Report</h2>

        <Typography>
          To help our moderators, please include a reason for your report.
        </Typography>
        <br />
        <TextField
          onChange={(e) => setReason(e.target.value)}
          label="Reason"
          color="common"
          required
          value={reason}
          variant="filled"
          fullWidth
          multiline
          rows={2}
        ></TextField>
        <div>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={6}>
              <Button                
                fullWidth
                id="modal-description"
                color="secondary"
                variant="contained"
                onClick={handleCreateClick}
              >
                Create Report
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button                
                fullWidth
                id="modal-description"
                color="secondary"
                variant="outlined"
                type='button'
                onClick={handleClose}
              >
                Cancel
              </Button>
            </Grid>
          </Grid>
        </div>
      </Box>
    </Modal>
        </>
    );
}


export default ReportCreate;