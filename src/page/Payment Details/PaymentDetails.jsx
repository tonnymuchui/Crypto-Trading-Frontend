import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { PaymentForm } from "./PaymentForm";

export const PaymentDetails = () => {
  return (
    <div className="px-20">
      <h1 className="text-3xl font-bold py-10">Payment Details</h1>
      {false? <Card>
        <CardHeader>
          <CardTitle>
            <CardDescription>A/C No: ********263</CardDescription>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center">
            <p className="w-32">A/C Holder</p>
            <p className="text-gray-400">: Tonny</p>
          </div>
          <div className="flex items-center">
            <p className="w-32">KCB</p>
            <p className="text-gray-400">Yesdkkk</p>
          </div>
        </CardContent>
      </Card>:       <Dialog>
        <DialogTrigger>
          <Button className="py-4">Add Payment Details</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Payment Details</DialogTitle>

          </DialogHeader>
          <PaymentForm />
        </DialogContent>
      </Dialog>}


    </div>
  );
};
