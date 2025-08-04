import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function LoginPage() {
  return (
    <div className="flex w-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-lg">
      {/* Background Image Section (Left Side) */}
      <div
        className="hidden lg:block lg:w-1/2 bg-cover bg-center min-h-[300px]"
        style={{
          backgroundImage: "url('https://i.ibb.co/N2LC3Ddw/bb.webp')",
        }}
      ></div>

      {/* Form Section (Right Side) */}
      <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
        {/* Logo */}
        <div className="flex justify-center mx-auto">
          <Image src="/assets/logo.svg" alt="Logo" width={80} height={50} />
        </div>

        {/* Welcome Text */}
        <p className="mt-3 text-xl text-center text-gray-700 font-semibold">
          Welcome back!
        </p>

        {/* Google Sign-in Button */}
        <button className="flex items-center justify-center w-full mt-6 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-300">
          <div className="px-4 py-2">
            <svg className="w-6 h-6" viewBox="0 0 40 40">
              {/* Optional: Add Google Icon Paths */}
              <circle cx="20" cy="20" r="20" fill="#EA4335" />
            </svg>
          </div>
          <span className="w-full text-center py-3 font-medium text-gray-700">
            Sign in with Google
          </span>
        </button>

        {/* Divider */}
        <div className="flex items-center justify-between mt-6">
          <span className="w-1/5 border-b border-gray-300"></span>
          <span className="text-xs text-gray-400 uppercase">
            or login with email
          </span>
          <span className="w-1/5 border-b border-gray-300"></span>
        </div>

        {/* Email Field */}
        <div className="mt-4">
          <label
            className="block mb-2 text-sm font-medium text-gray-600"
            htmlFor="email"
          >
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>

        {/* Password Field */}
        <div className="mt-4">
          <div className="flex justify-between">
            <label
              className="block mb-2 text-sm font-medium text-gray-600"
              htmlFor="password"
            >
              Password
            </label>
            <a href="#" className="text-xs text-blue-500 hover:underline">
              Forgot Password?
            </a>
          </div>
          <input
            id="password"
            type="password"
            placeholder="••••••••"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>

        {/* Sign In Button */}
        <div className="mt-6">
          <button className="w-full px-6 py-3 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300">
            Sign In
          </button>
        </div>

        {/* Sign Up Link */}
        <div className="flex items-center justify-between mt-6">
          <span className="w-1/5 border-b border-gray-300"></span>
          <p className="text-sm text-gray-600">
            New to here? place{" "}
            <Link href="/register" className="text-blue-500 hover:underline">
              Register
            </Link>
          </p>
          <span className="w-1/5 border-b border-gray-300"></span>
        </div>
      </div>
    </div>
  );
}
