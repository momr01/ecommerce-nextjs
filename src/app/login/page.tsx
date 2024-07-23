"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import { FormEvent, useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginInProgress, setLoginInProgress] = useState(false);
  //const [creatingUser, setCreatingUser] = useState(false);
  //const [userCreated, setUserCreated] = useState(false);
  // const [error, setError] = useState(false);

  const handleFormSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setLoginInProgress(true);

    /* const { ok } = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (ok) {
    } else {
    }*/

    await signIn("credentials", { email, password, redirect: true, callbackUrl: "/" });

    setLoginInProgress(false);
  };

  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl mb-4">Login</h1>

      <form className="max-w-xs mx-auto" onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          disabled={loginInProgress}
          onChange={(ev) => setEmail(ev.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          disabled={loginInProgress}
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <button disabled={loginInProgress} type="submit">
          Login
        </button>
        <div className="my-4 text-center text-gray-500">
          or login with provider
        </div>
        <button
        type="button"
          onClick={() => signIn("google", {redirect: true, callbackUrl: "/"})}
          className="flex gap-4 justify-center"
        >
          <Image src={"/google.png"} alt="google" width={24} height={24} />
          Login with Google
        </button>
      </form>
    </section>
  );
}
