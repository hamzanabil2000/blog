import { House, List, MessageCircle } from "lucide-react";
import LoginButton from "./LoginButton";
import AuthContextProvider from "@/lib/context/AuthContext";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="flex justify-between items-center px-7 py-3 border-b">
      <Link href="/">
        <img className="h-10" src="/logo.jpg" alt="" />
      </Link>
      <ul className="flex gap-6 items-center">
        <Link href={"/"}>
          <li className="flex items-center gap-2">
            <House />
            Home
          </li>
        </Link>
        <Link href={"/categories"}>
          <li className="flex items-center gap-2">
            <List />
            Categories
          </li>
        </Link>
      </ul>
      <AuthContextProvider>
        <LoginButton />
      </AuthContextProvider>
    </nav>
  );
}
