import React, { useState } from 'react';
import {Stack, TextField} from '@mui/material';

const TextFieldmui = () => {
  const [name, setName] = useState("");
  console.log(name)
  return (
    <Stack sx={{margin:10}} spacing={3} direction="row">
    <TextField type={'email'} label="Email" variant='outlined' />
    <TextField type={'text'} label="Name" variant='standard' onChange={ (e) => {setName(e.target.value) }} />
    <TextField label="city" variant='filled' />
    <TextField type={'password'} placeholder='password' variant='outlined' />
    </Stack>
  )
}

export default TextFieldmui