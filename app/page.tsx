import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col items-center justify-center min-h-screen text-white">
        <h1 className="text-6xl font-bold mb-8">
          Welcome to a connected world.
        </h1>
        <p className="text-lg mb-12">
          Discover a new world of possibilities with us.
        </p>
        <div className="flex flex-row gap-8">
          <button className="bg-white text-indigo-800 mt-12 py-3 px-8 rounded-full text-lg font-semibold hover:bg-indigo-700 hover:text-white transition duration-300">
            <Link href={"/chat"}>Get Started</Link>
          </button>
          <button className="bg-white text-indigo-800 mt-12 py-3 px-8 rounded-full text-lg font-semibold hover:bg-indigo-700 hover:text-white transition duration-300">
            <Link href={"/pricing"}>Pricing</Link>
          </button>
        </div>
      </div>
    </main>
  );
}
