"use client";
import { useState } from "react";
import SignupLayout from "./Layout";
import Input from "@/components/Input";
function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <SignupLayout>
      <form className="flex flex-col bg-[var(--primary)] p-8 rounded-md">
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
          className="w-full p-2 rounded-md  bg-[var(--secondary)] hover:bg-[var(--foreground-disabled)]"
        />
        <p>
          If you already have an account.{" "}
          <a href="#" className="underline ">
            Click here
          </a>
        </p>
      </form>
    </SignupLayout>
  );
}

export default Signup;
