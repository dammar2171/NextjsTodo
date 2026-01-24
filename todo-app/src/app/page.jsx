"use client";
import { useRouter } from "next/navigation";
import TheameSwitcher from "../components/TheameSwitcher";
import { useContext } from "react";
import { AuthContext } from "@/store/AuthContext";
export default function Home() {
  const router = useRouter();
  const { authenticated } = useContext(AuthContext);

  const handleGetStarted = () => {
    if (authenticated) {
      router.push("/addtodo");
    } else {
      router.push("/login");
    }
  };
  return (
    <>
      <main
        className="flex flex-col justify-center py-36 items-center"
        style={{
          background: "var(--surface)",
          color: "var(--foreground)",
        }}
      >
        <h1
          className="font-bold text-center"
          style={{ fontSize: "var(--font-size-heading)" }}
        >
          Welcome to Todo Application
        </h1>
        <p
          className="text-center mt-2"
          style={{ fontSize: "var(--font-size-normal)" }}
        >
          Add your todos and manage them
        </p>
        <div>
          <p className="mb-2" style={{ color: "var(--foreground)" }}>
            Select your favorite theme
          </p>
          <TheameSwitcher />
        </div>
        <button
          className="text-center mt-4 w-[200px] mx-auto transition-colors duration-300 ease-in-out cursor-pointer active:scale-95"
          onClick={handleGetStarted}
          style={{
            background: "var(--primary)",
            color: "var(--background)",
            padding: "0.5rem",
            borderRadius: "var(--border-radius)",
            boxShadow: "var(--box-shadow)",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = "var(--hover-bg)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = "var(--primary)")
          }
          onMouseDown={(e) =>
            (e.currentTarget.style.background = "var(--secondary)")
          }
          onMouseUp={(e) =>
            (e.currentTarget.style.background = "var(--primary)")
          }
        >
          Get Started
        </button>
      </main>
    </>
  );
}
