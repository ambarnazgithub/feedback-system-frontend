import { Routes, Route } from "react-router-dom";






import StudentCourses from "./pages/StudentCourses";
import ThankYou from "./pages/ThankYou";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedRoute from "./pages/ProtectedRoute";
import Home from "./pages/Home";
import AdminLoginForm from "./components/AdminLoginForm";
import SubmitFeedback from "./pages/SubmitFeedback";




function App() {
  return (
    <Routes>
      //<Route path="/" element={<Home />} />
      <Route path="/thankyou" element={<ThankYou />} />
      <Route path="/admin/login" element={<AdminLoginForm />} />
      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute>
            <AdminDashboard/>
          </ProtectedRoute>
        }
      />
      <Route path="/student/courses" element={<StudentCourses />} />
       <Route path="/submit-feedback" element={<SubmitFeedback />} /> 
    </Routes>
  );
}
export default App;