import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Avatar } from "@/components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";  

export const Portfolio = () => {
  return (
    <div className='p-5 lg:p-20'>
      <h1 className='flex font-bold text-3xl justify-start'>Portfolio</h1>
      <Table>
    <TableCaption>A list of your recent Crypocarrency.</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead className="w-[100px]">Asset</TableHead>
        <TableHead className="text-center">Price</TableHead>
        <TableHead className="text-center">Unit</TableHead>
        <TableHead className="text-center">Change</TableHead>
        <TableHead className="text-center">Change %</TableHead>
        <TableHead className="text-right">Volume</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
        {[1,1,1,1,1,1,1,1,1,1].map((item, index) => 
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
        <TableCell className="text-right">$25530.00</TableCell>
      </TableRow>)}
    </TableBody>
  </Table>
    </div>
  )
}
