import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios"
import { toast } from "react-toastify";
export default function Login({fetchUser}) {
  const [loginPerson, setLoginPerson] = useState("");
  const [inputs,setInputs] = useState({
    User_id:"",
    Password:"",
 
});
const OnInputChange = e=>{
       
  setInputs({...inputs,[e.target.name]:e.target.value})
   

};

  const handleChange = (e) => {
    setLoginPerson(e.target.value);
  };

  const LocalAuth = (e) => {
    e.preventDefault();
    let isValid = validationCheck();
    if(isValid!=='ready to go...')
    toast.warn(isValid)
    else
    loginUser();
  
  };
  const validationCheck = ()=>{
     if(loginPerson==='')
     return "please select who are you?"
     else if(inputs.User_id ==="")
     return "please enter user id"
     else if(inputs.Password ==="")
     return "please enter password"
     else{
      return "ready to go..."
     }
  }

  const loginUser = () =>{
    axios
    .post("http://localhost:5000/api/auth/login",
      {
        username: inputs.User_id,
        password: inputs.Password,
        userIdentification:loginPerson
      },
      { withCredentials: true }
    )
    .then((res) => {
      fetchUser();
    })
    .catch((err) => toast.error("Invalid Credentials"));
  }
  return (
    <div
      className="bg-white d-flex align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="container w-50">
        <div className="mb-3">
          <FormControl variant="standard" fullWidth>
            <InputLabel id="demo-simple-select-label">Who are you?</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={loginPerson}
              label=""
              onChange={(e) => handleChange(e)}
            >
              <MenuItem value={"Administrator"}>Administrator</MenuItem>
              <MenuItem value={"Institution"}>Institution</MenuItem>
              <MenuItem value={"Faculty"}>Faculty</MenuItem>
              <MenuItem value={"Student"}>Student</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="mb-3">
          <TextField
            id="outlined-basic"
            label="User id"
            variant="outlined"
            name="User_id"
            value={inputs.User_id}
            onChange={(e)=>OnInputChange(e)}
            fullWidth
          />
        </div>
        <div className="mb-3">
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            name="Password"
            value={inputs.Password}
            onChange={(e)=>OnInputChange(e)}
            fullWidth
          />
        </div>
        <div className="mb-3 float-end" style={{ color: "#1976d2" }}>
          <label>Forgot Password</label>
        </div>
        <Button
          variant="outlined"
          size="large"
          className="w-100"
          onClick={LocalAuth}
        >
          LOG IN
        </Button>
      </div>
    </div>
  );
}
