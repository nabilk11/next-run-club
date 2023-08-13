"use client";

import useAuth from "@/hooks/useAuth";
import { login, logout, setLoading } from "@/redux/features/authSlice";
import { useAppSelector } from "@/redux/store";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";

export default function Header() {
  const dispatch = useDispatch();

  const { user: loggedInUser, isLoading: loading } = useAppSelector(
    (state) => state.data.user,
  );

  const { signOut } = useAuth();

  const handleLogout = () => {
    dispatch(logout());
    signOut();
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
