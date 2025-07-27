import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { PartyPopper, GraduationCap, Settings2 } from "lucide-react";

const Home = () => {
  const navigate = useNavigate();

  
  const handleRedirect = (role) => {
    if (role === "admin") {
      navigate("/admin/login");
    } else {
      navigate("/student/courses");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="min-h-[85vh] flex flex-col items-center justify-center bg-gradient-to-br from-blue-200 via-white to-yellow-200 px-4 py-12">
       
        <div className="bg-white rounded-xl shadow-lg p-10 text-center space-y-6 w-full max-w-md transition-all">
          
          {/* Heading with icon */}
          <h2 className="text-3xl font-bold text-[#1a1a2e] flex items-center justify-center gap-2">
            <PartyPopper size={28} className="text-blue-600" />
            Welcome to the Feedback System
          </h2>

          <p className="text-gray-900 text-sm">
            Please choose your role to continue
          </p>

          <div className="flex flex-col gap-4">
            <button
              onClick={() => handleRedirect("student")}
              className="flex items-center justify-center gap-2 border-2 border-blue-500 text-blue-500 bg-transparent hover:bg-blue-500 hover:text-white py-3 px-4 rounded-lg shadow-md transition-all text-base font-medium"
            >
              <GraduationCap size={18} />
              I am a Student
            </button>
            <button
              onClick={() => handleRedirect("admin")}
              className="flex items-center justify-center gap-2 border-2 border-gray-500 text-gray-700 bg-transparent hover:bg-gray-700 hover:text-white py-3 px-4 rounded-lg shadow-md transition-all text-base font-medium"
            >
              <Settings2 size={18} />
              I am an Admin
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
