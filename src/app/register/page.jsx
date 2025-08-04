"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import RegisterForm from "./component/RegisterForm";

export default function RegisterPage() {
  return (
    <div className="flex w-full max-w-5xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Left Side Banner */}
      <div
        className="hidden lg:block lg:w-1/2 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://i.ibb.co/CKzDQ5LV/social.jpg')",
        }}
      ></div>

      {/* Right Side Form */}
      <div className="w-full px-6 py-8 md:px-10 lg:w-1/2 flex flex-col justify-center">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <Image src="/assets/logo.svg" alt="Logo" width={80} height={50} />
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
          Create an account
        </h2>

        {/* Google Sign Up */}
        <button className="flex items-center justify-center w-full mb-4 text-gray-700 border rounded-lg hover:bg-gray-100 transition-colors duration-300">
          <div className="px-4 py-2">
            <svg className="w-6 h-6" viewBox="0 0 40 40">
              {/* Google Icon */}
            </svg>
          </div>
          <span className="w-5/6 px-4 py-3 font-bold text-center">
            Sign up with Google
          </span>
        </button>

        {/* Separator */}
        <div className="flex items-center justify-between my-4">
          <span className="w-1/5 border-b border-gray-300 lg:w-1/4"></span>
          <span className="text-xs text-gray-500 uppercase">or</span>
          <span className="w-1/5 border-b border-gray-300 lg:w-1/4"></span>
        </div>

        {/* Form */}
        <RegisterForm />

        {/* Already have an account */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
