import React from "react";
import { SliderComp } from "../../components/home/slider/SliderComp";
import { CountDownTimer } from "../../components/home/main/countDownTimer/CountDownTimer";
import { RecentBlog } from "../../components/home/main/recentBlog/RecentBlog";
export default function Homepage() {
  return (
    <>
      <SliderComp />
      <CountDownTimer />
      <RecentBlog />
    </>
  );
}
