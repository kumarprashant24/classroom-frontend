import React from "react";
import Homepage from "./Homepage";
import Login from "./Login";

export default function Landingpage({fetchUser}) {
  return (
    <div className="row gx-0">
      <div className="col-md-6">
        <Homepage />
      </div>
      <div className="col-md-6">
        <Login fetchUser={fetchUser}/>
      </div>
    </div>
  );
}
