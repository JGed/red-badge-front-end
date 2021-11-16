import React, { useState } from 'react';
import { createReview } from '../api';
import { Redirect } from 'react-router';

import {
    Modal,
    TextField,
    Button,
    Box,
    MenuItem,
    IconButton,
    Grid,
  } from "@mui/material";
  import CloseIcon from "@mui/icons-material/Close";
const ratings = [
    {value: 1, label: 1},
    {value: 2, label: 2},
    {value: 3, label: 3},
    {value: 4, label: 4},
    {value: 5, label: 5},
]
const ReviewCreate = (props) => {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [rating, setRating] = useState('');
    const [error, setError] = useState(false);

    const handleClose = () => {
        props.setOpen(false);
    }

    const handleCreateClick = async e => {
        try {
            const { status, json } = await createReview(props.auth, {
                title: title,
                text: text,
                rating: rating,
                gameId: props.gameId
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
          console.log('caught an error');
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
          width: "800",
          height: "800",
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

        <h2>New Review</h2>

        <TextField
          sx={{ my: 1, mr: 2, width: "25ch" }}
          onChange={(e) => setTitle(e.target.value)}
          label="Title"
          color="common"
          required
          value={title}
          variant="filled"
          fullWidth
        ></TextField>
        <TextField
          fullWidth
          sx={{ my: 1 }}
          onChange={(e) => setText(e.target.value)}
          label="Review"
          value={text}
          multiline
          rows={10}
          required
          color="info"
          variant="filled"
        />
        <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
<TextField
          select
          label="Rating"
          value={rating}
          onChange={e => setRating(e.target.value)}
          helperText="Rating"
          variant="filled"
        >
            {ratings.map(option => (
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                </MenuItem>
            ))}
        </TextField>
        </Box>
        <br />
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
                Post My Review
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


export default ReviewCreate;