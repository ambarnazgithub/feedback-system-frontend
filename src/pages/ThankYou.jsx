import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const ThankYou = () => {
  return (
    <div className="flex flex-col min-h-screen bg-green-50">
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-green-700 font-bold">
          Thank you for your feedback!
        </h1>
      </main>

      <Footer />
    </div>
  );
};

export default ThankYou;

