"use client";

import { useAppSelector } from "./redux/store";

export default function Home() {
  const user = useAppSelector((state) => state.data.user);

  return (
    <div className="flex min-h-screen flex-col relative bg-slate-900 text-white">
      <main className="flex-1 flex flex-col p-4">
        <h1>Hello Run Club</h1>
      </main>
    </div>
  );
}
