import React from "react";
import { Route, Routes } from "react-router-dom";

import ForgotPassword from "./Login/ForgotPassword";
import SignIn from "./Login/SignIn";
import SignUp from "./Login/SignUp";

function Admin() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
    </Routes>
  );
}

export default Admin;
