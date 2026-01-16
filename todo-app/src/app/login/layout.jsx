"use client";
import React from "react";
import Container from "@/components/Container";
function LoginLayout({ children }) {
  return (
    <Container
      className={
        "w-full h-screen bg-[var(--background)] flex items-center justify-center"
      }
    >
      <div className="w-[1000px] mx-auto flex flex-col md:flex-row ">
        <div className="d-none md:block w-full bg-[url('/login.png')] bg-cover bg-center bg-no-repeat"></div>
        <div className=" w-full mx-auto p-6">{children}</div>
      </div>
    </Container>
  );
}

export default LoginLayout;
