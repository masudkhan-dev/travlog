import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="container mx-auto mt-10">
        <div>
          <Link href="/home1">
            <button className="bg-black text-white px-2 py-3">
              Landing page 1
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
