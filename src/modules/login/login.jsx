import React, { useState } from "react";
import { motion } from "framer-motion";

const NetflixLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-black bg-opacity-90 bg-cover bg-center relative"
      style={{ backgroundImage: "url('/api/placeholder/1920/1080')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Netflix logo */}
      <div className="absolute top-4 left-6 z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-red-600 text-4xl font-bold">Netflix</h1>
        </motion.div>
      </div>

      {/* Login form */}
      <motion.div
        className="bg-gray-500 bg-opacity-75 p-16 rounded-md w-full max-w-md z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-white text-3xl font-bold mb-8">Sign In</h1>

        <form className="space-y-4">
          {/* Email input */}
          <div className="relative">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setIsEmailFocused(true)}
              onBlur={() => !email && setIsEmailFocused(false)}
              className="w-full bg-gray-700 text-white p-4 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500"
            />
            <label
              htmlFor="email"
              className={`absolute text-gray-400 transition-all duration-200 ${
                isEmailFocused || email
                  ? "text-xs top-1 left-4"
                  : "text-base top-4 left-4"
              }`}
            >
              Email or phone number
            </label>
          </div>

          {/* Password input */}
          <div className="relative">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setIsPasswordFocused(true)}
              onBlur={() => !password && setIsPasswordFocused(false)}
              className="w-full bg-gray-700 text-white p-4 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500"
            />
            <label
              htmlFor="password"
              className={`absolute text-gray-400 transition-all duration-200 ${
                isPasswordFocused || password
                  ? "text-xs top-1 left-4"
                  : "text-base top-4 left-4"
              }`}
            >
              Password
            </label>
          </div>

          {/* Sign in button */}
          <motion.button
            type="submit"
            className="w-full bg-red-600 text-white py-3 rounded-md font-bold mt-6"
            whileHover={{ backgroundColor: "#E50914" }}
            whileTap={{ scale: 0.98 }}
          >
            Sign In
          </motion.button>

          {/* Remember me and need help */}
          <div className="flex items-center justify-between text-gray-400 text-sm">
            <div className="flex items-center">
              <input type="checkbox" id="remember" className="mr-2" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <a href="#" className="hover:underline">
              Need help?
            </a>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default NetflixLogin;
