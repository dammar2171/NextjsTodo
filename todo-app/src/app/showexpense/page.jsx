"use client";
import Container from "@/components/Container";
import { StoreContext } from "@/store/StoreContext";
import Loader from "../../../src/loader";
import { useContext } from "react";
import Button from "@/components/Button";

const ShowExpense = () => {
  const { expense, expenseLoading, handleDeleteExpense } =
    useContext(StoreContext);

  if (expenseLoading) return <Loader />;

  return (
    <Container className="max-w-full h-screen px-[100px] py-[20px] bg-[var(--background)] text-[var(--foreground)]">
      <h1 className="text-3xl text-center mb-6">Your Total Expense Here:</h1>

      <div className="grid grid-cols-5 font-semibold border-b pb-2">
        <span>SN.</span>
        <span>Description</span>
        <span>Amount</span>
        <span>Date</span>
        <span>Actions</span>
      </div>

      <div className="shadow-lg divide-y">
        {expense.length === 0 && <p className="p-10 text-2xl text-center">No expense yet</p>}
        {expense.map((item, index) => (
          <div key={item.id} className="grid grid-cols-5 items-center py-2">
            <span>{index + 1}</span>
            <span>{item.description}</span>
            <span>{item.amount}</span>
            <span>{item.date}</span>
            <span className="flex gap-4">
              <Button type="info" onClick={() => alert("edit button clicked")}>
                Edit
              </Button>
              <Button
                type="danger"
                onClick={() => handleDeleteExpense(item.id)}
              >
                Delete
              </Button>
            </span>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default ShowExpense;
