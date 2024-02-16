"use client";

import { useLogUser } from "@/services/User/user.queries";
import { logUser } from "@/services/User/user.service";
import { User } from "@/types/User/User";
import { useRouter } from "next/navigation";
import { userAgent } from "next/server";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmitLogin = () => {
    if (email === "user@user.com") {
      router.push("/user/Home");
    } else{
      router.push("/admin/Home")
    }
  };

  const router = useRouter();

  return (
    <div className="flex justify-center items-center w-full">
      <div className="border-s-white border-2 flex flex-col gap-y-8 p-8 w-1/4 items-center">
        <div className="flex flex-col items-center">
          <img src={"Logo.png"} className="h-28" />
          <p className="text-sm">Free Place</p>
        </div>
        <input
          className="p-3 border border-white border-1 rounded-md bg-transparent w-full"
          type="email"
          placeholder="Type your email..."
          onChange={(e) => setEmail(e.currentTarget.value)}
        ></input>
        <input
          className="p-3 border border-white border-1 rounded-md bg-transparent w-full"
          type="password"
          placeholder="Type your password..."
          onChange={(e) => setPassword(e.currentTarget.value)}
        ></input>
        <button
          className="p-2 bg-green-600 w-1/2 hover:bg-green-900 ease-in-out"
          onClick={handleSubmitLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
}
