import React from "react";
import Header from "./common/Header";
import Banner from "./HomeComponents/Banner";
import FeaturedCategories from "./HomeComponents/FeaturedCategories";
import ThisJustIn from "./HomeComponents/ThisJustIn";
import ProductReview from "./HomeComponents/ProductReview";
import BetterLiving from "./HomeComponents/BetterLiving";
import ProductDetails from "./product/product-details/[pid]/page";
import Category from "./category/Category";
import Login from "./modals/Login";


export default function Home() {
  return (
    <>
    <Header/>
    <Banner/>
    <FeaturedCategories/>
    <ThisJustIn/>
    <ProductReview/>
    <BetterLiving/>
    {/* <ProductDetails/> */}
    {/* <Category/> */}
    </>
  );
}
