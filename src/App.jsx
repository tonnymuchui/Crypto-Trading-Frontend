import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./page/Home/Home";
import { NavBar } from "./page/Navbar/NavBar";
import { Portfolio } from "./page/Portfolio/Portfolio";
import { Activity } from "./page/Activity/Activity";
import { Wallet } from "./page/Wallet/Wallet";
import { Withdrawal } from "./page/Withdrawal/Withdrawal";
import { PaymentDetails } from "./page/Payment Details/PaymentDetails";
import { StockDetails } from "./page/Stock Details/StockDetails";
import { Profile } from "./page/Profile/Profile";
import { SearchCoin } from "./page/Search/SearchCoin";
import { WatchList } from "./page/Watch List/WatchList";
import { Auth } from "./page/Auth/Auth";

function App() {
  return (
    <>
    {/* <Auth /> */}
    {!false && <div>
    <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/withdrawal" element={< Withdrawal />} />
        <Route path="/payment-details" element={<PaymentDetails />} />
        <Route path="/stock/:id" element={<StockDetails />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/search" element={<SearchCoin />} />
        <Route path="/watchlist" element={<WatchList />} />
      </Routes>
    </div>}


    </>
  );
}

export default App;
