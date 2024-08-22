import { Form } from "@/components/ui/form";
import React from "react";
import { useForm } from "react-hook-form";
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form";
  import { Input } from "@/components/ui/input"
import { DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export const PaymentForm = () => {
  const form = useForm({
    resolver: "",
    defaultValues: {
      accountHolderName: "",
      ifsc: "",
      accountNumber: "",
      bankName: "",
    },
  });
  const onSubmit = (data) => {};
  return (
    <div className="px-10 py-2">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="accountHolderName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Account Name</FormLabel>
                <FormControl>
                  <Input
                  className="border w-full border-gray-400 p-6"
                   placeholder="Tonny Muchui" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

<FormField
            control={form.control}
            name="accountHolderName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>IFSC Code</FormLabel>
                <FormControl>
                  <Input
                  className="border w-full border-gray-400 p-6"
                   placeholder="Tonny Muchui" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

<FormField
            control={form.control}
            name="accountNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Account Number</FormLabel>
                <FormControl>
                  <Input
                  className="border w-full border-gray-400 p-6"
                   placeholder="****5654" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmAccountNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm A/C No</FormLabel>
                <FormControl>
                  <Input
                  className="border w-full border-gray-400 p-6"
                   placeholder="****23454" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="bankName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bank Name</FormLabel>
                <FormControl>
                  <Input
                  className="border w-full border-gray-400 p-6"
                   placeholder="Kcb" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <DialogClose className="w-full">
            <Button type="submit" className="w-full py-5">
                Submit
            </Button>
          </DialogClose>
        </form>
      </Form>
    </div>
  );
};
