import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import Image from "next/image";

type CarouselProps = {
  images: string[];
  autoSlide: boolean;
  autoSlideInterval?: number;
};

export default function Carousel({
  images,
  autoSlide = false,
  autoSlideInterval = 4000,
}: CarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };

  const handleNextSlide = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };

  useEffect(() => {
    let slideInterval: NodeJS.Timeout;
    if (autoSlide) {
      slideInterval = setInterval(() => {
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
      }, autoSlideInterval);
    }
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval, currentSlide, images.length]);

  return (
    <div className="relative">
      <Image src={images[currentSlide] || ""} width={1519} height={651} alt="banner"/>

      <div className="absolute inset-0 flex items-center justify-between px-[130px]">
        <button onClick={handlePrevSlide}>
          <ChevronLeft size={40} />
        </button>
        {currentSlide === 0 && (
          <div className="flex flex-col justify-center items-center">
            <div className="text-5xl font-extralight tracking-wider h-[80px]">
              NEW COLLECTION
            </div>
            <button className="text-sm border-[1px] w-[160px] h-[40px] font-extralight border-primary-main1 hover:text-primary-main2 hover:bg-primary-main1">
              Shop Now
            </button>
          </div>
        )}
        <button onClick={handleNextSlide}>
          <ChevronRight size={40} />
        </button>
      </div>
    </div>
  );
}
