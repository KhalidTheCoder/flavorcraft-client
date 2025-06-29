import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Link } from "react-router";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser } = use(AuthContext);

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const { email, password, ...rest } = Object.fromEntries(formData.entries());

    const userProfile = {
      email,
      ...rest,
    };

    console.log(email, password, userProfile);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userProfile),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Account Has Been Created!!",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div>
      <div
        style={{ minHeight: "calc(100vh - 250px)" }}
        className="min-h-screen flex items-center justify-center bg-gray-50 p-4"
      >
        <div className="w-full max-w-md p-6 rounded-lg shadow-md bg-white text-black">
          <h2 className="mb-3 text-3xl font-semibold text-center">
            Register your account
          </h2>
          <p className="text-sm text-center font-medium text-gray-600 mb-6">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-[#A31621] font-semibold hover:underline focus:underline"
            >
              Sign in here
            </Link>
          </p>

          <div className="my-6 space-y-4">
            <button
              //   onClick={handleGoogleSignUp}
              className="btn w-full btn-outline btn-info"
            >
              <FcGoogle size={24}></FcGoogle> Sign up With Google
            </button>
          </div>

          <div className="flex items-center w-full my-4">
            <hr className="w-full border-gray-400" />
            <p className="px-2 text-gray-600 text-sm">OR</p>
            <hr className="w-full border-gray-400" />
          </div>

          <form onSubmit={handleSignUp} className="space-y-5">
            <div>
              <label htmlFor="name" className="block mb-1 text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                className="w-full px-3 py-2 border rounded-md border-gray-400 bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">
                Photo URL
              </label>
              <input
                type="text"
                id="photo"
                name="photo"
                placeholder="Your Photo URL"
                className="w-full px-3 py-2 border rounded-md border-gray-400 bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-1 text-sm font-medium">
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                className="w-full px-3 py-2 border rounded-md border-gray-400 bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label htmlFor="password" className="text-sm font-medium">
                  Password
                </label>
              </div>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="••••••"
                className="w-full px-3 py-2 border rounded-md border-gray-400 bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
              {/* {error && (
              <p className="text-red-400 text-xs font-medium mt-1">{error}</p>
            )} */}
            </div>

            <button
              type="submit"
              className="w-full py-2 font-semibold rounded-md bg-[#A31621] text-white hover:bg-[#86111a] focus:outline-none focus:ring-2 focus:ring-[#A31621]"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
