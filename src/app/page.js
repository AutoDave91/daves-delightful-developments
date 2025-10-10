import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/DDD_Logo.png"
          alt="Dave's Delightful Developments logo"
          width={500}
          height={200}
          priority
        />

        <div>
          <h1>Dave's Delightful Developments</h1>
          <p>Website is currently being upgraded, please come back soon to see the new version.</p>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="mailto:david@davesdelightful.dev"
          rel="noopener noreferrer"
        >
          david@davesdelightful.dev
        </a>
      </footer>
    </div>
  );
}
