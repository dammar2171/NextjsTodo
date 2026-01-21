"use client";
import Container from "@/components/Container";
import Link from "next/link";
import styles from "@/styles/Container.module.css";
import { useContext } from "react";
import { AuthContext } from "@/store/AuthContext";
import { useRouter } from "next/navigation";

const Header = () => {
  return (
    <header
      className="py-6 "
      style={{
        background: "var(--surface)",
        color: "var(--foreground)",
        borderBottom: `1px solid var(--border)`,
        boxShadow: "var(--box-shadow)",
        position: "sticky",
        top: "0",
      }}
    >
      <Container className={styles.container}>
        <Navbar />
      </Container>
    </header>
  );
};

export default Header;
const Navbar = () => {
  const router = useRouter();
  const { authenticated, setAuthenticated } = useContext(AuthContext);

  const handleLogout = () => {
    setAuthenticated(false);
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <nav className="flex justify-between items-center gap-4 px-4">
      <div
        className="text-2xl font-extrabold"
        style={{ color: "var(--foreground)" }}
      >
        <span
          className="p-2 rounded-[var(--border-radius)]"
          style={{
            background: "var(--primary)",
            color: "var(--background)",
            boxShadow: "var(--box-shadow)",
          }}
        >
          TD
        </span>
      </div>

      <ul className="flex gap-4 items-center">
        <li key="/" className="list-none">
          <Link href="/" className="hover:text-[var(--primary)]">
            Home
          </Link>
        </li>

        {!authenticated && (
          <li key="/login" className="list-none">
            <Link href="/login" className="hover:text-[var(--primary)]">
              Login
            </Link>
          </li>
        )}

        {authenticated && (
          <>
            <li key="/addtodo" className="list-none">
              <Link href="/addtodo" className="hover:text-[var(--primary)]">
                Add Todo
              </Link>
            </li>
            <li key="/todos" className="list-none">
              <Link href="/todos" className="hover:text-[var(--primary)]">
                Todos
              </Link>
            </li>
          </>
        )}

        {authenticated && (
          <li key="logout" className="list-none">
            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600 transition-colors"
            >
              Logout
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};
