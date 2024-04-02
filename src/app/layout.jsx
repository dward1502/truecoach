import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "../components/Nav/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "True Seeker Coach",
  description: "Are you the happiest and best coach you think you could ever be? We show you how to be your best self as a coach competitor, friend, teammate… person. True Seeker Coach",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}</body>
    </html>
  );
}
