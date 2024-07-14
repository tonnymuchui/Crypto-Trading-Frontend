import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { DragHandleHorizontalIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Avatar } from "@/components/ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { SideBar } from "../SideBar";

export const NavBar = () => {
  return (
    <div className="px-2 py-3 border-b z-50 bg-background bg-opacity-0 sticky top-0 left-0 right-0 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <Sheet>
          <SheetTrigger>
            <Button variant="ghost" size="icon" className="full h-11 w-11">
              <DragHandleHorizontalIcon className="h-7 w-7" />
            </Button>
          </SheetTrigger>
          <SheetContent
            className="w-72 border-r-0 flex flex-col justify-center"
            side="left"
          >
            <SheetHeader>
              <SheetTitle>
                <div className="text-3xl flex justify-center items-center gap-1">
                  <Avatar>
                    <AvatarImage src="https://cdn.pixabay.com/photo/2018/02/04/17/39/crypto-currency-3130382_1280.jpg" />
                  </Avatar>

                  <div>
                    <span className="font-bold text-orange-700">Crypto</span>
                    <span>Trade</span>
                  </div>
                </div>
              </SheetTitle>
            </SheetHeader>
            <SideBar/>
          </SheetContent>
        </Sheet>
        <p className="text-sm lg:text-base cursor-pointer">Creypto Trade</p>
        <div className="p-0 ml-9">
          <Button variant="outline" className="flex items-center gap-3">
            <MagnifyingGlassIcon/>
            <span>Search</span>
          </Button>
        </div>
      </div>
      <div>
        <Avatar>
          <AvatarFallback>
          </AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};
