import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
export default function Login() {
  return (
<div className='bg-white d-flex align-items-center' style={{height:"100vh"}}>
<div className='container w-50'>
<div className="mb-3">
    <TextField id="outlined-basic" label="Email" variant="outlined" className='w-100'/>
  </div>
  <div className="mb-3">
  <TextField id="outlined-basic" label="Password" variant="outlined" className='w-100'/>
  </div>
  <Button variant="outlined" size="large" className='w-100'>LOG IN</Button>
</div>
</div>
  )
}
