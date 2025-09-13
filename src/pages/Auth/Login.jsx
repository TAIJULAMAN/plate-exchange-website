import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { jwtDecode } from "jwt-decode";
import { useLogInMutation } from "../../Redux/api/authApi";
import { setUser } from "../../Redux/Slice/authSlice";
import { useDispatch } from "react-redux";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [logIn, { isLoading,error }] = useLogInMutation();

  //  const user = useSelector();
  // const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: !email ? "Email is required!" : "Password is required!",
      });
      return;
    }
    const loginData = { email, password };
    try {
      const response = await logIn(loginData).unwrap();
      // console.log(response);

      if (response?.success && response?.data?.accessToken) {
        // Decode JWT token to check user role first
        try {
          const decodedToken = jwtDecode(response?.data?.accessToken);
          
          // Check if user role is admin - prevent login
          if (decodedToken.role === "admin") {
            Swal.fire({
              icon: "error",
              title: "Access Denied",
              text: "Admin accounts are not allowed to login to this application. Please use a regular user account.",
              confirmButtonText: "Close",
              confirmButtonColor: "#dc2626"
            });
            return; // Exit early, don't proceed with login
          }
        } catch (decodeError) {
          console.error("Error decoding token:", decodeError);
          // If we can't decode the token, we'll proceed with normal login
        }

        // Only proceed with login if user is not admin
        localStorage.setItem("token", response?.data?.accessToken);
        dispatch(
          setUser({
            user: response?.data || {},
            token: response?.data?.accessToken,
          })
        );

        Swal.fire({
          icon: "success",
          title: "Login successful!",
          text: "You are now logged in.",
        });
        
        navigate("/");
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Login failed!",
        });
      }
    } catch (error) {
      console.log(error);

      // toast.error(` ${error?.data?.message || "Login failed!"}`);
    }
  };

  // if (isLoading) {
  //     return <h1>loading .............</h1>
  // }

  // if (error) {
  //     console.log(error);
  // }

  return (
    <section className="flex items-center justify-center min-h-screen px-5 md:px-0 py-16">
      <div className="w-full container mx-auto">
        <div className="mb-5 text-center space-y-2">
          <h1 className="text-5xl font-bold text-gray-900 text-center">
            Log in to your account
          </h1>
          <p>
            Don't have an account?{" "}
            <Link to="/sign-up" className="font-medium text-gray-600 underline">
              Register here
            </Link>
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-5 space-y-5 max-w-xl mx-auto"
        >
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-bold mb-2 text-gray-700"
            >
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-bold mb-2 text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent
                       rounded-md font-medium text-white cursor-pointer
                       bg-[#00823A]
                       focus:outline-none"
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Log In"}
          </button>

          <div className="flex items-center justify-between w-full">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="remember"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                defaultChecked
              />
              <label
                htmlFor="remember"
                className="text-sm text-gray-700 cursor-pointer"
              >
                Remember password
              </label>
            </div>

            <Link
              to="/forget-password"
              className="text-sm text-gray-600 hover:text-gray-800 underline"
            >
              Forgot password?
            </Link>
          </div>
          {error && (
            <p className="text-red-500 text-sm mt-2">
              {error?.data?.message || "Login failed!"}
            </p>
          )}
        </form>
      </div>

    </section>
  );
}
