import React from "react";
import { Button } from "@/components/ui/button";
import { AssetTables } from "./AssetTables";
import { StockChart } from "./StockChart";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarImage } from "@/components/ui/avatar";
import { MessageCircle } from "lucide-react";
import { Cross1Icon } from "@radix-ui/react-icons";

export const Home = () => {
  const [category, setCategory] = React.useState("all");
  const [inputValue, setInputValue] = React.useState("");
  const [chat, setChat] = React.useState(false);

  const handleCategory = (value) => {
    setCategory(value);
  };
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      console.log(inputValue);
      setInputValue("");
  };
};

const handleChat = () => {
  setChat(!chat);
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
            <Avatar style={{ width: "40px", height: "40px" }}>
              <AvatarImage
                src="https://cdn.pixabay.com/photo/2017/03/12/02/57/bitcoin-2136339_1280.png"
                alt="avatar"
              />
            </Avatar>
            <div>
              <div className="flex items-center gap-1">
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
      <section className="absolute bottom-2 right-5 z-40 flex flex-col justify-end items-end gap-1">
       {chat && <div className="rounded-md w-[20rem] md:w-[25rem] lg:w-[25rem] h-[70vh] bg-slate-900">
          <div className="flex justify-between items-center border-b px-6 h-[12%]">
            <p>Chat Bot</p>
            <Button onClick={handleChat} variant="ghost" size="icon">
              <Cross1Icon />
            </Button>
          </div>
          <div className="h-[76%] flex flex-col overflow-y-auto gap-5 py-2 scroll-container">
            <div className="self-start pb-5 w-auto">
              <div className="justify-end self-end px-5 py-2 rounded-md bg-slate-800 w-auto">
                <p>Hello, Tony</p>
                <p>you can ask anything related to crypo</p>
                <p>price,market volume....</p>
              </div>
            </div>

            {[1, 1, 1, 1].map((item, index) => (
              <div
                key={index}
                className={` ${
                  index % 2 == 0 ? "self-start" : "self-end"
                } "pb-5 w-auto"`}
              >
                {index % 2 == 0 ? (
                  <div className="justify-end self-end px-5 py-2 rounded-md bg-slate-800 w-auto">
                    <p>prompt</p>
                  </div>
                ) : (
                  <div className="justify-end self-end px-5 py-2 rounded-md bg-slate-800 w-auto">
                    <p>who are you</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="h-[12%" border-t>
            <div className="flex justify-between items-center px-6 h-full">
              <input
                type="text"
                placeholder="Type a message"
                onChange={handleChange}
                value={inputValue}
                onKeyDown={handleKeyPress}
                className="w-full h-full bg-transparent focus:outline-none"
              />
              <Button onClick={handleChat} variant="icon" size="icon">
                <Cross1Icon />
              </Button>
            </div>
          </div>
        </div>}

        <div className="relative w-[10rem] cursor-pointer group">
          <Button onClick={handleChat} className="w-full h-[3rem] gap-2 items-center">
            
            <MessageCircle
              size={30}
              className="fill-[#1e293b] -rotate-90 stroke-none group-hover:fill-[#1a1a1a]"
            />
            <span className="text-xl">Chat Bot</span>
          </Button>
        </div>
      </section>
    </div>
  );
};
