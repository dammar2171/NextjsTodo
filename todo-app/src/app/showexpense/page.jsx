"use client";
import Container from "@/components/Container";
import { StoreContext } from "@/store/StoreContext";
import { useContext } from "react";
const ShowExpense = () => {
  const { expense, expenseLoading } = useContext(StoreContext);

  return (
    <Container className="max-w-full h-screen bg-[var(--background)] text-[var(--foreground)]"></Container>
  );
};
export default ShowExpense;
