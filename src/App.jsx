import React from 'react';
import {Routes, Route,} from "react-router-dom";
import {Box} from "@mui/material";
import { Dummy, HomePage, Navbar, Snow } from "./components";

const App = () => (
  <>
    <Box sx={{ minHeight: "100vh", backgroundColor: "#000" }}>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/snow" element={<Snow />} />
          <Route path="/creative-idea-component" element={<Dummy />} />
        </Routes>
      </div>
    </Box>
  </>
);

export default App
