import React from "react";

const HomePage = ()=> {

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <h1 className="text-3xl font-semibold mb-4">
        Production Management System
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Welcome to the Production Management System. Manage your production process with
        ease!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Add Production Stock</h2>
          <p className="text-gray-600">
            Add a new stock to the system. Enter their details and save.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">View Production Stock</h2>
          <p className="text-gray-600">
            View the list of all stocks currently registered in the system.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Add new Categories</h2>
          <p className="text-gray-600">
            Add a new category of products to the system. Enter their details and save.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">View Category Details</h2>
          <p className="text-gray-600">
            View the list of all categories currently registered in the system.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
