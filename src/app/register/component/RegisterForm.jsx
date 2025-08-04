"use client";

import { registerUser } from "@/app/actions/auth/registerUser";
import React from "react";

export default function RegisterForm() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const password = form.password.value;
    const email = form.email.value;
    await registerUser({ name, email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Full Name */}
      <div>
        <label
          htmlFor="name"
          className="block mb-1 text-sm font-medium text-gray-600"
        >
          Full Name
        </label>
        <input
          id="name"
          type="text"
          required
          placeholder="John Doe"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block mb-1 text-sm font-medium text-gray-600"
        >
          Email Address
        </label>
        <input
          id="email"
          type="email"
          required
          placeholder="you@example.com"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Password */}
      <div>
        <label
          htmlFor="password"
          className="block mb-1 text-sm font-medium text-gray-600"
        >
          Password
        </label>
        <input
          id="password"
          type="password"
          required
          placeholder="********"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full py-3 mt-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500"
      >
        Sign Up
      </button>
    </form>
  );
}
