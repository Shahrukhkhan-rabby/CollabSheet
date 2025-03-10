import React from "react";

const AdminPanel = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-semibold text-center">Admin Panel</h1>

      {/* User Management Section */}
      <div className="mt-6 bg-white shadow-md rounded-md p-4">
        <h2 className="text-xl font-semibold">Manage Users</h2>
        <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
          Add New User
        </button>
        <button className="mt-4 ml-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
          Remove User
        </button>
      </div>

      {/* User Activity */}
      <div className="mt-6 bg-white shadow-md rounded-md p-4">
        <h2 className="text-xl font-semibold">User Activity</h2>
        <p>User's last activity: Editing a spreadsheet</p>
        <p>Hours Worked: 40</p>
        <p>Last Login: 2 hours ago</p>
      </div>
    </div>
  );
};

export default AdminPanel;
