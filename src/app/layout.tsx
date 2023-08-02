import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Run Club",
  description:
    "Log and share your daily running statistics with friends with Next Run Club.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // replace this with state variable with redux
  const loggedIn = true;

  return (
    <html lang="en">
      <body className={inter.className}>
        <Header loggedIn={loggedIn} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
