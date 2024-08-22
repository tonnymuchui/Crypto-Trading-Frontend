import { Button } from "@/components/ui/button";
import { SheetClose } from "@/components/ui/sheet";
import {
  ActivityLogIcon,
  DashboardIcon,
  ExitIcon,
  HomeIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import {
  BookmarkIcon,
  CreditCardIcon,
  LandmarkIcon,
  WalletCardsIcon,
} from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { PaymentDetails } from "../Payment Details/PaymentDetails";
import { Wallet } from "../Wallet/Wallet";

const menu = [
  { name: "Home", path: "/", icon: <HomeIcon className="h-6 w-6" /> },
  {
    name: "Portfolio",
    path: "/portfolio",
    icon: <DashboardIcon className="h-6 w-6" />,
  },
  {
    name: "Watchlist",
    path: "/watchlist",
    icon: <BookmarkIcon className="h-6 w-6" />,
  },
  {
    name: "Activity",
    path: "/activity",
    icon: <ActivityLogIcon className="h-6 w-6" />,
  },
  {
    name: "Wallet",
    path: "/wallet",
    icon: <WalletCardsIcon className="h-6 w-6" />,
  },
  {
    name: "Payment Details",
    path: "/payment-details",
    icon: <LandmarkIcon className="h-6 w-6" />,
  },
  {
    name: "Withdraw",
    path: "/withdrawal",
    icon: <CreditCardIcon className="h-6 w-6" />,
  },
  {
    name: "Profile",
    path: "/profile",
    icon: <PersonIcon className="h-6 w-6" />,
  },
  { name: "Logout", path: "/logout", icon: <ExitIcon className="h-6 w-6" /> },
];

export const SideBar = () => {
  const navigate = useNavigate();

  return (
    <div className="mt-10 space-y-5">
      {menu.map((item) =>
        item.name ? (
          <div key={item.name}>
            <SheetClose className="w-full">
              <Button
                onClick={() => navigate(item.path)}
                variant="outline"
                className="flex items-center gap-5 py-6 w-full"
              >
                <span className="w-8">{item.icon}</span>
                <p>{item.name}</p>
              </Button>
            </SheetClose>
          </div>
        ) : (
          <div key={item.name}>
            <SheetClose className="w-full">
              <Button
                variant="outline"
                className="flex items-center gap-5 py-6 w-full"
              >
                <span className="w-8">{item.icon}</span>
                <p>{item.name}</p>
              </Button>
            </SheetClose>
          </div>
        )
      )}
    </div>
  );
};
