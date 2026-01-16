"use client";
import { useState } from "react";
import LoginLayout from "./layout";
import Input from "@/components/Input";
import Container from "@/components/Container";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Container className="p-6 max-w-[400px] sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1000px] mx-auto">
      <LoginLayout>
        <form className="flex flex-col bg-[var(--secondary)] p-8 rounded-md">
          <h1 className="text-2xl font-bold text-center pb-3"> Login Here</h1>
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
            type="submit"
            value="Signup"
            className="w-full p-2 rounded-md  bg-[var(--primary)] hover:bg-[var(--hover-bg)]"
          />
          <p className="text-[14px]">
            If you don't have an account.{" "}
            <a
              href="#"
              className="underline text-[14px] hover:text-[var(--primary)]"
            >
              Click here
            </a>
          </p>
        </form>
      </LoginLayout>
    </Container>
  );
};
export default Login;
