
import Link from "next/link";
import { Navigation } from "../components/nav";

export default function NewPage() {
  return (
    <div
      className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0"
      style={{
        backgroundImage: 'url("/shogun.png")',
        backgroundSize: 'cover',
        minHeight: '100vh', // Ensure the page takes up the full height of the viewport
      }}
    >
      <Navigation />
      <h1>This is the New Page</h1>
      {/* Other content goes here */}
    </div>
  );
}
