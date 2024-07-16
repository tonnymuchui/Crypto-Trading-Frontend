import React from "react";
import { Button } from "@/components/ui/button";
import { AssetTables } from "./AssetTables";
import { StockChart } from "./StockChart";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarImage } from "@/components/ui/avatar";

export const Home = () => {
  const [category, setCategory] = React.useState("all");

  const handleCategory = (value) => {
    setCategory(value);
  };

  return (
    <div className="relative">
      <div className="lg:flex">
        <div className="lg:w-[50%] lg:border-r">
          <div className="p-3 flex items-center gap-4">
            <Button
              onClick={() => handleCategory("all")}
              variant={category === "all" ? "default" : "outline"}
              className="rounded-full"
            >
              All
            </Button>
            <Button
              onClick={() => handleCategory("top50")}
              variant={category === "top50" ? "default" : "outline"}
              className="rounded-full"
            >
              Top 50
            </Button>
            <Button
              onClick={() => handleCategory("topGainers")}
              variant={category === "topGainers" ? "default" : "outline"}
              className="rounded-full"
            >
              Top Gainers
            </Button>
            <Button
              onClick={() => handleCategory("topLosers")}
              variant={category === "topLosers" ? "default" : "outline"}
              className="rounded-full"
            >
              Top Losers
            </Button>
          </div>
          <AssetTables />
        </div>
        <div className="hidden lg:block lg:w-[50%] p-5">
          <StockChart />

          <div className="flex items-center gap-5">
      <Avatar style={{ width: '40px', height: '40px' }}>
        <AvatarImage
          src="https://cdn.pixabay.com/photo/2017/03/12/02/57/bitcoin-2136339_1280.png"
          alt="avatar"
        />
      </Avatar>
      <div>
        <div className="flex items-center gap-2">
          <p>BTC</p>
          <p className="text-gray-400">Ethereum</p>
        </div>
        <div className="flex items-end gap-2">
          <p className="text-xl font-bold">544</p>
          <p className="text-red-600">
            <span>-5435</span>
            <span>-(0.354)</span>
          </p>
        </div>
      </div>
      </div>
      </div>
    </div>
    </div>
  );
};
