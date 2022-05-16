import React, { useEffect, useState } from "react";
import { SliderComp } from "../../components/home/slider/SliderComp";
import { CountDownTimer } from "../../components/home/main/countDownTimer/CountDownTimer";
import { RecentBlog } from "../../components/home/main/recentBlog/RecentBlog";
import { FeaturedProducts } from "../../components/home/main/featuredProducts/FeaturedProducts";
import { scrollUp } from "../../helper";

export default function Homepage() {
  useEffect(() => scrollUp(0), []);
  return (
    <>
      <SliderComp />
      <CountDownTimer />
      <FeaturedProducts />
      <RecentBlog />
    </>
  );
}
