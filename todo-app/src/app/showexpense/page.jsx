"use client";
import Container from "@/components/Container";
import { StoreContext } from "@/store/StoreContext";
import Loader from "../../../src/loader";
import { useContext, useState } from "react";
import Button from "@/components/Button";
import { useToast } from "@/store/ToastContext";
import Input from "@/components/Input";
import axios from "axios";

const ShowExpense = () => {
  const { expense, expenseLoading, handleDeleteExpense, handleUpdateExpense } =
    useContext(StoreContext);
  const [editing, setEditing] = useState(false);
  const [editExpense, setEditExpense] = useState(null);
  const onHandleEdit = (expense) => {
    setEditing(true);
    setEditExpense(expense);
  };

  const onCancel = () => {
    setEditing(false);
    console.log("clicked");
  };

  if (expenseLoading) return <Loader />;

  return (
    <>
      <Container className="max-w-full h-screen px-[100px] py-[20px] bg-[var(--background)] text-[var(--foreground)]">
        <h1 className="text-3xl font-bold text-center mb-6">
          Your Total Expense Here:
        </h1>

        <div className="grid grid-cols-5 font-semibold border-b pb-2">
          <span>SN.</span>
          <span>Description</span>
          <span>Amount</span>
          <span>Date</span>
          <span>Actions</span>
        </div>

        <div className="shadow-lg divide-y">
          {expense.length === 0 && (
            <p className="p-10 text-2xl text-center">No expense yet</p>
          )}
          {expense.map((item, index) => (
            <div key={item.id} className="grid grid-cols-5 items-center py-2">
              <span>{index + 1}</span>
              <span>{item.description}</span>
              <span>{item.amount}</span>
              <span>{item.date}</span>
              <span className="flex gap-4">
                <Button type="info" onClick={() => onHandleEdit(item)}>
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
      {editing && (
        <EditExpense
          onCancel={onCancel}
          expense={editExpense}
          handleUpdateExpense={handleUpdateExpense}
        />
      )}
    </>
  );
};
export default ShowExpense;

const EditExpense = ({ onCancel, expense, handleUpdateExpense }) => {
  const [description, setDescription] = useState(expense.description);
  const [amount, setAmount] = useState(expense.amount);
  const [date, setDate] = useState(expense.date);
  const { addToast } = useToast();

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const id = expense.id;
      const token = localStorage.getItem("token");
      const response = await axios.put(
        `http://localhost:5000/expense/updateExpense/${id}`,
        { id, description, amount, date },
        { headers: { Authorization: `Bearer ${token}` } },
      );
      if (response.status === 200) {
        handleUpdateExpense(response.data.data);
        addToast(response.data.message, "success");
        setDescription("");
        setAmount("");
        setDate("");
        onCancel();
      }
    } catch (error) {
      console.log("UPDATION_ERROR: ", error);
    }
  };
  return (
    <div className="top-0 left-0 fixed w-full h-screen bg-[#00000099] z-50 flex justify-center items-center">
      <Container className="w-[80%] sm:w-[50%]  mx-auto bg-white p-5 text-black rounded-2xl">
        {" "}
        <h1 className="text-black text-2xl font-bold">
          Edit expense{" "}
          <span onClick={onCancel} className="float-end cursor-pointer">
            ❌
          </span>
        </h1>
        <form className="space-y-4 " onSubmit={onHandleSubmit}>
          <div>
            <label className="block mb-1" htmlFor="description">
              Description
            </label>
            <Input
              id="description"
              value={description}
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
              value={amount}
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
              value={date}
              className="w-[100%] border-[1px] py-1 px-1.5 border-black rounded-md"
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 w-full text-center text-white rounded hover:bg-blue-700"
          >
            Update Expense
          </button>
        </form>
      </Container>
    </div>
  );
};
