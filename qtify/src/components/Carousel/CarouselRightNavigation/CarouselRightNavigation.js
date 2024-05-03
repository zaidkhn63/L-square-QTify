import React, { useEffect } from "react";
import { useSwiper } from "swiper/react";
import { useState } from "react";
import "./CarouselRightNavigation.css";
import { ReactComponent as RightArrow } from "../../../Assets/RightArrow.svg";

const CarouselRightNavigation = () => {
  const swiper = useSwiper();

  const [isEnd, setIsEnd] = useState(swiper.isEnd);

  useEffect(() => {
    swiper.on("slideChange", () => {
      setIsEnd(swiper.isEnd);
    });
  }, []);

  return (
    <div className="rightNavigation">
      {!isEnd && <RightArrow onClick={() => swiper.slideNext()} />}
    </div>
  );
};

export default CarouselRightNavigation;
