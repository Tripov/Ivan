// *********************
// Role of the component: Simple slider component built with the help of slick-carousel
// Name of the component: SimpleSlider.tsx
// Developer: Aleksandar Kuzmanovic
// Version: 1.0
// Component call: <SimpleSlider />
// Input parameters: no input parameters
// Output: Slider component built with the help of slick-carousel
// *********************

"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slider-container max-w-screen-2xl mx-auto px-16 max-md:px-7">
      <Slider {...settings}>
        <div className="h-[500px] max-lg:h-[400px] max-md:h-[250px] max-[500px]:h-[200px] max-[400px]:h-[150px] relative">
          <div className="absolute left-[50%] translate-x-[-50%] translate-y-[30%] h-full text-center max-lg:translate-y-[25%] max-md:translate-y-[20%] max-sm:hidden">
            <p className="text-xl font-light underline underline-offset-4 mb-5 max-[1162px]:text-lg max-lg:mb-2 max-md:text-base max-md:mb-1">
              Наушники
            </p>
            <h2 className="text-5xl font-light mb-5 max-[1162px]:text-4xl max-lg:mb-2 max-lg:text-3xl max-md:text-2xl max-md:mb-1">
              Просто чтобы поднять себе настроение
            </h2>
            <p className="mb-5 text-black text-lg font-medium max-[1162px]:text-base max-lg:mb-2 max-lg:text-sm max-md:mb-1">
              Тонкая настройка прослушивания с помощью удобной громкости ползунок для регулировки интенсивности звука в соответствии с вашими предпочтениями.
            </p>
            <Link href="/shop" className="bg-custom-yellow btn w-52 h-14 text-black uppercase border border-black text-xl hover:bg-black hover:text-custom-yellow max-[1162px]:w-44 max-[1162px]:h-10 max-[1162px]:text-lg max-lg:text-base max-lg:w-36 max-md:text-sm max-md:w-32">
              Купить сейчас
            </Link>
          </div>
          <img src="/slider image 1.webp" alt="slider 1" className="h-full" />
        </div>
        <div className="h-[500px] max-lg:h-[400px] max-md:h-[250px] max-[500px]:h-[200px] max-[400px]:h-[150px] relative">
          <div className="absolute left-[50%] translate-x-[-50%] translate-y-[30%] h-full text-center max-lg:translate-y-[25%] max-md:translate-y-[20%] max-sm:hidden">
            <p className="text-xl font-light underline underline-offset-4 mb-5 max-[1162px]:text-lg max-lg:mb-2 max-md:text-base max-md:mb-1">
              Больше Наушники
            </p>
            <h2 className="text-5xl font-light mb-5 max-[1162px]:text-4xl max-lg:mb-2 max-lg:text-3xl max-md:text-2xl max-md:mb-1">
              Используйте беспроводную связь или отправляйтесь домой
            </h2>
            <p className="mb-5 text-black text-lg font-medium max-[1162px]:text-base max-lg:mb-2 max-lg:text-sm max-md:mb-1">
            Легко управляйте своим звуковым миром, увеличив громкость до идеального уровня.
            </p>
            <Link href="/shop" className="bg-custom-yellow btn w-52 h-14 text-black uppercase border border-black text-xl hover:bg-black hover:text-custom-yellow max-[1162px]:w-44 max-[1162px]:h-10 max-[1162px]:text-lg max-lg:text-base max-lg:w-36 max-md:text-sm max-md:w-32">
              Купить сейчас
            </Link>
          </div>
          <img src="/slider image 2.webp" alt="slider 1" className="h-full" />
        </div>
      </Slider>
    </div>
  );
}

export default SimpleSlider;
