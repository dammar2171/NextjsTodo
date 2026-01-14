import Container from "@/components/Container";
import Link from "next/link";
import styles from "@/styles/Container.module.css";

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
  return (
    <nav className="flex px-2 md:px-4 md:px-0 justify-around md:justify-between items-center gap-3 md:gap-0">
      <div
        className="text-xl md:text-2xl font-extrabold"
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

      <ul className="flex gap-4">
        {[
          { href: "/", label: "Home" },
          { href: "/addtodo", label: "Add Todo" },
          { href: "/todos", label: "Todos" },
          { href: "/login", label: "Login" },
        ].map((link) => (
          <li
            key={link.href}
            className="list-none transition-colors duration-300 ease-in-out cursor-pointer"
            style={{
              color: "var(--foreground)",
            }}
          >
            <Link
              href={link.href}
              className="hover:text-[var(--primary)]"
              style={{
                fontSize: "var(--font-size-normal)",
              }}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
