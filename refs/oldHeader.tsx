"use client";

import { login, logout, setLoading } from "@/redux/features/authSlice";
import { useAppSelector } from "@/redux/store";
import { auth } from "@/utils/firebase_client";
// import { signOut } from "firebase/auth";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function Header() {
  const loggedInUser = useAppSelector((state) => state.data.user.user);
  console.log(loggedInUser);

  const dispatch = useDispatch();

  // dispatching user from firebase to Redux
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            // uid: authUser.uid,
            username: authUser.displayName,
            // email: authUser.email,
          }),
        );
        dispatch(setLoading(false));
      } else {
        console.log("No user logged in");
      }
    });
  }, []);

  const handleLogout = () => {
    //   dispatch(logout());
    //   signOut(auth);
  };

  return (
    <div className="sticky top-0 w-full left-0 bg-blue-300 flex items-center justify-between p-4 border-b border-solid border-white">
      <h1 className="text-3xl sm:text-6xl">Next Run Club</h1>

      {/* Header will be rendered conditionally when auth & redux is introduced */}
      {loggedInUser ? (
        <>
          <div className="nav-items">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link href={"/dashboard"}>Dashboard</Link>
              </li>
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </ul>
          </div>
          <div>
            <span>Hello {loggedInUser.username}</span>
            <Image
              className="cursor-pointer duration-300 hover:opacity-40"
              src="/pfPic.png"
              alt="profile picture"
              width={60}
              height={60}
            />
          </div>
        </>
      ) : (
        <div className="nav-items">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href={"/login"}>Login</Link>
            </li>
            <li>
              <Link href={"/register"}>Register</Link>
            </li>
          </ul>
          <h3>Get Running!</h3>
        </div>
      )}
    </div>
  );
}
