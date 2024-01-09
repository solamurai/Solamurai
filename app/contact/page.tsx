// your-page-file.js

import Link from "next/link";
import { Navigation } from "../components/nav";

export default function YourPage() {
  return (
    <div
      className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0"
      style={{
        backgroundImage: 'url("/dojo1.png")', // Corrected path
        backgroundSize: 'cover',
      }}
    >
      <Navigation />

      {/* Container with scrolling enabled */}
      <div
        className="container flex flex-col items-center justify-center min-h-screen px-4 mx-auto overflow-y-auto mt-20" // Added mt-20 for top margin
      >
        {/* Title */}
        <h1
          className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text text-center text-black font-bold" // Changed text-white to text-black
        >
          DOJO
        </h1>

        {/* Introduction text content */}
        <div className="mt-8 text-white bg-gradient-to-r from-zinc-900/80 to-zinc-900/60 p-8 rounded-md text-center">
          <p>
            Welcome to Solamurai Token: Forging Value, Building Community
            <br />
            <br />
            Greetings, Solamurai Warriors! Step into the realm of Solamurai Token, where the spirit of the samurai meets the dynamic landscape of the Solana blockchain. Our dojo is a haven for those who seek strength, resilience, and the principles of a free-market arena.
            <br />
            <br />
            Discover the Way of Solamurai:
            <br />
            <br />
            In our Solana blockchain dojo, we unite under the banner of strength meeting code, embracing resilience, innovation, and the very spirit that defines a Solamurai. Here, we rise as a community, valuing the principles that shape a decentralized future.
            <br />
            <br />
            Token Allocation:
            <br />
            Solamurai Token holds a total of 8%, with 4% dedicated to the development and team, and an additional 4% for marketing initiatives, which may include efforts for centralized exchange (CEX) listings if decided by the community.
            <br />
            <br />
            Innovative Marketing Strategy:
            <br />
            Portions of the marketing allocation will be sold as we achieve each new milestone. In the beginning, our strategy focuses on organic growth through word of mouth. As we build a steady foundation, we'll progressively implement marketing initiatives. This unique approach ensures that our marketing efforts align with the community's growth and goals.
            <br />
            <br />
            Smart Treasury Management:
            <br />
            We've decided to hold a treasury amount to support our growth without relying solely on community funds. This treasury will be strategically utilized to propel our project forward and foster long-term sustainability.
            <br />
            <br />
            Onward to the Decentralized Horizon:
            <br />
            Sharpen your skills, fortify your resolve, and let the blockchain battles commence. May your transactions be swift, your code robust, and your journey legendary. Together, Solamurai, we forge the path to the decentralized horizon.
            <br />
            <br />
            Join us in this unique venture where principles, community, and the spirit of the Solamurai converge to shape the future of decentralized currency.
          </p>
        </div>

        {/* Token Information box */}
        <div className="mt-8 text-white bg-gradient-to-r from-zinc-900/80 to-zinc-900/60 p-8 rounded-md text-center">
          <p>
            Token Information:
            <br />
            <br />
            Supply: 888,888,888 million
            <br />
            Circulating Supply: To be announced (TBA)
            <br />
            Dev/Team Allocation: 4%
            Address:
            <br />
            Marketing Allocation: 4%
            Address:
          </p>
        </div>

        {/* Add more space at the bottom */}
        <div className="mt-10" />

        {/* Social media buttons in a horizontal line */}
        <div className="flex gap-4">
          <a
            href="https://twitter.com/your_twitter_handle"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-bold hover:underline"
          >
            Twitter
          </a>
          <a
            href="https://t.me/your_telegram_channel"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-bold hover:underline"
          >
            Telegram
          </a>
          {/* Add more social media links as needed */}
        </div>

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
        <p className="text-white text-center font-bold italic">
          WARNING: The path of crypto investment is treacherous. Invest wisely, embrace risk, but never more than your soul can endure.
        </p>

		 {/* Add more space at the bottom */}
		 <div className="mt-6" />

      </div>
    </div>
  );
}

