"use client";

import AuthContextProvider, { useAuth } from "@/lib/context/AuthContext";
import Sidebar from "./components/Sidebar";
import { useAdmin } from "@/lib/firebase/admin/read";

export default function Layout({ children }) {
  return (
    <AuthContextProvider>
      <InnerLayout>{children}</InnerLayout>
    </AuthContextProvider>
  );
}

function InnerLayout({ children }) {
  const { user, isLoading: authIsLoading } = useAuth();
  const { data, error, isLoading } = useAdmin({ uid: user?.uid });

  if (authIsLoading || isLoading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!data) {
    return <h1>You are not admin</h1>;
  }

  return (
    <>
      <section className="flex">
        <Sidebar />
        {children}
      </section>
    </>
  );
}
