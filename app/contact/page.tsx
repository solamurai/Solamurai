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

      <div className="container flex flex-col items-center justify-center min-h-screen px-4 mx-auto overflow-y-auto mt-20">
        <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text text-center text-black font-bold text-shadow">
          DOJO
        </h1>

        <div className="mt-8 text-white p-8 rounded-md text-center text-shadow">
          <p>
            Solamurai Token embodies the ethos of the samurai, where honor, resilience, and strength converge in the decentralized realm. Our token is more than just a digital asset; it's a symbol of empowerment for our community. Through Solamurai, we invite you to join us on a journey of discovery and innovation, where the principles of the past meet the technologies of the future. Check the whitepaper for a deeper dive into the heart and soul of Solamurai Token.
            <br />
            <br />
          </p>
        </div>

        <div className="mt-8 text-white p-8 rounded-md text-center text-shadow relative">
          {/* Black partially transparent box */}
          <div className="bg-black bg-opacity-75 absolute inset-0 rounded-md"></div>
          
          {/* Token Information */}
          <div className="relative z-10">
            <h2 className="text-white text-2xl font-bold mb-4 text-shadow">
              Token Information:
            </h2>
            <p className="text-white">
              Contract renounced<br />
              Mint revoked<br />  
              LP burnt<br />
              Start LP 1K<br />
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
            <Link href="https://birdeye.so/token/imuB8gpxjqj8EZLSTMMUGtpLgLm51D9VtijjCuewcuj?chain=sola">
              <a target="_blank">
                <img
                  src="/birdeye.png"
                  alt="Birdeye"
                  className="w-16 h-16 mx-2 cursor-pointer"
                />
              </a>
            </Link>
            <Link href="https://dexscreener.com/solana/7memhmneojvbvykmiyhz4mk7yaksha12467q3jgh4sm6">
              <a target="_blank">
                <img
                  src="/dex.png"
                  alt="DEX"
                  className="w-16 h-16 mx-2 cursor-pointer"
                />
              </a>
            </Link>
            <Link href="https://www.geckoterminal.com/solana/pools/7MeMHmNeojVbvykmiYhZ4mK7YaKsHa12467Q3jgH4sM6">
              <a target="_blank">
                <img
                  src="/gecko.png"
                  alt="Gecko"
                  className="w-16 h-16 mx-2 cursor-pointer"
                />
              </a>
            </Link>
            <Link href="https://moontok.io/coins/solamurai-coin">
              <a target="_blank">
                <img
                  src="/moontok.png"
                  alt="Moontok"
                  className="w-16 h-16 mx-2 cursor-pointer"
                />
              </a>
            </Link>
            <Link href="https://ntm.ai/token/imuB8gpxjqj8EZLSTMMUGtpLgLm51D9VtijjCuewcuj?source=post_page-----c89efe8ac7cd--------------------------------">
              <a target="_blank">
                <img
                  src="/NTM.png"
                  alt="NTM"
                  className="w-16 h-16 mx-2 cursor-pointer"
                />
              </a>
            </Link>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-center items-center">
          <h2 className="text-white text-2xl font-bold mb-4 text-shadow">
            BUY/SWAP $SOLA:
          </h2>
          <div className="flex flex-wrap justify-center items-center">
            <Link href="https://raydium.io/swap/?inputCurrency=sol&outputCurrency=imuB8gpxjqj8EZLSTMMUGtpLgLm51D9VtijjCuewcuj&fixed=in">
              <a target="_blank">
                <img
                  src="/raydium.png"
                  alt="Raydium"
                  className="w-16 h-16 mx-2 cursor-pointer"
                />
              </a>
            </Link>
            <Link href="https://jup.ag/swap/SOLA_imuB8gpxjqj8EZLSTMMUGtpLgLm51D9VtijjCuewcuj-SOL">
              <a target="_blank">
                <img
                  src="/jup.png"
                  alt="JUP"
                  className="w-16 h-16 mx-2 cursor-pointer"
                />
              </a>
            </Link>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-center items-center">
          <h2 className="text-white text-2xl font-bold mb-4 text-shadow">
            CRYPTO WALLETS:
          </h2>
          <div className="flex flex-wrap justify-center items-center">
            <Link href="https://phantom.app/">
              <a target="_blank">
                <img
                  src="/phantom.png"
                  alt="Phantom"
                  className="w-16 h-16 mx-2 cursor-pointer"
                />
              </a>
            </Link>
            <Link href="https://solflare.com/">
              <a target="_blank">
                <img
                  src="/solflare.png"
                  alt="Solflare"
                  className="w-16 h-16 mx-2 cursor-pointer"
                />
              </a>
            </Link>
          </div>
        </div>

        <div className="mt-16" />

        <p className="text-white text-center font-bold italic text-shadow">
          WARNING: The path of crypto investment is treacherous. Invest wisely, embrace risk, but never more than your soul can endure.
        </p>

        <div className="mt-6" />
      </div>
    </div>
  );
}
