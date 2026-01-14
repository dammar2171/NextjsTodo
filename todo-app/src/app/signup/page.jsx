import Container from "@/components/Container";
import React from "react";

function Signup() {
  return (
    <Container className={"w-[1200px]"}>
      <div className="w-[700px] mx-auto flex">
        <div className="w-full bg-[url('https://img.freepik.com/premium-vector/sign-up-concept-illustration_114360-7965.jpg?semt=ais_hybrid&w=740&q=80')]">
        </div>
        <div className="w-full">
          <h1>Signup here</h1>
          <form >
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            
            <button>Signup</button>
          </form>
        </div>
      </div>
    </Container>
  );
}

export default Signup;
