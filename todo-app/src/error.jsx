import React from "react";
import Container from "./components/Container";

function error() {
  return (
    <Container className="w-full h-[80vh]">
      <div className="flex items-center justify-center">
        <h1 className="text-3xl font-bold text-red-500">An error occurred!</h1>
      </div>
    </Container>
  );
}

export default error;
