import React from "react";

const Footer = () => {
  return (
      <footer className="bg-blue-600 text-white px-6 py-4 shadow-inner mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-sm">
        <p className="text-center md:text-left">
          © {new Date().getFullYear()} Feedback System — All rights reserved.
        </p>

        <div className="flex gap-4">
          <span>Privacy Policy</span>
          <span>Terms of Use</span>
          <span>Help</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

