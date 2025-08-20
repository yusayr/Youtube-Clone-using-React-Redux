import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Watch from "./pages/Watch";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { SidebarProvider } from "./context/SidebarContext"; // adjust path

function App() {
  return (
    <BrowserRouter>
      <SidebarProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/watch/:id" element={<Watch />} />
        </Routes>
      </SidebarProvider>
    </BrowserRouter>
  );
}

export default App;
