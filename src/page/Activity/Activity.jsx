import React from 'react'
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



export const Activity = () => {
  return (
    <div className="p-5 lg:p-20">
    <h1 className="flex font-bold text-3xl justify-start">Activity</h1>
    <Table>
      <TableCaption>A list of your watchlist Crypocarrency.</TableCaption>
      <TableHeader>
      <TableRow>
      <TableHead className="w-[100px]">Date & Time</TableHead>
      <TableHead>Trending Pairs</TableHead>
      <TableHead>Buying Price</TableHead>
      <TableHead>Selling Price</TableHead>
      <TableHead>Order Type</TableHead>
      <TableHead>Profit/Loss</TableHead>
      <TableHead className="text-right">Value</TableHead>
    </TableRow>
      </TableHeader>
      <TableBody>
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => (
          <TableRow key={index}>
            <TableCell>
              <p>2024/07/17</p>
              <p className='text-gray-500'>04:44:23</p>
            </TableCell>
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
            <TableCell className="text-right">454</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
  )
}
