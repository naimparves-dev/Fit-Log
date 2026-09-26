import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Homepage/Navbar";
import Footer from "@/components/shared/Footer";
import WorkoutContextProvider from "@/Context/workoutContext";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FitLog",
  description: "A dark, no-nonsense workout companion.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >

      <body className="min-h-full flex flex-col overflow-x-hidden bg-[#0D0F12] text-white">

        <WorkoutContextProvider>

          <Navbar />

          <main className="pt-[80px]">
            {children}
          </main>

          <Footer />

          <ToastContainer />

        </WorkoutContextProvider>

      </body>

    </html>
  );
}