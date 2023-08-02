"use client"; // This is a client component - allowing useState

import { useState, FormEvent } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";

/* styling notes:
- decide upon alternate styling w/o header for login/register pages
- use react-toastify or other alerts for error/success messages

*/

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // use HTMLButtonElement for onClick prop on Button
  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Email and password are required!");
      return;
    }
  };

  return (
    <div className="flex min-h-screen flex-col relative bg-slate-900 text-white">
      {/* <Header /> */}
      <main className="flex-1 flex flex-col p-4 justify-center items-center text-base sm:text-lg gap-2 sm:gap-4">
        <h1 className="font-extrabold text-2xl sm:text-4xl select-none">
          LOGIN
        </h1>
        {error && (
          <div className="w-full max-w-[40ch] border border-solid border-rose-400 text-rose-400 text-center">
            {error}
          </div>
        )}
        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="text"
          className="outline-none text-slate-900 p-2 w-full max-w-[30ch] duration-300 border-2 border-solid border-white focus:border-orange-900"
          placeholder="Email"
        />
        <input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          className="outline-none text-slate-900 p-2 w-full max-w-[30ch] duration-300 border-2 border-solid border-white focus:border-orange-900"
          placeholder="Password"
        />
        <button
          className="w-full max-w-[30ch] border-2 border-white border-solid uppercase py-2 duration-300 hover:border-orange-900 relative after:absolute after:top-0 after:right-full after:bg-orange-900 after:z-10 after:w-full after:h-full overflow-hidden hover:after:translate-x-full after:duration-300"
          onClick={handleSubmit}
        >
          <h2 className="relative z-20">LOGIN</h2>
        </button>
        <h2>
          Don&#39;t have an account?
          <Link href={"/register"} className="text-orange-400">
            {" "}
            Register Here.
          </Link>
        </h2>
      </main>
      {/* <Footer /> */}
    </div>
  );
}
