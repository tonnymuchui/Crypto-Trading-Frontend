import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { ReloadIcon, UpdateIcon } from '@radix-ui/react-icons'
import { CopyIcon, DollarSign, ShuffleIcon, UploadIcon, Wallet2Icon } from 'lucide-react'
import React from 'react'
import { TopUpForm } from './TopUpForm'
import { WithdrawForm } from './WithdrawForm'
import { TransferForm } from './TransferForm'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

export const Wallet = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className='pt-10 w-full lg:w-[60%]'>
        <Card>
          <CardHeader>
            <div className='flex justify-between items-center'>
              <div className='flex items-center gap-5'>
                <Wallet2Icon size={24} />
                <div>
                  <CardTitle className="text-2xl">Wallet</CardTitle>
                  <div className='flex items-center gap-2'>
                    <p className='text-gray-200 text-sm'>#adss</p>
                    <CopyIcon size={16} className='cursor-pointer hover:text-slate-300'/>
                  </div>
                </div>
              </div>
              <div>
                <ReloadIcon className='cursor-pointer hover:text-gray-300'/>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className='flex items-center'>
              <DollarSign />
              <span className='text-2xl font-semibold'>2000</span>
            </div>
            <div className='flex gap-7 mt-5'>
              <Dialog>
                <DialogTrigger>
                  <div className='h-24 w-24 hover:text-gray-300 cursor-pointer flex flex-col items-center justify-center rounded-md shadow-slate-800 shadow-md'>
                    <UploadIcon size={24} />
                    <span className='text-sm mt-2'>Add Money</span>
                  </div>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>
                      Top Up
                    </DialogTitle>
                  </DialogHeader>
                  <TopUpForm />
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger>
                  <div className='h-24 w-24 hover:text-gray-300 cursor-pointer flex flex-col items-center justify-center rounded-md shadow-slate-800 shadow-md'>
                    <UploadIcon size={24} />
                    <span className='text-sm mt-2'>Withdraw</span>
                  </div>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>
                      Withdraw
                    </DialogTitle>
                  </DialogHeader>
                  <WithdrawForm />
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger>
                  <div className='h-24 w-24 hover:text-gray-300 cursor-pointer flex flex-col items-center justify-center rounded-md shadow-slate-800 shadow-md'>
                    <ShuffleIcon size={24} />
                    <span className='text-sm mt-2'>Trasfer</span>
                  </div>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="text-center tex-xl">
                      Transfer to other wallet
                    </DialogTitle>
                  </DialogHeader>
                  <TransferForm />
                </DialogContent>
              </Dialog>
            </div>
          </CardContent>
        </Card>

        <div className='py-5 pt-10'>
          <div className='flex gap-2 items-center pb-5'>
            <h1 className='text-2xl font-semibold'>History</h1>
            <UpdateIcon className='h-7 w-7 p-0 cursor-pointer hover:text-gray-300'/>
          </div>

          <div className='space-y-5'>
            {[1,1,1,1,1,1,1,1].map((item, index) =>
            <div key={index}>
              <Card className="px-5 flex justify-between items-center p-2">
                <div className='flex items-center gap-5'>
                  <Avatar>
                    <AvatarFallback>
                      <ShuffleIcon size={24} />
                    </AvatarFallback>
                  </Avatar>
                  <div className='space-y-1'>
                    <h1>Buy Asset</h1>
                    <p className='text-sm text-gray-500'>2024-07-18</p>
                  </div>
                </div>
                <div>
                  <p className='text-green-500'>4332 USD</p>
                </div>
              </Card>
            </div>)}
          </div>
        </div>
      </div>
    </div>
  )
}
