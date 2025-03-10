import React from "react";

const UserPanel = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold text-center">User Panel</h1>
      <div className="mt-6 bg-white shadow-md rounded-md p-4">
        <h2 className="text-xl font-semibold">Your Work Details</h2>
        <p>Hours Worked: 30 hours</p>
        <p>Work History: Spreadsheet updates, data entry</p>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          View Detailed History
        </button>
      </div>
    </div>
  );
};

export default UserPanel;
