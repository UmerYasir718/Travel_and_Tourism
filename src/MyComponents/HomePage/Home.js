import React, { useEffect, useState } from "react";
import DowntoTop from "../../mainComponets/DowntoTop";
import LowerFooter from "../../mainComponets/LowerFooter";
import MostPopularRoutes from "../../mainComponets/MostPopularRoutes";
import SelectBar from "../../mainComponets/SelectBar";
import TopDestination from "../../mainComponets/TopDestination";
import TopVisaDestination from "../../mainComponets/TopVisaDestination";
import UpperFooter from "../../mainComponets/UpperFooter";
import Carousel from "./Carousel";
import CarouselButtons from "./CarouselButtons";
import NavHome from "./NavHome";
export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    // You can adjust the scroll threshold as needed
    const scrollThreshold = 150;

    setIsVisible(scrollY > scrollThreshold);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <NavHome />
      <SelectBar />
      <CarouselButtons />
      <Carousel />
      <TopDestination />
      <MostPopularRoutes />
      {/* <CarouselOfPapularRoutes /> */}
      <TopVisaDestination />
      <UpperFooter />
      <LowerFooter />
      <DowntoTop />
    </div>
  );
}
