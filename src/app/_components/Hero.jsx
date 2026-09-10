import Image from "next/image";
import { Play } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const HeroMovies = [
  {
    id: 1,
    title: "Wicked",
    rating: "6.9",
    description:
      "Elphaba, a misunderstood young woman because of her green skin...",
    image: "/heroo.jpg",
  },
  {
    id: 2,
    title: "Wicked",
    rating: "6.9",
    description: "hih",
    image: "/heroo.jpg",
  },
  {
    id: 3,
    title: "Wicked",
    rating: "6.9",
    description: "heh",
    image: "/heroo.jpg",
  },
  {
    id: 4,
    title: "Wicked",
    rating: "6.9",
    description: "hah",
    image: "/heroo.jpg",
  },
];

export const Hero = () => {
  return (
    <section className="relative w-full aspect-12/5 overflow-hidden bg-black">
      <Image
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
          friendship reaches a crossroads ghghghghghghghghghhgg.
        </p>

        <div>
          <button className="flex items-center gap-2 bg-white text-black px-4 sm:px-6 py-2 sm:py-2.5 rounded-md font-medium text-sm sm:text-base hover:bg-white/90 transition-all">
            <Play className="w-4 h-4 fill-black" />
            Watch Trailer
          </button>
        </div>
      </div>
    </section>
  );
};
