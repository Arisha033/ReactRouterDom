import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-4 text-center absolute bottom-0 w-full">
      <div className="container mx-auto">
        {/* Footer Content */}
        <p>&copy; {new Date().getFullYear()} Your Website. All Rights Reserved.</p>
        <p className="mt-2">Designed with React and Tailwind CSS</p>
      </div>
    </footer>
  );
};

export default Footer;