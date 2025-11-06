import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
//import './css/index.css';
//You must have "[thing name] from," otherwise nothing works
import Layout from "./Layout";
import Home from "./pages/Home";
import Aboutme from "./pages/Aboutme";
import Houses from "./pages/Houses";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element ={<Layout/>}>
          <Route index element={<Home />}/>
          <Route path ="aboutme" element={<Aboutme />}/>
          <Route path="houses" element={<Houses />}/>
          <Route path="contact" element={<Contact />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

