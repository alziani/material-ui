import React from 'react';
import { Button, Stack } from '@mui/material';

const Buttonsmui = () => {
  return (<>
    <Stack spacing={3} direction="row" sx={{margin:5, padding:10}}>
        <Button variant='text' > Text </Button>
        <Button variant='outlined'> outlined </Button>
        <Button variant='contained'> contained </Button>
    </Stack>
    <Stack spacing={3} direction="row" sx={{margin:5, padding:10}}>
        <Button size='small' variant='text' > Text </Button>
        <Button size='medium' variant='outlined'> outlined </Button>
        <Button  size='large' variant='contained'> contained </Button>
    </Stack>
    <Button  onClick={()=>alert("Button clicked") } sx={{margin: "auto"}} size='large' variant='contained'> Click me </Button>
    </>
  )
}

export default Buttonsmui