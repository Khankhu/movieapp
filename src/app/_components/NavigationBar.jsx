"use client";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { ChevronDown, ChevronRight, Moon, Search, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const genres = [
  "Action",
  "Adventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Film-Noir",
  "Game-Show",
  "History",
  "Horror",
  "Music",
  "Musical",
  "Mystery",
  "News",
  "Reality-TV",
  "Romance",
  "Sci-Fi",
  "Short",
  "Sport",
  "Talk-Show",
  "Thriller",
  "War",
  "Western",
];

export const NavigationBar = () => {
  const { theme, setTheme } = useTheme();
  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <nav className="h-14.75 w-full">
      <div className="flex justify-around py-[11.5px] h-9">
        <Link href="/">
          <img
            src={theme === "dark" ? "/Darklogo.svg" : "/Lightlogo.svg"}
            alt="Movie"
            className="w-28 h-9"
          />
        </Link>

        <div className="flex gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger className="border text-sm leading-5 flex h-9 items-center gap-2 rounded-lg border-input bg-background px-2 ">
              <ChevronDown className="w-4 h-4" />
              Genre
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[577] px-5 py-5">
              <div className="gap-1">
                <h2 className="text-[24px] leading-8 font-semibold">Genres</h2>
                <p className="text-base leading-6">
                  See lists of movies by genre
                </p>
                <div className="py-4">
                  <DropdownMenuSeparator className="my-0" />
                </div>
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-4">
                {genres.map((genre) => (
                  <Badge
                    key={genre}
                    variant="outline"
                    className="text-[12px] leading-4 font-semibold"
                  >
                    {genre} <ChevronRight />
                  </Badge>
                ))}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="relative">
            <Search className="absolute w-4 h-4 top-1/2 -translate-y-1/2 opacity-55 left-3" />
            <Input
              placeholder="Search..."
              className="w-95 h-9 pl-9 text-sm leading-5"
            />
          </div>
        </div>
        <Button
          onClick={handleTheme}
          size="icon"
          variant="outline"
          className="w-9 h-9"
        >
          {theme === "dark" ? <Sun /> : <Moon />}
        </Button>
      </div>
    </nav>
  );
};
