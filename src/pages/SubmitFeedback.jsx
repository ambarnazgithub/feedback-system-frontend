import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";
import { toast } from "react-toastify";

const SubmitFeedback = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const courseName = location.state?.course || "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: courseName,
    rating: 0,
    comments: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/feedback", formData);
      toast.success("Feedback submitted!");
      navigate("/thankyou");
    } catch (err) {
      toast.error("Error submitting feedback");
    }
  };

  const handleStarClick = (index) => {
    setFormData({ ...formData, rating: index + 1 });
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 via-white to-yellow-200 p-6">
        <form
          onSubmit={handleSubmit}
          className="max-w-md w-full p-8 bg-white rounded-xl shadow-md space-y-5"
        >
          <h2 className="text-2xl font-extrabold text-center text-gray-900">
            Feedback Form
          </h2>

          <input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full p-3 border rounded-lg text-gray-800"
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full p-3 border rounded-lg text-gray-800"
            required
          />
          <input
            type="text"
            value={formData.course}
            readOnly
            className="w-full p-3 border rounded-lg bg-gray-100 text-gray-600 cursor-not-allowed"
          />

          <div>
            <p className="font-semibold text-gray-700 mb-1">
              Rate the teacher's performance
            </p>
            <div className="flex text-2xl space-x-1">
              {[...Array(5)].map((_, index) => (
                <span
                  key={index}
                  onClick={() => handleStarClick(index)}
                  className={`cursor-pointer ${
                    formData.rating > index ? "text-yellow-400" : "text-gray-300"
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
          </div>

          <textarea
            placeholder="Add your comments..."
            value={formData.comments}
            onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
            className="w-full p-3 border rounded-lg text-gray-800"
            rows={3}
          />

          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={() => navigate("/student/courses")}
              className="text-blue-500 font-medium hover:underline"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SubmitFeedback;
