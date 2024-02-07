import Link from "next/link";
import { Navigation } from "../components/nav";

export default function YourPage() {
  return (
    <div
      className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0"
      style={{
        backgroundImage: 'url("/shogun.png")',
        backgroundSize: 'cover',
      }}
    >
      <Navigation />
      {/* Other content goes here */}
    </div>
  );
}
