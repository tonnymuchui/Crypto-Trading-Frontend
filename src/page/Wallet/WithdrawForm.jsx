import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import React from "react";

export const WithdrawForm = () => {
  const [amount, setAmount] = React.useState("");
  const handleChange = (e) => setAmount(e.target.value);
  const handleSubmit = () => {};
  return (
    <div className="pt-10 space-y-5">
      <div className="flex justify-between items-center rounded-md bg-slate-900 text-xl font-bold px-5 py-4">
        <p>Available Balance</p>
        <p>$9000</p>
      </div>
      <div className="flex flex-col items-center">
        <h1>Enter Withdrawal Amount</h1>
        <div className="flex items-center justify-center">
          <Input
            onChange={handleChange}
            value={amount}
            className="withdrawInput py-7 border-none outline-none focus:outline-none px-0 text-2xl text-center"
            placeholder="$234"
          />
        </div>
      </div>
      <div>
        <p>Transfer to</p>
        <div className="flex items-center gap-5 border px-5 rounded-md">
          <img
            className="h-8 w-8"
            src="https://cdn.pixabay.com/photo/2017/03/17/13/11/bank-2151507_1280.png"
          />
        </div>
        <div>
          <p className="text-xl font-bold">yes Bank</p>
          <p className="text-xs">*************345</p>
        </div>
      </div>
      <DialogClose className="w-full">
      <Button
      onClick={handleSubmit}
      className="w-full py-5 text-xl">
        Withdraw
      </Button>
      </DialogClose>

    </div>
  );
};
