import Navbar from "../components/Navbar";
const ThankYou = () => {
  return (
    <>
    <Navbar />
    <div className="flex items-center justify-center h-screen bg-green-50">
      <h1 className="text-3xl text-green-700 font-bold">Thank you for your feedback!</h1>
    </div>
    </>
  );
};

export default ThankYou;
