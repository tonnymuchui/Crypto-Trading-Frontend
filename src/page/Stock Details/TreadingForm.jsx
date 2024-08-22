import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DotIcon } from "lucide-react";
import React from "react";

export const TreadingForm = () => {
  const [orderType, setOrderType] = React.useState("BUY");
  const handleChangeAmount = () => {};
  return (
    <div className="space-y-10 p-5">
      <div>
        <div className="flex gap-4 items-center justify-between">
          <Input
            className="py-7 focus:outline-none"
            placeholder="Amount"
            onChange={handleChangeAmount}
            type="number"
            name="amount"
          />

          <div>
            <p className="border text-2xl flex justify-center items-center w-36 h-14 rounded-md">
              564
            </p>
          </div>
        </div>
        {false && (
          <h1 className="text-red-600 text-center p-4">Insuficient Balance</h1>
        )}
      </div>
      <div className="flex gap-5 items-center">
        <div>
          <Avatar>
            <AvatarImage src="https://cdn.pixabay.com/photo/2017/03/12/02/57/bitcoin-2136339_1280.png" />
          </Avatar>
        </div>

        <div className="flex items-center gap-2">
          <p>BTC</p>
          <DotIcon className="text-gray-400" />
          <p className="text-gray-400">Bitcoin</p>
        </div>
        <div className="flex items-end gap-2">
          <p className="text-xl font-bold">$2433</p>
          <p className="text-red-500">
            <span>-4343.5443</span>
            <span>(-2346.655)</span>
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <p>Order Type</p>
        <p>Market Order</p>
      </div>
      <div className="flex items-center justify-between">
        <p>{orderType == "BUY" ? "Available Case" : "Available Qantity"}</p>
        <p>{orderType == "BUY" ? 9584 : 484}</p>
      </div>
      <div>
        <Button
          className={`w-full py-6 ${
            orderType == "SELL" ? "bg-red-600 text-white" : ""
          }`}
        >
          {orderType}
        </Button>
        <Button
          variant="links"
          className="w-full mt-5 text-xl"
          onClick={() => setOrderType(orderType == "BUY" ? "SELL" : "BUY")}
        >
          {orderType == "BUY" ? "SELL" : "BUY"}
        </Button>
      </div>
    </div>
  );
};
