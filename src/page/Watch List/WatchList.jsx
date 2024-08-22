import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar } from "@/components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { Button } from "@/components/ui/button";
import { BookmarkFilledIcon } from "@radix-ui/react-icons";


const handleRemoveToWatchList = (id) => {
  console.log("Remove from WatchList", id);
};
export const WatchList = () => {
  return (
    <div className="p-5 lg:p-20">
      <h1 className="flex font-bold text-3xl justify-start">WatchList</h1>
      <Table>
        <TableCaption>A list of your watchlist Crypocarrency.</TableCaption>
        <TableHeader>
        <TableRow>
        <TableHead className="w-[100px]">Coin</TableHead>
        <TableHead>Symbol</TableHead>
        <TableHead>Volume</TableHead>
        <TableHead>Market Cap</TableHead>
        <TableHead>24H</TableHead>
        <TableHead>Price</TableHead>
        <TableHead className="text-right">Remove</TableHead>
      </TableRow>
        </TableHeader>
        <TableBody>
          {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium flex items-center gap-2">
                <Avatar>
                  <AvatarImage src="https://cdn.pixabay.com/photo/2017/03/12/02/57/bitcoin-2136339_1280.png" />
                </Avatar>
                <span>Bitcoin</span>
              </TableCell>
              <TableCell>BTC</TableCell>
              <TableCell>1.2324323</TableCell>
              <TableCell>234533</TableCell>
              <TableCell>-23343</TableCell>
              <TableCell>$25530.00</TableCell>
              <TableCell className="text-right">
                <Button variant="ghost" onClick={() => handleRemoveToWatchList(item.id)} size="icon" className="h-10 w-10">
                  <BookmarkFilledIcon />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
