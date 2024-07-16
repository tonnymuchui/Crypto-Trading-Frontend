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
export const AssetTables = () => {
  return (
    <Table>
    <TableCaption>A list of your recent Crypocarrency.</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead className="w-[100px]">Coin</TableHead>
        <TableHead>Symbol</TableHead>
        <TableHead>Volume</TableHead>
        <TableHead>Market Cap</TableHead>
        <TableHead>24H</TableHead>
        <TableHead className="text-right">Price</TableHead>
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
  
  )
}
