import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { BookmarkFilledIcon, DotIcon } from '@radix-ui/react-icons'
import { BookmarkIcon } from 'lucide-react'
import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { TreadingForm } from './TreadingForm'
import { StockChart } from '../Home/StockChart'


export const StockDetails = () => {
  return (
    <div className='p-5 mt-5'>
      <div className='flex justify-between'>
        <div className='flex gap-5 items-center'>
          <div>
            <Avatar>
              <AvatarImage src='https://cdn.pixabay.com/photo/2017/03/12/02/57/bitcoin-2136339_1280.png' />
            </Avatar>
          </div>
        
        <div className='flex items-center gap-2'>
          <p>BTC</p>
          <DotIcon className='text-gray-500' />
          <p className='text-gray-400'>Bitcoin</p>
        </div>
        <div className='flex items-end gap-2'>
          <p className='text-xl font-bold'>$ 2433</p>
          <p className='text-red-500'>
            <span>-4343.5443</span>
            <span>(-2346.655)</span>
          </p>
        </div>
      </div>
      <div className='flex items-center gap-4'>
        <Button>
         {true? <BookmarkFilledIcon />:
          <BookmarkIcon className='h-6 w6'/>
          }
        </Button>
        <Dialog>
  <DialogTrigger>
    <Button size="lg">
      Tread
    </Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>How much do you want to spend?</DialogTitle>
      <TreadingForm />

    </DialogHeader>
  </DialogContent>
</Dialog>

      </div>
      </div>
      <div className='mt-14'>
        <StockChart />
      </div>
    </div>
  )
}
