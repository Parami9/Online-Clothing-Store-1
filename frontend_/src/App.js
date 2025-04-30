import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct"; // Import AddProduct component
import HomePage from "./pages/HomePage";
import AdminLogin from "./pages/Adminlogin";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/Pro" element={<ProductList />} />
          <Route path="/add-Pro" element={<AddProduct />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin-dash" element={<AdminDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
