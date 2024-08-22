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
export const Withdrawal = () => {
  return (
    <div className="p-5 lg:p-20">
    <h1 className="flex font-bold text-3xl justify-start">Withdrawal</h1>
    <Table>
      <TableCaption>A list of your watchlist Crypocarrency.</TableCaption>
      <TableHeader>
      <TableRow>
      <TableHead className="w-[100px]">Date</TableHead>
      <TableHead className="text-center">Method</TableHead>
      <TableHead className="text-center">Amount</TableHead>
      <TableHead className="text-right">Status</TableHead>
    </TableRow>
      </TableHeader>
      <TableBody>
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => (
          <TableRow key={index}>
            <TableCell>
              <p>2024/07/17</p>
              <p className='text-gray-500'>04:44:23</p>
            </TableCell>
            <TableCell>Bank</TableCell>
            <TableCell>1.2324323</TableCell>
            <TableCell className="text-right">454</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
  )
}