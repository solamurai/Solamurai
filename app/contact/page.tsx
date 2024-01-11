// your-page-file.js

import Link from "next/link";
import { Navigation } from "../components/nav";

export default function YourPage() {
  return (
    <div
      className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0"
      style={{
        backgroundImage: 'url("/dojo1.png")',
        backgroundSize: 'cover',
      }}
    >
      <Navigation />

      {/* Container with scrolling enabled */}
      <div
        className="container flex flex-col items-center justify-center min-h-screen px-4 mx-auto overflow-y-auto mt-20"
      >
        {/* Title */}
        <h1
          className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text text-center text-black font-bold text-shadow" // Added text-shadow class
        >
          DOJO
        </h1>

        {/* Introduction text content */}
        <div className="mt-8 text-white p-8 rounded-md text-center text-shadow"> {/* Added text-shadow class */}
          <p>
            Welcome to Solamurai Token, a non-utility token where value emanates from its holders in true samurai fashion. Our dojo is a sanctuary for those seeking strength, resilience, and the principles of a free-market arena. In the Solana blockchain dojo, we unite under the banner of strength meeting code, embracing resilience, innovation, and the very spirit that defines a Solamurai. Here, we rise as a community, valuing the principles that shape a decentralized future.
            <br />
            <br />
            Solamurai Token allocates 8%, with 4% for development and the team, and an additional 4% for marketing initiatives, potentially including efforts for centralized exchange (CEX) listings if decided by the community. Our innovative marketing strategy involves selling portions of the allocation as we reach milestones, initially focusing on organic growth through word of mouth. As we build a solid foundation, we'll progressively implement marketing initiatives, aligning with the community's growth and goals. Sharpen your skills, fortify your resolve, and let the blockchain battles commence. May your transactions be swift, your code robust, and your journey legendary. Together, Solamurai, we forge the path to the decentralized horizon. Join us in shaping the future of decentralized currency, where the value comes from its holders in a true samurai way.
          </p>
        </div>

        {/* Token Information box */}
        <div className="mt-8 text-white p-8 rounded-md text-center text-shadow"> {/* Added text-shadow class */}
          <p>
            Token Information:
            <br />
            <br />
            Supply: 888,888,888 million
            <br />
            CA (TBA)
            <br />
            Tax: 0%
            <br />
            Dev/Team Allocation: 4%
            Address: solamurai.sol
            <br />
            Marketing Allocation: 4%
            Address: solatreasury.sol
          </p>
        </div>

        {/* Add more space at the bottom */}
        <div className="mt-10" />



        {/* Purchase button with link */}
        <div className="mt-8">
          <Link href="/purchase">
            <div className="bg-white text-black font-bold py-2 px-4 rounded">
              Purchase
            </div>
          </Link>
        </div>

        {/* Add more space at the bottom */}
        <div className="mt-16" />

        {/* Warning about cryptocurrency */}
        <p className="text-white text-center font-bold italic text-shadow"> {/* Added text-shadow class */}
          WARNING: The path of crypto investment is treacherous. Invest wisely, embrace risk, but never more than your soul can endure.
        </p>

        {/* Add more space at the bottom */}
        <div className="mt-6" />
      </div>
    </div>
  );
}
