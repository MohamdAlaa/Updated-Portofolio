import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/TransitionProvider";
import { ThemeProvider } from "@/contexts/ThemeContext";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Mohamed Alaa",
  description:
    "Portfolio website of Mohamed Alaa, a skilled web developer specializing in React, Next.js, and modern web technologies. Explore projects, skills, and contact information.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <TransitionProvider>{children}</TransitionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
