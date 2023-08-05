import React from "react"
import Header from "./component/Navbar/Header"
import Footer from "./component/Footer/Footer"
import { Auth0Provider } from "@auth0/auth0-react";
// import "./App.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllProduct from "./Pages/Renderingpage/AllProduct"
import Main from "./Pages/Main/Main"
import Search from "./component/Searchfearure/Search"
import Compare from "./Pages/Compareproduct/Compare";
import Cart from "./Pages/Cart/Cart";

import { CompareProvider } from './context/CompareContext.jsx';
import { ResultsProvider } from "./context/ResultContext";
import { BrandProvider } from "./context/BrandContext";
import { CartProvider } from "./context/CartContext";

import SignUp from "./Pages/auth/Signup";
import Login from "./Pages/auth/Login";
import PhoneSignup from "./Pages/auth/PhoneSignUp";
import { Toaster } from "react-hot-toast";
import Subscription from "./Pages/subscription/Subscription";
import PaymentSuccess from "./Pages/subscription/PaymentSuccess";
const App = () => {
  return (
    // <>
    <Auth0Provider
      domain="dev-kisjwrg5kx37ck8e.us.auth0.com"
      clientId="z8VMm01c9WhvjBakraSHn8jlgdRPtN9n"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}>
      <BrandProvider> 

        <ResultsProvider>
      <CompareProvider>
        <CartProvider>
         <BrowserRouter>
         <Toaster />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/allproducts' element={<AllProduct />} />
          <Route path='/Search' element={<Search />} />
          <Route path='/Compare' element={<Compare/>} />
          <Route path='/Cart' element={<Cart/>} />
          <Route path="/auth/signup" element={<SignUp />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/phonesignup" element={<PhoneSignup />} />
        <Route path="/subscription" element={<Subscription/>}/>
        <Route path="/paymentsuccess" element={<PaymentSuccess/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
      </CartProvider>
      </CompareProvider>
      </ResultsProvider>
      </BrandProvider>

    </Auth0Provider>
  )
}

export default App
