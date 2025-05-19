import { useEffect, useRef, useState } from "react";
import { AssetTable } from "./AssetTable";
import { Button } from "@/components/ui/button";
import StockChart from "../StockDetails/StockChart";
import { DotIcon } from "@radix-ui/react-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCoinDetails,
  fetchCoinList,
  fetchTreadingCoinList,
  getTop50CoinList,
} from "@/Redux/Coin/Action";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
} from "@/components/ui/pagination";
import { 
  MessageCircle, 
  ChevronLeft, 
  X,
  Wallet,
  ArrowUpRight,
  Sparkles,
  TrendingUp,
  BarChart3,
  ScrollText
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { sendMessage } from "@/Redux/Chat/Action";
import { ScrollArea } from "@/components/ui/scroll-area";
import SpinnerBackdrop from "@/components/custome/SpinnerBackdrop";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const ParallaxBackground = ({ children }) => {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none" 
        style={{ 
          backgroundImage: "url('/api/placeholder/1200/600')",
          backgroundSize: "cover",
          transform: `translateY(${scrollY * 0.1}px)` 
        }}
      />
      {children}
    </div>
  );
};

const HeroSection = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative py-24 px-6 md:px-10 lg:px-16 z-10"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <Badge className="mb-4" variant="outline">
                <Sparkles size={14} className="mr-1" /> New Features
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Your Ultimate <span className="text-primary">Crypto</span> Wallet Experience
              </h1>
              <p className="text-muted-foreground text-lg mb-8">
                Track, trade, and manage your crypto assets with real-time analytics
                and AI-powered insights all in one secure platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="gap-2">
                  Get Started <ArrowUpRight size={18} />
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  View Dashboard
                </Button>
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="relative bg-gradient-to-br from-secondary to-background p-1 rounded-2xl shadow-xl">
              <div className="bg-card rounded-xl overflow-hidden border">
                <StockChart coinId={"bitcoin"} />
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-background p-4 rounded-xl border shadow-lg">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src="/api/placeholder/40/40" />
                </Avatar>
                <div>
                  <p className="font-bold">Bitcoin</p>
                  <p className="text-sm text-green-500">+5.23%</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 bg-background p-4 rounded-xl border shadow-lg">
              <div className="flex items-center gap-3">
                <div>
                  <p className="font-bold text-right">Ethereum</p>
                  <p className="text-sm text-green-500 text-right">+3.17%</p>
                </div>
                <Avatar>
                  <AvatarImage src="/api/placeholder/40/40" />
                </Avatar>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const StatsSection = () => {
  return (
    <div className="py-12 px-6 md:px-10 lg:px-16 bg-secondary/20">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <Card className="border-none bg-background/50 backdrop-blur-sm">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-3xl md:text-4xl font-bold">
                10K+
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-foreground/80">Active Users</CardDescription>
            </CardContent>
          </Card>
          <Card className="border-none bg-background/50 backdrop-blur-sm">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-3xl md:text-4xl font-bold">
                500+
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-foreground/80">Cryptocurrencies</CardDescription>
            </CardContent>
          </Card>
          <Card className="border-none bg-background/50 backdrop-blur-sm">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-3xl md:text-4xl font-bold">
                $2M+
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-foreground/80">Daily Volume</CardDescription>
            </CardContent>
          </Card>
          <Card className="border-none bg-background/50 backdrop-blur-sm">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-3xl md:text-4xl font-bold">
                99.9%
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-foreground/80">Uptime</CardDescription>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <div className="py-24 px-6 md:px-10 lg:px-16">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-16">
          <Badge className="mb-4" variant="outline">
            Advanced Features
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Everything You Need To Manage Your Crypto
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our platform provides comprehensive tools for cryptocurrency management,
            from real-time tracking to AI-powered insights.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="group"
          >
            <Card className="h-full border transition-all group-hover:border-primary/50 group-hover:shadow-lg">
              <CardHeader>
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="text-primary" />
                </div>
                <CardTitle>Real-Time Tracking</CardTitle>
                <CardDescription>
                  Track your cryptocurrency portfolio with real-time price updates and detailed analytics.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="p-0 h-auto">
                  Learn more <ArrowUpRight size={14} className="ml-1" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="group"
          >
            <Card className="h-full border transition-all group-hover:border-primary/50 group-hover:shadow-lg">
              <CardHeader>
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <BarChart3 className="text-primary" />
                </div>
                <CardTitle>Advanced Analytics</CardTitle>
                <CardDescription>
                  Visualize market trends with customizable charts and technical indicators.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="p-0 h-auto">
                  Learn more <ArrowUpRight size={14} className="ml-1" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="group"
          >
            <Card className="h-full border transition-all group-hover:border-primary/50 group-hover:shadow-lg">
              <CardHeader>
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <MessageCircle className="text-primary" />
                </div>
                <CardTitle>AI Crypto Assistant</CardTitle>
                <CardDescription>
                  Get instant answers to your crypto questions with our intelligent chatbot.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="p-0 h-auto">
                  Learn more <ArrowUpRight size={14} className="ml-1" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

const CtaSection = () => {
  return (
    <div className="py-24 px-6 md:px-10 lg:px-16 bg-secondary/20">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <div className="bg-gradient-to-br from-primary/10 to-background rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/api/placeholder/1200/600')] opacity-5 mix-blend-overlay"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Crypto Journey?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Join thousands of users who trust our platform for their cryptocurrency management needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2">
                Create Account <ArrowUpRight size={18} />
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                Explore Features
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Home = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState("all");
  const { coin, chatBot, auth } = useSelector((store) => store);
  const [isBotRelease, setIsBotRelease] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");

  useEffect(() => {
    dispatch(fetchCoinList(page));
  }, [page]);

  useEffect(() => {
    dispatch(fetchCoinDetails({
      coinId: "bitcoin",
      jwt: auth.jwt || localStorage.getItem("jwt"),
    }));
  }, []);

  useEffect(() => {
    if (category === "top50") {
      dispatch(getTop50CoinList());
    } else if (category === "trading") {
      dispatch(fetchTreadingCoinList());
    }
  }, [category]);

  const handlePageChange = (page) => {
    setPage(page);
  };

  const handleBotRelease = () => setIsBotRelease(!isBotRelease);

  const [inputValue, setInputValue] = useState("");

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      dispatch(
        sendMessage({
          prompt: inputValue,
          jwt: auth.jwt || localStorage.getItem("jwt"),
        })
      );
      setInputValue("");
    }
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatBot.messages]);

  if (coin.loading) {
    return <SpinnerBackdrop />;
  }

  return (
    <ParallaxBackground>
      <div className="min-h-screen">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Stats Section */}
        <StatsSection />
        
        {/* Dashboard Section */}
        <div className="py-12 px-6 md:px-10 lg:px-16">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <Tabs defaultValue="dashboard" className="w-full" onValueChange={setActiveTab}>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl md:text-3xl font-bold">
                  Cryptocurrency Market
                </h2>
                <TabsList className="grid grid-cols-2 w-[300px]">
                  <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
                  <TabsTrigger value="chart">Chart</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="dashboard" className="space-y-6">
                <Card>
                  <CardHeader className="px-6">
                    <div className="flex flex-wrap items-center gap-4">
                      <Button
                        variant={category === "all" ? "default" : "outline"}
                        onClick={() => setCategory("all")}
                        className="rounded-full"
                      >
                        All
                      </Button>
                      <Button
                        variant={category === "top50" ? "default" : "outline"}
                        onClick={() => setCategory("top50")}
                        className="rounded-full"
                      >
                        Top 50
                      </Button>
                      <Button
                        variant={category === "trading" ? "default" : "outline"}
                        onClick={() => setCategory("trading")}
                        className="rounded-full"
                      >
                        Trending
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0">
                    <AssetTable
                      category={category}
                      coins={category === "all" ? coin.coinList : coin.top50}
                    />
                    {category === "all" && (
                      <Pagination className="border-t py-3">
                        <PaginationContent>
                          <PaginationItem>
                            <Button
                              variant="ghost"
                              disabled={page === 1}
                              onClick={() => handlePageChange(page - 1)}
                            >
                              <ChevronLeft className="h-4 w-4 mr-1" />
                              Previous
                            </Button>
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationLink
                              onClick={() => handlePageChange(1)}
                              isActive={page === 1}
                            >
                              1
                            </PaginationLink>
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationLink
                              onClick={() => handlePageChange(2)}
                              isActive={page === 2}
                            >
                              2
                            </PaginationLink>
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationLink
                              onClick={() => handlePageChange(3)}
                              isActive={page === 3}
                            >
                              3
                            </PaginationLink>
                          </PaginationItem>
                          {page > 3 && (
                            <PaginationItem>
                              <PaginationLink
                                onClick={() => handlePageChange(3)}
                                isActive
                              >
                                {page}
                              </PaginationLink>
                            </PaginationItem>
                          )}
                          <PaginationItem>
                            <PaginationEllipsis />
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationNext
                              className="cursor-pointer"
                              onClick={() => handlePageChange(page + 1)}
                            />
                          </PaginationItem>
                        </PaginationContent>
                      </Pagination>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="chart">
                <Card>
                  <CardHeader className="flex flex-row items-center">
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src={coin.coinDetails?.image?.large} />
                      </Avatar>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-bold">{coin.coinDetails?.symbol?.toUpperCase()}</p>
                          <DotIcon className="text-gray-400" />
                          <p className="text-gray-400">{coin.coinDetails?.name}</p>
                        </div>
                        <div className="flex items-end gap-2">
                          <p className="text-xl font-bold">
                            ${coin.coinDetails?.market_data?.current_price?.usd}
                          </p>
                          <p
                            className={`${
                              coin.coinDetails?.market_data?.market_cap_change_24h < 0
                                ? "text-red-600"
                                : "text-green-600"
                            }`}
                          >
                            <span>
                              {coin.coinDetails?.market_data?.market_cap_change_24h}
                            </span>
                            <span>
                              (
                              {
                                coin.coinDetails?.market_data
                                  ?.market_cap_change_percentage_24h
                              }
                              %)
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <StockChart coinId={"bitcoin"} />
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
        
        {/* Features Section */}
        <FeaturesSection />
        
        {/* CTA Section */}
        <CtaSection />
        
        {/* Chat Bot */}
        <div className="fixed bottom-5 right-5 z-40 flex flex-col justify-end items-end gap-2">
          {isBotRelease && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="rounded-lg w-[20rem] md:w-[25rem] lg:w-[25rem] h-[70vh] bg-background border shadow-lg overflow-hidden"
            >
              <div className="flex justify-between items-center border-b px-6 h-[12%]">
                <div className="flex items-center gap-2">
                  <MessageCircle size={18} />
                  <p className="font-medium">Crypto Assistant</p>
                </div>
                <Button onClick={handleBotRelease} size="icon" variant="ghost">
                  <X size={18} />
                </Button>
              </div>

              <ScrollArea className="h-[76%] px-5 py-4">
                <div className="flex flex-col gap-5">
                  <div className="self-start pb-5 w-auto">
                    <div className="px-5 py-2 rounded-md bg-secondary w-auto">
                      {`Hi, ${auth.user?.fullName}`}
                      <p>You can ask any crypto-related question</p>
                      <p>Like price, market cap, and more...</p>
                    </div>
                  </div>
                  {chatBot.messages.map((item, index) => (
                    <div
                      ref={index === chatBot.messages.length - 1 ? chatContainerRef : null}
                      key={index}
                      className={`${
                        item.role === "user" ? "self-end" : "self-start"
                      } pb-5 w-auto`}
                    >
                      {item.role === "user" ? (
                        <div className="px-5 py-2 rounded-full bg-primary/20 w-auto">
                          {item.prompt}
                        </div>
                      ) : (
                        <div className="w-full">
                          <div className="bg-secondary flex gap-2 py-4 px-4 rounded-md min-w-[15rem] w-full">
                            <p>{item.ans}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                  {chatBot.loading && (
                    <div className="self-start">
                      <div className="bg-secondary flex gap-2 py-2 px-4 rounded-md">
                        <div className="flex gap-1">
                          <span className="animate-bounce">.</span>
                          <span className="animate-bounce delay-100">.</span>
                          <span className="animate-bounce delay-200">.</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </ScrollArea>

              <div className="h-[12%] border-t flex items-center px-4">
                <Input
                  className="w-full border-none focus-visible:ring-0 focus-visible:ring-offset-0"
                  placeholder="Ask something about crypto..."
                  onChange={handleChange}
                  value={inputValue}
                  onKeyPress={handleKeyPress}
                />
                <Button 
                  size="icon" 
                  variant="ghost" 
                  onClick={() => {
                    if (inputValue.trim()) {
                      dispatch(
                        sendMessage({
                          prompt: inputValue,
                          jwt: auth.jwt || localStorage.getItem("jwt"),
                        })
                      );
                      setInputValue("");
                    }
                  }}
                >
                  <ArrowUpRight size={18} />
                </Button>
              </div>
            </motion.div>
          )}
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              onClick={handleBotRelease} 
              className="h-14 px-6 gap-2 items-center shadow-lg"
            >
              <MessageCircle size={20} />
              <span className="text-lg">Chat Assistant</span>
            </Button>
          </motion.div>
        </div>
      </div>
    </ParallaxBackground>
  );
};

export default Home;