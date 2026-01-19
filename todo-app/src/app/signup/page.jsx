"use client";
import { useState } from "react";
import SignupLayout from "./Layout";
import Input from "@/components/Input";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useToast } from "@/store/toastContext";
function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { addToast } = useToast();
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/user/signupUser",
        {
          email,
          password,
          confirmPassword,
        },
      );
      console.log("response:", response);
      if (response.status === 200) {
        addToast("User created successfully", "success");
        router.push("/login");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      }
      if (response.status === 400) {
        addToast("password not matched", "error");
      }
    } catch (error) {
      console.log("error:", error);
    }
  };
  return (
    <SignupLayout>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col bg-[var(--secondary)] p-8 rounded-md"
      >
        <h1 className="text-2xl font-bold text-center pb-3"> Signup Here</h1>
        <Input
          type="text"
          placeholder="Enter your email.."
          required={true}
          label={"Email"}
          name={"email"}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className={
            "w-full p-2 rounded-md border border-[var(--border)], bg-[var(--foreground)], focus:border-[var(--primary)]"
          }
        />
        <Input
          type="password"
          placeholder="Enter your password.."
          required={true}
          label={"Password"}
          name={"password"}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className={
            "w-full p-2 rounded-md border border-[var(--border)], bg-[var(--foreground)], focus:border-[var(--primary)]"
          }
        />
        <Input
          type="password"
          placeholder="Enter your confirm password.."
          required={true}
          label={"Confirm Password"}
          name={"confirmPassword  "}
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
          className={
            "w-full p-2 rounded-md border border-[var(--border)],t bg-[var(--foreground)], focus:border-[var(--primary)]"
          }
        />
        <Input
          type="submit"
          value="Signup"
          className="w-full p-2 rounded-md  bg-[var(--primary)] hover:bg-[var(--hover-bg)]"
        />
        <p className="text-[14px]">
          If you already have an account.{" "}
          <Link
            href="/login"
            className="underline text-[14px] hover:text-[var(--primary)]"
          >
            Click here
          </Link>
        </p>
      </form>
    </SignupLayout>
  );
}

export default Signup;
