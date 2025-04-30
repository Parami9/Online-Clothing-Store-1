import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Layout from "../pages/Layout";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    batchNo: "",
    productName: "",
    qty: "",
    price:"",
    category: "",
    Type:"",
    DateofAdded:"",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        // Send POST request to backend API to add new production stock
        await axios.post(
          "http://localhost:3000/api/v1/products/addPro",
          formData
        );
        setSuccessMessage("Stock added successfully.");
        setErrorMessage("");
        // Clear form fields after successful submission
        setFormData({
          batchNo: "",
          productName: "",
          qty: "",
          price:"",
          category: "",
          Type:"",
          DateofAdded:"",
        });
      } catch (error) {
        console.error("Error adding stock:", error);
        setErrorMessage("Error adding stock. Please try again later.");
        setSuccessMessage("");
      }
    }
  };

  const validateForm = () => {
    const {batchNo, productName, qty, price, category, Type, DateofAdded } = formData;
    if (!batchNo || !productName || !qty || !price || !category || !Type || !DateofAdded) {
      setErrorMessage("Please fill in all fields.");
      return false;
    }
    
   if (isNaN(qty) || qty <= 0) {
      setErrorMessage("Please provide a valid quantity.");
      return false;
    } 
    // Add more validation rules as needed
    return true;
  };

  return (
    <Layout>
      <div className="max-w-md mx-auto mt-10 p-6 transparent rounded-lg shadow-xl">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Add Product
        </h2>
        {successMessage && (
          <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4 rounded-md">
            {successMessage}
          </div>
        )}
        {errorMessage && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4 rounded-md">
            {errorMessage}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-black-700 text-sm font-bold mb-2">
              Batch No:
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="batchNo"
              value={formData.batchNo}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-black-700 text-sm font-bold mb-2">
              Product Name:
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="productName"
              value={formData.productName}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
          
            
          <div className="mb-4">
            <label className="block text-black-700 text-sm font-bold mb-2">
              Price :
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </div>
          </div>
          <div className="mb-4">
            <label className="block text-black-700 text-sm font-bold mb-2">
            Category:
            </label>
            <select
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Kids">Kids</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-black-700 text-sm font-bold mb-2">
            Type:
            </label>
            <select
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="Type"
              value={formData.Type}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="Top">Top</option>
              <option value="Low">Low</option>
            </select>
          </div>
          
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add Product
          </button>
          <button
            onClick={() => navigate("/Pro")}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Back to home
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default AddProduct;
