"use client"; // This is a client component - allowing useState

import { useState, FormEvent } from "react";
import Link from "next/link";

/* styling notes:
- decide upon alternate styling w/o header for login/register pages
- use react-toastify or other alerts for error/success messages

*/

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  // use HTMLButtonElement for onClick prop on Button
  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!username || !email || !password || !confirmPassword) {
      setError("All fields are required!");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
  };

  return (
    <div className="flex min-h-screen flex-col relative bg-slate-900 text-white">
      <main className="flex-1 flex flex-col p-4 justify-center items-center text-base sm:text-lg gap-2 sm:gap-4">
        <h1 className="font-extrabold text-2xl sm:text-4xl select-none">
          REGISTER
        </h1>
        {error && (
          <div className="w-full max-w-[40ch] border border-solid border-rose-400 text-rose-400 text-center">
            {error}
          </div>
        )}
        <input
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          type="text"
          className="outline-none text-slate-900 p-2 w-full max-w-[30ch] duration-300 border-2 border-solid border-white focus:border-orange-900"
          placeholder="Username"
        />
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
        <input
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
          type="password"
          className="outline-none text-slate-900 p-2 w-full max-w-[30ch] duration-300 border-2 border-solid border-white focus:border-orange-900"
          placeholder="Confirm Password"
        />
        <button
          className="w-full max-w-[30ch] border-2 border-white border-solid uppercase py-2 duration-300 hover:border-orange-900 relative after:absolute after:top-0 after:right-full after:bg-orange-900 after:z-10 after:w-full after:h-full overflow-hidden hover:after:translate-x-full after:duration-300"
          onClick={handleSubmit}
        >
          <h2 className="relative z-20">REGISTER</h2>
        </button>
        <h2>
          Already have an account?
          <Link href={"/login"} className="text-orange-400">
            {" "}
            Login Here.
          </Link>
        </h2>
      </main>
    </div>
  );
}
