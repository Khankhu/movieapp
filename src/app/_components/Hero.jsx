import Image from "next/image";

export const Hero = () => {
  return (
    <section className="relative w-full aspect-12/5">
      <Image
        src="/heroo.jpg"
        alt="Hero Background"
        fill
        priority
        className="object-cover h-full w-full"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
    </section>
  );
};
