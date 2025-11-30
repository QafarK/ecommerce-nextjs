"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { registerUser } from "@/lib/auth/registerUser";

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    try {
      await registerUser(form.firstname, form.lastname, form.email, form.password);
      alert("User registered successfully!");
      router.push("/auth/login"); // login səhifəsinə yönləndir
    } catch (err: Error | unknown) {
      setError(err instanceof Error ? err.message : "An error occurred");
    }
  };

  return (
    <div className="flex min-h-screen">

      {/* LEFT IMAGE */}
      <div className="hidden md:block w-6/10 relative mt-16 mb-16">
        <Image
          src="/authImage.png"
          alt="Auth"
          fill
          className="object-contain object-left"
          priority
        />
      </div>

      {/* RIGHT FORM */}
      <div className="flex w-full md:w-4/10 justify-center items-center p-10 ">
        <div className="w-full max-w-sm">
          <h1 className="text-3xl font-semibold mb-2">Create an account</h1>
          <p className="text-gray-700 font-semibold mb-8">Enter your details below</p>

          {error && <p className="text-red-600 text-sm mb-4">{error}</p>}

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <input
              type="text"
              name="firstname"
              placeholder="First Name"
              value={form.firstname}
              onChange={handleChange}
              className="w-full border-b border-gray-300 focus:outline-none py-2"
            />
            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              value={form.lastname}
              onChange={handleChange}
              className="w-full border-b border-gray-300 focus:outline-none py-2"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full border-b border-gray-300 focus:outline-none py-2"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="w-full border-b border-gray-300 focus:outline-none py-2"
            />

            <button className="bg-red-500 text-white w-full py-3 rounded-md hover:bg-red-600 cursor-pointer">
              Create Account
            </button>
          </form>

          <div className="text-center mt-6 text-sm">
            <span className="text-gray-600">Already have an account? </span>
            <a
              href="/auth/login"
              className="text-gray-900 font-semibold underline"
            >
              Log in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
