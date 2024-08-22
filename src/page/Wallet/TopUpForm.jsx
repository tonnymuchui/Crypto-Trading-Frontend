import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { DotFilledIcon } from "@radix-ui/react-icons";
import React from "react";

export const TopUpForm = () => {
  const [amount, setAmount] = React.useState("");
  const [paymentMethod, setPaymentMethod] = React.useState("MPESA");

  const handlePaymentMethodChange = (value) => setPaymentMethod(value);
  const handleChange = (e) => setAmount(e.target.value);
  const handleSubmit = () => {};
  return (
    <div className="pt-10 space-y-5">
      <div>
        <h1 className="pb-1">Enter Amount</h1>
        <Input
          onChange={handleChange}
          value={amount}
          className="py-5 text-lg"
          placeholder="$234"
        />
      </div>
      <div>
        <h1 className="pb-1">Select Payment Method</h1>
        <RadioGroup
          onValueChange={(value) => handlePaymentMethodChange(value)}
          className="flex"
          defaultValue="MPESA"
        >
          <div className="flex items-center space-x-2 border p-3 px-5 rounded-md">
            <RadioGroupItem
              className="h-9 w-9"
              icon={DotFilledIcon}
              value="Mpesa"
              id="r1"
            />
            <Label htmlFor="r1">
              <div className="bg-white rounded-md px-5 py-2 w-32">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKGFGlTXoKUC33Cfs8euyJwK96Gk61RtOtfA&s"
                  alt="mpesa"
                  className="w-10 h-10"
                />
              </div>
            </Label>
          </div>

          <div className="flex items-center space-x-2 border p-3 px-5 rounded-md">
            <RadioGroupItem
              className="h-9 w-9"
              icon={DotFilledIcon}
              value="PayPal"
              id="r1"
            />
            <Label htmlFor="r1">
              <div className="bg-white rounded-md px-5 py-2 w-32">
                <img
                  src="data:image/jpeg;base64,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uVbUvt9a101RJKWmnfkFzienmtKl6VrEbj+Vi9bWnenR0zSTwVE8lRTzRHcDW9rGW5ycnn6Apcdot6SyeqbrStZ90gALsNbxJ4AKSZ1G2PEbnS8KCFsFFBCBgMja32BeTvO7TL32OvbSK/DYwuNO2V9BAQUtrXZ9qW9aquNwpoqV1PNIDFvT4O6GgcseRWtx+Xhx4orO1PLgta21i7P7JPp7S9Jb6vcFS0ufLuOyN4kngfRhZ/Iy/VyzaFnHTtrEJIoXbnX60018tNVba0EwVDN045tPMEeYIB9S7x3nHeLR7ObV7omFHXXZXqSjnkZRwRV0BJDZI3hpI8weS2ac/FMfdOlK3HvE+GxatkF5kp55qz6PSyNicYoWkF0j8d0E8mjPPmuL9Rx1nVXcce8x90vvp7ZfqCC/W+ouEVK2lgqGSy7s+8e6QcAY6gLnLzsU0tFd7l8x4LRba8CePBY66887WLvQ3jVkjre0OFMzsJJw7hI5pOceQ5Z8VvcLFamL7vdn8mYm3hNNjWkRTUzdRVzB207MUjXfcjP3/S7w8vSqfP5HdP0qz4hPx8fbHdPqtMtwOCzllW130lea261VSyKItllLh9pjhngtvBzsNMdaz7PMcnpnJyZbXiI8/lONO0L7dZqWklAEkbO+G8t7mVk58kZMk2hvcTDOHDWk+zpqJZc+9WyG626WkmJAfjDhzaRyKkw5Zw3i8eyDk4K8jHOO3uriq0XeYJXMigZOzPB7HgZHoPJblOo4LR58PM5Okcms6iNtim0JcXU8sk7o45Q37OJp4uPmfBR36nji0RWPCXH0bNNZm0+faGzp/SNzpLzS1NWyJsET99xEmTwzjh6cLjk8/FfFatEnD6Xnx563v6Q2tW6aul2vJqqZkRh7JrG5fg8Mk/FccLmYsOLtt67TdR6fn5Gfvr6aSPSVtltNmipajd7UOc9+6cjJJ+WFR5WWMuWbQ0uBx7cfBFLerr4VdcQ7WthuV5rKd9E2N0UcZHek3SDlaPB5WLBWYvvbG6nws/JvXs1qHDoNFXZlbA6oZCyJsgc53aZ4A9Fby9Rw2pMV3tRw9I5FclZtrULOaOHBYb07KAgICDGAgygIMYCDOEGMBBnCDg61hvVTYZqbToiFZMQwvkk3Nxh/aIPX81LhnHF95PRxfumNVVbprZPdvrimffY6eOgjO/I1ku+X45Nx0Pj5LSzdQpNJ+n6q1OPMW8ruaxrGhrWhoAwAPBZC4/SDGAgzhAQEGMDogYBQMBAIBQZxhAQEBAQEBAQEBAQEBAQEBAQYwgygICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg/9k="
                  alt="mpesa"
                  className="w-10 h-10"
                />
              </div>
            </Label>
          </div>
        </RadioGroup>
      </div>
      <DialogClose>
      <Button onClick={handleSubmit} className="w-full pay-7">
        Submit
      </Button>
      </DialogClose>
     
    </div>
  );
};
