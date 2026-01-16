import React from "react";
import Container from "@/components/Container";
function SignupLayout({ children }) {
  return (
    <Container
      className={
        "w-full h-screen bg-[var(--background)] flex items-center justify-center"
      }
    >
      <div className="w-[1000px] mx-auto flex md:flex-row flex-col">
        <div className=" d-none md:block w-full bg-[url('https://img.freepik.com/premium-vector/sign-up-concept-illustration_114360-7965.jpg?semt=ais_hybrid&w=740&q=80')] bg-cover bg-center bg-no-repeat"></div>
        <div className="w-full mx-auto p-6">{children}</div>
      </div>
    </Container>
  );
}

export default SignupLayout;
