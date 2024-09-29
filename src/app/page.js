import React from "react";
import Header from "./common/Header";
import Banner from "./HomeComponents/Banner";
import FeaturedCategories from "./HomeComponents/FeaturedCategories";
import ThisJustIn from "./HomeComponents/ThisJustIn";
import ProductReview from "./HomeComponents/ProductReview";
import BetterLiving from "./HomeComponents/BetterLiving";
import ProductDetails from "./product/product-details/[pid]/page";
import Login from "./modals/Login";
import Footer from "./common/Footer";
import Cart from "./pages/cart/page";
import Category from "./collections/page";


export default function Home() {
  return (
    <>
    <Header/>
    <Banner/>
    <FeaturedCategories/>
    <ThisJustIn/>
    <ProductReview/>
    <BetterLiving/>
    {/* <Footer/> */}
    {/* <ProductDetails/> */}
    {/* <Category/> */}
    {/* <Cart/> */}
    </>
  );
}
