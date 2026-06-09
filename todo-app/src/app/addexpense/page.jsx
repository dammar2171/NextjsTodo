"use client";
import Container from "@/components/Container";
import Input from "@/components/Input";
import React from "react";
import { useState } from "react";
import { useToast } from "@/store/ToastContext";
import axios from "axios";

function AddExpense() {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const { addToast } = useToast();

  const handleAddexpense = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    if (!token) {
      addToast("No token found. Please login first.", "error");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/expense/addExpense",
        { description, amount, date },
        { headers: { Authorization: `Bearer ${token}` } },
      );

      addToast(response.data.message, "success");
      setDescription(" ");
      setAmount(" ");
      setDate(" ");
    } catch (error) {
      console.log("ERROR:", error);
      addToast(
        error.response?.data?.message || "Something went wrong",
        "error",
      );
    }
  };

  return (
    <Container className="p-2 py-[40px] sm:p-4 md:p-6 md:py-[70px] max-w-full bg-[var(--background)] text-[var(--foreground)]">
      <h1 className="text-2xl text-center font-bold mb-4">Add Expense</h1>
      <Container className="w-[80%] sm:w-[50%]  mx-auto">
        {" "}
        <form className="space-y-4 " onSubmit={handleAddexpense}>
          <div>
            <label className="block mb-1" htmlFor="description">
              Description
            </label>
            <Input
              id="description"
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter description"
              className="w-[100%] border-[1px] py-1 px-1.5 border-black rounded-md"
            />
          </div>
          <div>
            <label className="block mb-1" htmlFor="amount">
              Amount
            </label>
            <Input
              id="amount"
              type="number"
              placeholder="Enter amount"
              className="w-[100%] border-[1px] py-1 px-1.5 border-black rounded-md"
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-1" htmlFor="date">
              Date
            </label>
            <Input
              id="date"
              type="date"
              className="w-[100%] border-[1px] py-1 px-1.5 border-black rounded-md"
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 w-full text-center text-white rounded hover:bg-blue-700"
          >
            Add Expense
          </button>
        </form>
      </Container>
    </Container>
  );
}

export default AddExpense;
