import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { logout } from "@/Redux/Auth/Action";

// shadcn components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { 
  Tooltip, 
  TooltipContent, 
  TooltipTrigger,
  TooltipProvider 
} from "@/components/ui/tooltip";

// Icons
import {
  AvatarIcon,
  MagnifyingGlassIcon,
  HamburgerMenuIcon,
  DashboardIcon,
  BookmarkIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import {
  WalletIcon,
  BellIcon,
  ChevronDownIcon,
  ArrowUpRightIcon,
  Landmark,
  Settings,
  LogOut,
  Activity,
  TrendingUp,
  Home,
} from "lucide-react";

// Import SideBar component
import SideBar from "../SideBar/SideBar";
import { fetchCoinDetails } from "@/Redux/Coin/Action";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { auth } = useSelector((store) => store);
  const [scrolled, setScrolled] = useState(false);
  const [notifications, setNotifications] = useState(3); // Example notification count

  // Listen for scroll to add glass effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigate = () => {
    if (auth.user) {
      auth.user.role === "ROLE_ADMIN" ? navigate("/admin/withdrawal") : navigate("/profile");
    } else {
      navigate("/login");
    }
  };
  useEffect(() => {
    dispatch(fetchCoinDetails({
      coinId: "bitcoin",
      jwt: auth.jwt || localStorage.getItem("jwt"),
    }));
  }, []);
  const { coin } = useSelector((store) => store);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  // Quick nav items
  const quickNavItems = [
    { name: "Portfolio", icon: <DashboardIcon />, path: "/portfolio" },
    { name: "Markets", icon: <TrendingUp size={16} />, path: "/markets" },
    { name: "Watchlist", icon: <BookmarkIcon />, path: "/watchlist" },
    { name: "Wallet", icon: <WalletIcon size={16} />, path: "/wallet" },
  ];

  return (
    <TooltipProvider>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className={`px-3 md:px-6 py-3 border-b z-50 sticky top-0 left-0 right-0 flex justify-between items-center ${
          scrolled 
            ? "bg-background/80 backdrop-blur-md shadow-sm" 
            : "bg-background"
        } transition-all duration-300`}
      >
        {/* Left section: Logo, hamburger menu, and search */}
        <div className="flex items-center gap-3">
          {/* Mobile Sidebar Trigger */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full h-10 w-10 lg:hidden hover:bg-primary/10 hover:scale-105 transition-all"
              >
                <HamburgerMenuIcon className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              className="w-80 border-r-0 p-0"
              side="left"
            >
              <SheetHeader className="p-4 border-b">
                <SheetTitle>
                  <motion.div 
                    className="text-2xl flex items-center gap-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Avatar className="h-8 w-8 bg-orange-100">
                      <AvatarImage src="https://cdn.pixabay.com/photo/2021/04/30/16/47/binance-logo-6219389_1280.png" />
                      <AvatarFallback className="bg-orange-100 text-orange-700">CW</AvatarFallback>
                    </Avatar>
                    <div>
                      <span className="font-bold text-orange-700">C</span>
                      <span className="font-semibold">Wallet</span>
                    </div>
                  </motion.div>
                </SheetTitle>
              </SheetHeader>
              <SideBar />
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 cursor-pointer" 
            onClick={() => navigate("/")}
          >
            <Avatar className="h-8 w-8 hidden sm:block bg-orange-100">
              <AvatarImage src="https://cdn.pixabay.com/photo/2021/04/30/16/47/binance-logo-6219389_1280.png" />
              <AvatarFallback className="bg-orange-100 text-orange-700">CW</AvatarFallback>
            </Avatar>
            <div className="font-medium text-lg">
              <span className="font-bold text-orange-700">C</span>
              <span>Wallet</span>
            </div>
          </motion.div>

          {/* Navigation Items - Desktop Only */}
          <div className="hidden lg:flex items-center ml-6 space-x-1">
            {quickNavItems.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                className="flex items-center gap-2 hover:bg-primary/10 transition-all"
                onClick={() => navigate(item.path)}
              >
                <span className="text-primary/70">{item.icon}</span>
                <span>{item.name}</span>
              </Button>
            ))}
          </div>
        </div>

        {/* Right section: Search, Notifications, Profile */}
        <div className="flex items-center gap-2">
          {/* Search Button */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                className="rounded-full hidden sm:flex items-center gap-2 hover:bg-primary/10"
                onClick={() => navigate("/search")}
              >
                <MagnifyingGlassIcon className="h-4 w-4" />
                <span className="hidden md:inline">Search</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Search markets</TooltipContent>
          </Tooltip>

          {/* Crypto Price Quick View */}
          <Badge variant="outline" className="hidden md:flex items-center gap-1 py-1 px-3 bg-green-50">
            <span className="text-green-600 font-medium">BTC</span>
            <span className="text-green-700">${coin.coinDetails?.market_data?.current_price?.usd}</span>
            <ArrowUpRightIcon className="h-3 w-3 text-green-600" />
          </Badge>

          {/* Notifications */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" className="rounded-full relative hover:bg-primary/10" size="icon">
                <BellIcon className="h-5 w-5" />
                {notifications > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-1 right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center"
                  >
                    {notifications}
                  </motion.span>
                )}
              </Button>
            </TooltipTrigger>
            <TooltipContent>Notifications</TooltipContent>
          </Tooltip>

          {/* User Profile */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer"
              >
                <Avatar className="h-9 w-9 ring-2 ring-offset-2 ring-offset-background ring-primary/20">
                  {!auth.user ? (
                    <AvatarFallback className="bg-primary/10">
                      <AvatarIcon className="h-5 w-5" />
                    </AvatarFallback>
                  ) : (
                    <>
                      <AvatarImage src={auth.user?.avatar} />
                      <AvatarFallback className="bg-primary/10">
                        {auth.user?.fullName[0].toUpperCase()}
                      </AvatarFallback>
                    </>
                  )}
                </Avatar>
              </motion.div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              {auth.user ? (
                <>
                  <div className="flex flex-col space-y-1 p-2 border-b">
                    <p className="font-medium">{auth.user.fullName}</p>
                    <p className="text-xs text-muted-foreground">{auth.user.email}</p>
                  </div>
                  <DropdownMenuItem onClick={() => navigate("/profile")} className="cursor-pointer">
                    <PersonIcon className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate("/wallet")} className="cursor-pointer">
                    <WalletIcon className="mr-2 h-4 w-4" />
                    <span>Wallet</span>
                  </DropdownMenuItem>  
                  <DropdownMenuItem onClick={() => navigate("/activity")} className="cursor-pointer">
                    <Activity className="mr-2 h-4 w-4" />
                    <span>Activity</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate("/settings")} className="cursor-pointer">
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleLogout} className="cursor-pointer text-red-600">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Logout</span>
                  </DropdownMenuItem>
                </>
              ) : (
                <>
                  <DropdownMenuItem onClick={() => navigate("/login")} className="cursor-pointer">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Login</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate("/register")} className="cursor-pointer">
                    <PersonIcon className="mr-2 h-4 w-4" />
                    <span>Register</span>
                  </DropdownMenuItem>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </motion.div>
    </TooltipProvider>
  );
};

export default Navbar;