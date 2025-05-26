"use client";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ProjectCard({ title, heading, subhead, images, description, skills, websiteLink }) {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
      spacing: 10,
    },
    breakpoints: {
      "(max-width: 768px)": {
        slides: { perView: 1 },
      },
    },
  });

  const showArrows = images.length > 1;

  return (
    <div className="bg-darkg/95 rounded-3xl p-8 shadow-lg flex flex-col gap-6 w-full hover:shadow-[0_0_25px_#214024] transition duration-300">
      <h2 className="text-4xl text-amber-50" style={{ fontFamily: "var(--font-mansalva)" }}>{title}</h2>
      <h2 className="text-xl text-amber-50" style={{ fontFamily: "var(--font-mansalva)" }}>{heading}</h2>
      <h3 className="text-md text-amber-50" style={{ fontFamily: "var(--font-inter)" }}>{subhead}</h3>

      {/* Slider with optional arrows */}
      <div className="relative">
        <div ref={sliderRef} className="keen-slider rounded-xl overflow-hidden">
          {images.map((img, index) => (
            <div key={index} className="keen-slider__slide">
              <img
                src={img}
                alt={`Slide ${index}`}
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
          ))}
        </div>

        {showArrows && (
          <>
            <button
              onClick={() => instanceRef.current?.prev()}
              className="absolute top-1/2 left-2 -translate-y-1/2 bg-amber-50/50 text-darkg rounded-full p-2 shadow hover:bg-lightg"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => instanceRef.current?.next()}
              className="absolute top-1/2 right-2 -translate-y-1/2 bg-amber-50/50 text-darkg rounded-full p-2 shadow hover:bg-lightg"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}
      </div>

      <p className="text-amber-50/50 text-md justify-center flex italic" style={{ fontFamily: "var(--font-inter)" }}>{skills}</p>
      <p className="text-amber-50 text-md mb-4" style={{ fontFamily: "var(--font-inter)" }}>{description}</p>

      {websiteLink && (
        <a
          href={websiteLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-center text-darkg bg-amber-50 hover:bg-lightg transition px-4 py-2 rounded-full"
        >
          visit link
        </a>
      )}
    </div>
  );
}
