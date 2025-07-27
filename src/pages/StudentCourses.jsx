import { useState } from "react";
import courseData from "../data/courseData";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";


import { User, Clock, Pencil } from "lucide-react";

const StudentCourses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const navigate = useNavigate();


  const cardColors = [
    "bg-blue-200",
    "bg-yellow-200",
    "bg-green-200",
    "bg-pink-200",
    "bg-purple-200",
    "bg-orange-200",
    "bg-teal-200",
    "bg-red-200",
    "bg-lime-200",
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-blue-200 via-white to-yellow-200 p-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10 flex items-center justify-center gap-2">
        
          Submit Feedback by Course
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {courseData.map((item, index) => (
            <div
              key={item.id}
              className={`${cardColors[index % cardColors.length]} p-5 rounded-xl shadow-md transition hover:shadow-lg`}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.course}</h3>

              <p className="text-gray-700 flex items-center gap-2 mb-1">
                <User size={16} /> Teacher: {item.teacher}
              </p>

              <p className="text-gray-700 flex items-center gap-2 mb-3">
                <Clock size={16} /> Duration: {item.duration}
              </p>

              <button
                onClick={() =>
                  navigate("/submit-feedback", { state: { course: item.course } })
                }
                className="inline-flex items-center gap-1 text-sm text-blue-600 font-medium hover:underline"
              >
                <Pencil size={16} />
                Submit Feedback
              </button>

              {/* Optional inline form if needed */}
              {selectedCourse?.course === item.course && (
                <div className="mt-4">
                  <FeedbackForm
                    prefill={selectedCourse}
                    onClose={() => setSelectedCourse(null)}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
       
      </div>
       <Footer />
      
    </>
  );
};

export default StudentCourses;
