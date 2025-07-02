import React from 'react';

import errImg from "../assets/error.jpg"
import { Link } from 'react-router';

const Error = () => {
    return (
      <div className="min-h-screen bg-white flex flex-col justify-center items-center text-center p-6">
      <img
        src={errImg}
        alt="404 Not Found"
        className="w-80 h-auto mb-6"
      />
      <h1 className="text-4xl font-bold text-[#A31621] mb-2">404 - Recipe Not Found!</h1>
      <Link
        to="/"
        className="bg-[#A31621] hover:bg-[#86111a] text-white px-6 py-2 my-10 rounded-md transition"
      >
        Go Back Home
      </Link>
    </div>
    );
};

export default Error;