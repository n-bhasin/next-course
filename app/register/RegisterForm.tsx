"use client";
import { signIn } from "next-auth/react";
import React, { useState } from "react";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const body = {
        name,
        email,
        password,
      };
      const res = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify(body),
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        signIn();
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form className="space-y-3" onSubmit={onSubmit}>
      <div>
        <input
          id={"name"}
          type="text"
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
          className="input input-bordered input-sm w-full max-w-xs"
        />
      </div>
      <div>
        <input
          id={"email"}
          type="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
          className="input input-bordered input-sm w-full max-w-xs"
        />
      </div>
      <div>
        <input
          id={"password"}
          type="password"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
          className="input input-bordered input-sm w-full max-w-xs"
        />
      </div>

      <button className="btn btn-primary">Register</button>
    </form>
  );
};

export default RegisterForm;
