"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // // console.log(e.target.name,":", e.target.value);
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);

    const isLoginValid = form.email === "test@example.com" && form.password === "123456";

    if (true) {
      alert("User Log duzelt");
      router.push("/");
    } else {
      alert("Invalid email or password");
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
          <h1 className="text-3xl font-semibold mb-2">Log in to Exclusive</h1>
          <p className="text-gray-700 font-semibold mb-8">Enter your details below</p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
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
              Login
            </button>
          </form>

          <div className="text-center mt-6 text-sm">
            <span className="text-gray-600">Don’t have an account? </span>
            <a
              href="/auth/register"
              className="text-gray-900 font-semibold underline"
            >
              Register
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}