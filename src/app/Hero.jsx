"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Play, Star } from "lucide-react";

import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../_components/ui/carousel";

const heroMovies = [
  {
    id: 1,
    title: "Demon Slayer: Infinity Castle",
    year: 2025,
    rating: "8.8",
    duration: "2h 15min",
    genre: "Animation, Action, Fantasy",
    description:
      "Tanjiro and the Demon Slayer Corps infiltrate the treacherous Infinity Castle to face Muzan Kibutsuji and the Upper Rank demons in an epic final battle.",
    image: "/demonslayer.jpg",
  },
  {
    id: 2,
    title: "Fight Club",
    year: 1999,
    rating: "8.8",
    duration: "2h 19min",
    genre: "Drama",
    description:
      "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
    image: "/fightclub3.jpg",
  },
  {
    id: 3,
    title: "American Psycho",
    year: 2000,
    rating: "7.6",
    duration: "1h 42min",
    genre: "Crime, Drama, Horror",
    description:
      "A wealthy New York City investment banking executive, Patrick Bateman, hides his alternate psychopathic ego from his co-workers and friends as he delves deeper into his violent fantasies.",
    image: "/americanpsycho1.jpg",
  },
  {
    id: 4,
    title: "F1",
    year: 2025,
    rating: "8.1",
    duration: "2h 35min",
    genre: "Action, Drama, Sport",
    description:
      "A former Formula 1 driver returns to the track to mentor a talented young rookie and race for an underdog APXGP team.",
    image: "/f12.jpg",
  },
];

export const Hero = () => {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section className="relative w-full aspect-12/5 min-h-125 overflow-hidden bg-black">
      <Carousel
        setApi={setApi}
        opts={{ loop: true }}
        plugins={[
          Autoplay({
            delay: 5000,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
          }),
        ]}
        className="w-full h-full"
      >
        <CarouselContent className="h-full ml-0">
          {heroMovies.map((movie, index) => (
            <CarouselItem
              key={movie.id}
              className="relative w-full pl-0 h-full aspect-12/5 min-h-125"
            >
              {/* Зураг болон Градиент сүүдэр */}
              <div className="absolute inset-0">
                <Image
                  src={movie.image}
                  alt={movie.title}
                  fill
                  className="object-cover brightness-105"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/30 via-40% to-transparent" />
              </div>

              {/* Киноны текст болон товчлуурууд */}
              <div className="relative z-10 flex flex-col justify-center h-full p-8 md:p-16 max-w-2xl text-white gap-3">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#ff2b55]">
                  <span className="w-5 h-0.5 bg-[#ff2b55]"></span>
                  NOW STREAMING
                </div>

                <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
                  {movie.title} ({movie.year})
                </h1>

                <div className="flex items-center gap-3 text-sm text-gray-300 font-medium">
                  <span className="flex items-center gap-1 bg-[#e5a00d] text-black font-bold px-2 py-0.5 rounded text-xs">
                    <Star className="w-3.5 h-3.5 fill-black" /> {movie.rating}
                  </span>
                  <span>{movie.year}</span>
                  <span>{movie.duration}</span>
                  <span>{movie.genre}</span>
                </div>

                <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                  {movie.description}
                </p>

                <div className="flex items-center gap-3 pt-2">
                  <button className="flex items-center gap-2 bg-[#ff2b55] hover:bg-[#e02448] text-white font-semibold px-6 py-2.5 rounded-full text-sm transition-all duration-300 shadow-lg shadow-[#ff2b55]/20 hover:scale-105 cursor-pointer">
                    <Play className="w-4 h-4 fill-white" />
                    Watch trailer
                  </button>

                  <button className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-2.5 rounded-full text-sm backdrop-blur-md transition-all duration-300 cursor-pointer">
                    Browse library
                  </button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Удирдлагын товчлуурууд болон Цэгүүд */}
        <div className="absolute bottom-6 right-8 md:right-16 z-20 flex items-center gap-3">
          <button
            onClick={() => api?.scrollPrev()}
            className="w-10 h-10 rounded-full bg-[#16181e]/80 border border-white/20 text-white flex items-center justify-center transition-all duration-300 hover:bg-[#ff2b55] hover:border-transparent hover:scale-110 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 px-1">
            {heroMovies.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`transition-all duration-300 cursor-pointer ${
                  current === index
                    ? "w-7 h-3 bg-[#ff2b55] rounded-full"
                    : "w-3 h-3 rounded-full border-2 border-white/40 bg-transparent hover:border-white"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => api?.scrollNext()}
            className="w-10 h-10 rounded-full bg-[#16181e]/80 border border-white/20 text-white flex items-center justify-center transition-all duration-300 hover:bg-[#ff2b55] hover:border-transparent hover:scale-110 cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </Carousel>
    </section>
  );
};
