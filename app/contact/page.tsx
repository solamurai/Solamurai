import Link from "next/link";
import { Navigation } from "../components/nav";

export default function YourPage() {
  return (
    <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />

      <div className="container flex flex-col items-center justify-center min-h-screen px-4 mx-auto overflow-y-auto mt-20">
        <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text text-center text-black font-bold text-shadow">
          $SOLA
        </h1>

        <div className="mt-8 text-white p-8 rounded-md text-center text-shadow">
          <p>
            Solamurai Token embodies the ethos of the samurai, where honor, resilience, and strength converge in the decentralized realm. Our token is more than just a digital asset; it's a symbol of empowerment for our community. Through Solamurai, we invite you to join us on a journey of discovery and innovation, where the principles of the past meet the technologies of the future. Check the whitepaper for a deeper dive into the heart and soul of Solamurai Token.
          </p>
          <div className="mt-4">
            <Link href="https://drive.google.com/file/d/1YNIEY9CCeExI9RArvt9x7hoO059MThII/view?usp=drive_link">
              <a target="_blank" className="bg-white text-black px-4 py-2 rounded-md shadow-md hover:bg-gray-200">
                Whitepaper
              </a>
            </Link>
          </div>
        </div>

        <div className="mt-8 text-white p-8 rounded-md text-center text-shadow relative">
          <div className="bg-black bg-opacity-75 absolute inset-0 rounded-md"></div>
          <div className="relative z-10">
            <h2 className="text-white text-2xl font-bold mb-4 text-shadow">
              Token Information:
            </h2>
            <p className="text-white">
              Contract renounced<br />
              Mint revoked<br />  
              LP burnt<br />
              Initial LP 1K<br />
              Supply: 888M<br />
              CA - imuB8gpxjqj8EZLSTMMUGtpLgLm51D9VtijjCuewcuj<br />
              Tax: 0%<br />
              Dev/Team Allocation: 4% solamurai.sol<br />
              Marketing Allocation: 4% solatreasury.sol
            </p>
          </div>
        </div>

        <div className="mt-10" />

        <div className="mt-8 flex flex-wrap justify-center items-center">
          <h2 className="text-white text-2xl font-bold mb-4 text-shadow">
            DEX LISTINGS:
          </h2>
          <div className="flex flex-wrap justify-center items-center">
            {/* Links to DEX listings */}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-center items-center">
          <h2 className="text-white text-2xl font-bold mb-4 text-shadow">
            BUY/SWAP $SOLA:
          </h2>
          <div className="flex flex-wrap justify-center items-center">
            {/* Links to buy/swap $SOLA */}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-center items-center">
          <h2 className="text-white text-2xl font-bold mb-4 text-shadow">
            CRYPTO WALLETS:
          </h2>
          <div className="flex flex-wrap justify-center items-center">
            {/* Links to crypto wallets */}
          </div>
        </div>

        <div className="mt-16" />

        <p className="text-white text-center font-bold italic text-shadow">
          WARNING: The path of crypto investment is treacherous. Invest wisely, embrace risk, but never more than your soul can endure.
        </p>

        {/* Embedded iframe */}
        <div className="mt-8 text-center">
          <iframe
            src="https://www.retrogames.cc/embed/9729-samurai-shodown-ii-shin-samurai-spirits-haohmaru-jigokuhen-ngm-063-ngh-063.html"
            width="600"
            height="450"
            frameBorder="0"
            allowFullScreen
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            scrolling="no"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
