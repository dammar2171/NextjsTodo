import Container from "@/components/Container";
import styles from "@/styles/Container.module.css";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="py-6"
      style={{
        background: "var(--surface)",
        color: "var(--foreground)",
        borderTop: `1px solid var(--border)`,
        boxShadow: "var(--box-shadow)",
      }}
    >
      <Container className={styles.container}>
        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-16 items-center">
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
          <div>
            <p style={{ fontSize: "var(--font-size-normal)" }}>
              Copyright © 2026 Todo App
            </p>
          </div>
          <div>
            <ul className="flex gap-4">
              <li
                className="flex items-center gap-2 list-none transition-colors duration-300 ease-in-out cursor-pointer"
                style={{ color: "var(--foreground)" }}
              >
                <FaFacebookSquare
                  style={{ color: "var(--primary)" }}
                  className="hover:text-[var(--hover-bg)]"
                />
                facebook
              </li>
              <li
                className="flex items-center gap-2 list-none transition-colors duration-300 ease-in-out cursor-pointer"
                style={{ color: "var(--foreground)" }}
              >
                <FaTwitterSquare
                  style={{ color: "var(--secondary)" }}
                  className="hover:text-[var(--hover-bg)]"
                />
                twitter
              </li>
              <li
                className="flex items-center gap-2 list-none transition-colors duration-300 ease-in-out cursor-pointer"
                style={{ color: "var(--foreground)" }}
              >
                <FaInstagramSquare className="hover:text-[var(--hover-bg)] text-pink-700" />
                instagram
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
