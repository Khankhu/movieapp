import Image from "next/image";
import { Star } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative h-150">
      <Image src="/heroo.jpg" alt="Wicked" fill className="object-cover" />

      <div className="relative mx-auto flex h-full w-full max-w-360 flex-col items-start justify-center gap-4 px-4">
        <div>
          <p className="text-base leading-6 font-normal text-white">
            Now Playing:
          </p>

          <h1 className="text-4xl leading-10 font-bold tracking-tight text-white">
            Wicked
          </h1>

          <div className="flex items-center gap-1">
            <Star className="size-5 fill-yellow-400 text-yellow-400" />
            <p className="text-base leading-6 font-normal text-white">
              <span className="text-[18px] font-semibold">6.9</span>
              <span className="text-white/50">/10</span>
            </p>
          </div>
        </div>

        <p className="text-white text-[12px] leading-4 max-w-75.5 ">
          Elphaba, a misunderstood young woman because of her green skin, and
          Glinda, a popular girl, become friends at Shiz University in the Land
          of Oz. After an encounter with the Wonderful Wizard of Oz, their
          friendship reaches a crossroads.{" "}
        </p>

        <button className="text-white ">Watch Trailer</button>
      </div>
    </section>
  );
};
