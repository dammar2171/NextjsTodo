import React from "react";
import Container from "@/components/Container";
function SignupLayout({ children }) {
  return (
    <Container className={"w-full h-screen bg-[var(--background)]"}>
      <div className="w-[1000px] mx-auto py-20 flex">
        <div className="w-full bg-[url('https://img.freepik.com/premium-vector/sign-up-concept-illustration_114360-7965.jpg?semt=ais_hybrid&w=740&q=80')] bg-cover bg-center no-repeat"></div>
        <div className="w-full">{children}</div>
      </div>
    </Container>
  );
}

export default SignupLayout;
