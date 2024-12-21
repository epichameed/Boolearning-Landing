import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layouts/Layout";
import Home from "./Pages/Home";
import Demo from "./Pages/Demo";
import FAQs from "./Pages/FAQs";
import Plans from "./Pages/Plans";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Booking from "./Pages/Booking";

function App() {
  return (
    <Routes>
      <Route path="/app" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="app/demo" element={<Demo />} />
        <Route path="app/plans" element={<Plans />} />
        <Route path="app/booking" element={<Booking />} />
        <Route path="app/faqs" element={<FAQs />} />
        <Route path="app/about" element={<About />} />
        <Route path="app/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
