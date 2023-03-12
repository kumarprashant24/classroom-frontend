import React, { useEffect } from "react";
import AdminScreen from "./AdminScreen";
import FacultyScreen from "./FacultyScreen";
import InstituteScreen from "./InstituteScreen";
import StudentScreen from "./StudentScreen";
import WelcomePopup from "./WelcomePopup";

export default function Dashboard({ user,toggleRefresh }) {
 

  return (
<>
{!user.first_tour?
    <WelcomePopup user={user} toggleRefresh={toggleRefresh}/>
:""
}
<div>
          {user.userIdentification === "Administrator" ? (
            <AdminScreen />
          ) : user.userIdentification === "Institution" ? (
            <InstituteScreen />
          ) : user.userIdentification === "Faculty" ? (
            <FacultyScreen />
          ) : (
            <StudentScreen />
          )}
        </div>
</>
   
  );
}
