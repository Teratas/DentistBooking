import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopMenu from "@/components/topMenu";
const inter = Inter({ subsets: ["latin"] });
import NextAuthProvider from "@/providers/NextAuthProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/authOptions";
import ReduxProvider from "@/redux/ReduxProvider";
import Sidebar from "@/components/Sidebar";
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body className={inter.className}>
      <ReduxProvider>
        <NextAuthProvider session={session}>
         {/* <TopMenu/> */}

          {children}
        </NextAuthProvider>
      </ReduxProvider>
      </body>
    </html>
  );
}
