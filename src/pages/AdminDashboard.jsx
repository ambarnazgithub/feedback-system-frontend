import React from "react";
import AdminSidebar from "../components/AdminSidebar";
import FeedbackTable from "../components/FeedbackTable";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar on the left */}
      <AdminSidebar />

      {/* Main Content */}
      <main className="flex-1  overflow-auto">
        <FeedbackTable />
      </main>
    </div>
  );
};

export default AdminDashboard;



