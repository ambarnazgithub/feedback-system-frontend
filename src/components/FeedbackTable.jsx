import React, { useEffect, useState } from "react";
import API from "../services/api";
import { Trash2, Search } from "lucide-react";

const FeedbackTable = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [course, setCourse] = useState("");
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  const fetchFeedbacks = async () => {

    try {
      const res = await API.get(`/feedback?page=${page}&course=${course}`);
      setFeedbacks(res.data.feedbacks);
      setTotal(res.data.total);
    } catch (err) {
      console.error("Error fetching feedbacks:", err);
    }
  };

  useEffect(() => {
    fetchFeedbacks();
  }, [page, course]);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this feedback?")) return;
    await API.delete(`/feedback/${id}`);
    fetchFeedbacks();
  };
   const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  return (
    <div className="p-6 min-h-screen bg-gradient-to-br from-blue-200 via-white to-yellow-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">

         Feedback Records
      </h2>

      {/* Search Filter */}
      <div className="relative max-w-sm mb-6 mx-auto">
        <input
          type="text"
          placeholder="Filter by course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border text-sm bg-white rounded-lg overflow-hidden">
          <thead className="bg-blue-100 text-gray-800">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Course</th>
              <th className="p-3 text-left">Rating</th>
              <th className="p-3 text-left">Comments</th>
              <th className="p-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {feedbacks.map((f, idx) => (
              <tr key={f._id} className={idx % 2 === 0 ? "bg-white" : "bg-blue-50"}>
                <td className="p-3">{f.name}</td>
                <td className="p-3">{f.email}</td>
                <td className="p-3">{f.course}</td>
                <td className="p-3">{f.rating}</td>
                <td className="p-3">{f.comments}</td>
                <td className="p-3 text-center">
                  <button
                    onClick={() => handleDelete(f._id)}
                    className="text-red-500 hover:text-red-700"
                    title="Delete Feedback"
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-6 flex justify-center items-center space-x-4">
        <button
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
          className={`px-4 py-2 rounded-lg transition ${
            page === 1
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          Prev
        </button>
        <span className="text-gray-700 font-medium">Page {page}</span>
        <button
          disabled={page * 5 >= total}
          onClick={() => setPage((p) => p + 1)}
          className={`px-4 py-2 rounded-lg transition ${
            page * 5 >= total
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          Next
        </button>
        <button onClick={handleLogout} className=" gap-2 border-2 border-red-500 text-red-500 bg-transparent hover:bg-red-500 hover:text-white py-2 px-2   rounded-xl">Logout</button>
      </div>
    </div>
  );
};

export default FeedbackTable;
