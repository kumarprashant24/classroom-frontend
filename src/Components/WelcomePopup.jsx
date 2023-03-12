import React from "react";
import WelcomeForm from "./WelcomeForm";

export default function WelcomePopup({ user,toggleRefresh }) {
  return (
    <div className=" popup w-100" style={{ height: "100vh" }}>
      <div class="card popup-card p-3">
        <div class="card-body">
          <WelcomeForm user={user} toggleRefresh={toggleRefresh} />
        </div>
      </div>
    </div>
  );
}
