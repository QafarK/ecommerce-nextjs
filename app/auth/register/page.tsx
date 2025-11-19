"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {

  const router = useRouter();

  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
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
      alert("User Register duzelt");
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
          <h1 className="text-3xl font-semibold mb-2">Create an acccount</h1>
          <p className="text-gray-700 font-semibold mb-8">Enter your details below</p>

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
