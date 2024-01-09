import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
  { name: "ENTER THE DOJO", href: "/contact" },
];

export default function Home() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{ backgroundImage: 'url("/dojo.png")', backgroundSize: 'cover' }}
      />

      {/* Content */}
      <div className="flex flex-col items-center justify-center h-full relative z-10">
        <nav className="my-16 animate-fade-in">
          <ul className="flex items-center justify-center gap-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm duration-500 font-bold text-white hover:text-zinc-300"
              >
                {item.name}
              </Link>
            ))}
          </ul>
        </nav>
        <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        <Particles
          className="absolute inset-0 -z-10 animate-fade-in"
          quantity={100}
        />
        {/* Title with flexbox centering */}
        <h1
          className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text text-center text-white font-bold"
        >
          SOLAMURAI
        </h1>
        <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        <div className="my-16 text-center animate-fade-in">
          <h2 className="text-sm text-white font-bold">
            THE LAST SAMURAI{" "}
            <Link
              target="_blank"
              href="https://unkey.dev"
              className="underline duration-500 hover:text-zinc-300"
            ></Link> ON THE <span className="text-white font-bold">SOLANA BLOCKCHAIN</span>
          </h2>
          {/* Additional line with "CA:" */}
          <p className="text-sm text-white mt-40 font-bold">CA:</p>
        </div>
      </div>
    </div>
  );
}
