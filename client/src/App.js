import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Signup from "./Components/Signup";
import Login from "./Components/Login";
import LostItems from "./Components/LostItems";
import FoundItems from "./Components/FoundItems";
import Home from "./Components/Home";
import ItemPage from "./Components/ItemPage";
import LostItem from "./Components/Lost_item";
import MyListings from "./Components/MyListings";
import Layout from "./layout";

function App() {

  // Initialize OneSignal (if using push notifications)
  useEffect(() => {
    if (window.OneSignal) {
      window.OneSignal = window.OneSignal || [];
      window.OneSignal.push(() => {
        window.OneSignal.init({
          appId: "YOUR-ONESIGNAL-APP-ID", // Replace with your OneSignal App ID
        });
      });
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* Wrap all routes inside Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />  {/* Home page */}
          <Route path="log-in" element={<Login />} />
          <Route path="sign-up" element={<Signup />} />
          <Route path="lostitems" element={<LostItems />} />
          <Route path="founditems" element={<FoundItems />} />
          <Route path="postitem" element={<LostItem />} />
          <Route path="mylistings" element={<MyListings />} />
          <Route path="item/:itemId" element={<ItemPage />} /> {/* Dynamic route */}
          <Route path="*" element={<Home />} /> {/* Fallback */}
        </Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
