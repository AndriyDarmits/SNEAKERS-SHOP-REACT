import { useEffect } from "react";
import { CountDownTimer } from "../../components/home/main/countDownTimer/CountDownTimer";
import { FeaturedProducts } from "../../components/home/main/featuredProducts/FeaturedProducts";
import { RecentBlog } from "../../components/home/main/recentBlog/RecentBlog";
import { Header } from "../../components/home/header/Header";
import { scrollUp } from "../../helper";

export default function Homepage() {
  useEffect(() => scrollUp(0), []);
  return (
    <>
      <Header />
      <CountDownTimer />
      <FeaturedProducts />
      <RecentBlog />
    </>
  );
}
