"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";


export async function loginUser(email: string, password: string) {
  const res = await fetch("https://ilkinibadov.com/api/v1/auth/login", {
     method: "POST",
     headers: { "Content-Type": "application/json" },
     body: JSON.stringify({ email, password }),
   });
 
   if (!res.ok) {
     const err = await res.json();
     throw new Error(err.message || "Error in login");
   }
 
   const { accessToken, refreshToken } = await res.json();
 
   const cookieStore = await cookies();
 
   cookieStore.set("access_token", accessToken, {
     httpOnly: true,
     secure: process.env.NODE_ENV === "production",
     sameSite: "lax",
     path: "/",
     maxAge: 60 * 60,
   });
 
   cookieStore.set("refresh_token", refreshToken, {
     httpOnly: true,
     secure: process.env.NODE_ENV === "production",
     sameSite: "lax",
     path: "/",
     maxAge: 60 * 60 * 24 * 7,
   });
 
   redirect("/");
 }