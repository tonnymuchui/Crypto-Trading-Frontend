import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import React from "react";

export const TransferForm = () => {
  const [formData, setFormData] = React.useState({
    amout: "",
    walletId: "",
    purpose: "",
  });
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = () => {
   
    console.log(formData);
  };
  return (
    <div className="pt-10 space-y-5">
      <div>
        <h1 className="pb-1">Enter Amount</h1>
        <Input
          onChange={handleChange}
          value={formData.amount}
          name="amount"
          className="py-6"
          placeholder="$234"
        />
      </div>
      <div>
        <h1 className="pb-1">Wallet ID</h1>
        <Input
          onChange={handleChange}
          value={formData.walletId}
          className="py-7"
          name="walletId"
          placeholder="Wallet ID"
        />
      </div>
      <div>
        <h1 className="pb-1">Enter Purpose</h1>
        <Input
          onChange={handleChange}
          value={formData.purpose}
          className="py-7"
          name="purpose"
          placeholder="Purpose"
        />
      </div>
      <DialogClose className="w-full">
        <Button onClick={handleSubmit} className="w-full py-6">
          Submit
        </Button>
      </DialogClose>
    </div>
  );
};
