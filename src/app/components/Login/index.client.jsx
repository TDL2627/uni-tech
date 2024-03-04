import React, { FormEventHandler, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
import Spinner from "@/app/components/Spinner/index.client";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        router.push("/admin/dashboard");
        const user = userCredential.user;
        const userEmail = user.email;
        localStorage.setItem("email", userEmail);
      })
      .catch((error) => {
        console.error(error);
        setError("Login Failed!");
        setLoading(false);
      });
  };

  return (
    <main className="w-full text-white bg-black h-screen flex items-center justify-center flex-col px-4">
      <h2 className="text-3xl font-bold mb-6">Sign in </h2>
      <form
        className="flex flex-col md:w-1/2 w-full mb-8"
        onSubmit={handleSubmit}
      >
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          name="email"
          id="email"
          className="border-[1px] text-black py-2 px-4 rounded mb-4"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email..."
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          required
          className="border-[1px] text-black py-2 px-4 rounded  mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password..."
        />
        <button
          type="submit"
          className="p-3 bg-blue-600 mx-auto hover:bg-blue-800 text-white md:w-[200px] w-full rounded"
        >
          {loading == true ? (
            <>
              <Spinner />
            </>
          ) : (
            <>LOG IN</>
          )}
        </button>
        {error !== "" && (
          <>
            <p className="text-red-500">{error}</p>
          </>
        )}
      </form>
    </main>
  );
}
