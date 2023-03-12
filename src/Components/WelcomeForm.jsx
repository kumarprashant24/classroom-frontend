import React, { useEffect, useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";

export default function WelcomeForm({user,toggleRefresh}) {
    useEffect(()=>{
    console.log(user);
    },[])
    const [inputs,setInputs] = useState({
        firstname:"",
        lastname:"",
    });
    const OnInputChange = e=>{
        setInputs({...inputs,[e.target.name]:e.target.value})
      };

    const updateUser = async() =>{
        console.log(inputs);
        await axios.post("http://localhost:5000/api/user/updateDetails",{user_id:user._id,firstname:inputs.firstname,lastname:inputs.lastname})
        .then(res=>toggleRefresh()).catch(err=>console.log(err))
    }

    const inputpic = async (e) => {
        const file = e.target.files[0];
        const fd = new FormData();
        fd.append('file', file);
        fd.append('upload_preset', 'ml_default');
        fd.append('cloud_name', 'buzzz-social-app');
        const cloud_url = await axios.post("https://api.cloudinary.com/v1_1/buzzz-social-app/image/upload", fd)

        await axios.post("http://localhost:5000/api/user",{user_id:user._id,profile_pic:cloud_url.data.secure_url})
        .then(res=>toggleRefresh()).catch(err=>console.log(err))
      };
  return (
    <div>
      <div className="d-flex justify-content-center">
        <div className=" position-relative">
         <div className="">
         {user.profile_pic === "" ?
         <AccountCircleIcon sx={{ fontSize: 120 }} />
        :<img src={user.profile_pic} className="display-pictue round-frame"/> 
        }
          <div className="position-absolute  bottom-0 end-0 round-frame mb-2 me-2" style={{background:"#f5f5f5"}}>
            <input
              type="file"
              className="camera"
                onChange={(e) => inputpic(e)}
            />
          </div>
         </div>
        </div>
      </div>
      <div className="mb-3 mt-4">
        <TextField
          id="outlined-basic"
          label="Firstname"
          variant="outlined"
          name="firstname"
          value={inputs.firstname}
          onChange={(e)=>OnInputChange(e)}
          fullWidth
        />
      </div>
      <div className="mb-3">
        <TextField
          id="outlined-basic"
          label="Lastname"
          variant="outlined"
          name="lastname"
          value={inputs.lastname}
          onChange={(e)=>OnInputChange(e)}
          fullWidth
        />
      </div>
      <Button
        variant="outlined"
        size="large"
        className="w-100"
        onClick={updateUser}
      >
        Save
      </Button>
    </div>
  );
}
