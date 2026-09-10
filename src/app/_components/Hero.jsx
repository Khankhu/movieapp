"use client";
import Image from "next/image";
import { Play } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const heroMovies = [
  {
    id: 1,
    title: "Wicked",
    rating: "6.9",
    description:
      "Elphaba, a misunderstood young woman because of her green skin...",
    image: "/hero.jpg",
  },
  {
    id: 2,
    title: "Gladiator II",
    rating: "7.2",
    description:
      "Years after witnessing the death of the revered hero Maximus...",
    image: "/hero.jpg",
  },
  {
    id: 3,
    title: "Dune: Part Two",
    rating: "8.5",
    description:
      "Paul Atreides unites with Chani and the Fremen while seeking revenge...",
    image: "/hero.jpg",
  },
];

export const Hero = () => {
  return (
    <section className="relative w-full aspect-12/5 overflow-hidden bg-black">
      <Carousel
        plugins={[Autoplay({ delay: 5000, stopOnInteraction: false })]}
        className="w-full h-full "
      >
        <CarouselContent className="h-full ml-0">
          {heroMovies.map((movie) => (
            <CarouselItem
              key={movie.id}
              className="relative w-full h-full pl-0 aspect-12/5"
            >
              <div className="absolute inset-0">
                <Image
                  src={movie.image}
                  alt={movie.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent" />
              </div>
              <div className="relative z-10 flex flex-col justify-end h-full p-8 md:p-16 max-w-2xl text-white space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-yellow-400 font-bold">
                    ★ {movie.rating}
                  </span>
                </div>
                <h1 className="text-3xl md:text-5xl font-bold">
                  {movie.title}
                </h1>
                <p className="text-sm md:text-base text-gray-300 line-clamp-3">
                  {movie.description}
                </p>
                <div className="flex gap-3 pt-2">
                  <button className="px-4 py-2 bg-white text-black font-semibold rounded-md hover:bg-gray-200">
                    Watch Trailer
                  </button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 bg-black/40 text-white" />
        <CarouselNext className="right-4 bg-black/40 text-white" />
      </Carousel>
      {/* <Image
        src="/heroo.jpg"
        alt="Wicked"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent" />

      <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-16 text-white z-10 gap-3 sm:gap-4">
        <div>
          <p className="text-xs sm:text-sm">Now Playing:</p>
          <h1 className="text-2xl sm:text-4xl font-bold mt-1">Wicked</h1>
          <div className="flex items-center gap-1.5 mt-1 sm:mt-2">
            <span className="text-yellow-400 text-base sm:text-lg">★</span>
            <span className="text-sm sm:text-base font-semibold">6.9</span>
            <span className="text-white/60 text-xs sm:text-sm">/10</span>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-white/90 max-w-md leading-relaxed line-clamp-3 sm:line-clamp-none">
          Elphaba, a misunderstood young woman because of her green skin, and
          Glinda, a popular girl, become friends at Shiz University in the Land
          of Oz. After an encounter with the Wonderful Wizard of Oz, their
          friendship reaches a crossroads.
        </p>

        <div>
          <button className="flex items-center gap-2 bg-white text-black px-4 sm:px-6 py-2 sm:py-2.5 rounded-md font-medium text-sm sm:text-base hover:bg-white/90 transition-all">
            <Play className="w-4 h-4 fill-black" />
            Watch Trailer
          </button>
        </div>
      </div> */}
    </section>
  );
};
