import React from "react";
import Header from "./common/Header";
import Banner from "./HomeComponents/Banner";
import FeaturedCategories from "./HomeComponents/FeaturedCategories";
import ThisJustIn from "./HomeComponents/ThisJustIn";
import ProductReview from "./HomeComponents/ProductReview";
import BetterLiving from "./HomeComponents/BetterLiving";


export default function Home() {
  return (
    <>
    <Banner/>
    <FeaturedCategories/>
    <ThisJustIn/>
    <ProductReview/>
    <BetterLiving/>
    </>
  );
}
