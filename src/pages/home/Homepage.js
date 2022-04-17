import React, { useEffect, useState } from "react";
import { SliderComp } from "../../components/home/slider/SliderComp";
import { CountDownTimer } from "../../components/home/main/countDownTimer/CountDownTimer";
import { RecentBlog } from "../../components/home/main/recentBlog/RecentBlog";
import { FeaturedProducts } from "../../components/home/main/featuredProducts/FeaturedProducts";
import { scrollUp } from "../../helper";
import { Modal } from "./HomePage.style";

export default function Homepage() {
  /*   const [modalIsOpen, setIsOpen] = useState(false); */

  useEffect(() => scrollUp(0), []);
  /*  useEffect(() => setTimeout(() => setIsOpen(true), 2000), []); */

  return (
    <>
      <SliderComp />
      <CountDownTimer />
      <FeaturedProducts />
      <RecentBlog />
      {/*  {modalIsOpen && (
        <Modal>
          <div>
            <button onClick={() => setIsOpen(false)}>Close</button>
          </div>
        </Modal>
      )} */}
    </>
  );
}
