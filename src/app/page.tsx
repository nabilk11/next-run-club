import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col relative bg-slate-900 text-white">
      <Header />
      <main className="flex-1 flex flex-col p-4">
        <h1>Hello Run Club</h1>
      </main>
      <Footer />
    </div>
  );
}
