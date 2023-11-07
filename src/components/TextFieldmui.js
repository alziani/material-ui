import React from 'react';
import {Stack, TextField} from '@mui/material';

const TextFieldmui = () => {
  return (
    <Stack sx={{margin:10}} spacing={3} direction="row">
    <TextField label="Email" variant='outlined' />
    <TextField label="Name" variant='standard' />
    <TextField label="city" variant='filled' />
    <TextField placeholder='password' variant='outlined' />
    </Stack>
  )
}

export default TextFieldmui