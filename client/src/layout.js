import React from "react";
import { Stack } from '@mui/material';
import { Outlet } from "react-router-dom"; // <-- important
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function Layout() {
  return (
    <Stack
      spacing={0}
      width="100%"
      alignItems="center"
      minHeight="100vh"
      justifyContent="space-between"
    >
      <Navbar />
      
      {/* This replaces props.children */}
      <Outlet />

      <Footer />
    </Stack>
  );
}

export default Layout;
