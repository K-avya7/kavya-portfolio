import Link from "next/link";
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-40 px-8 md:px-20">
      {/* Subtle wave background */}
      <div className="wave-bg" />

      <div className="relative z-10 max-w-3xl">
        <p className="text-sm text-zinc-500 mb-4">
        </p>

        <h1
          className="text-5xl md:text-7xl leading-tight text-white"
          style={{ fontFamily: "var(--font-script)" }}
        >
          Kavya Agrawal
        </h1>
        <p className="text-[var(--accent)] font-medium">
            Aspiring Software Developer
        </p>
        <p className="mt-6 text-zinc-400 text-lg leading-relaxed">
       I’m a student developer who loves building scalable apps, APIs, and smart solutions. 
       Excited to kick-start my career in tech and build things that matter.
        </p>

        <div className="mt-10 flex gap-6">
        <Link
            href="/resume"
            className="px-6 py-3 border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-black transition duration-300"
        >
            View Resume
        </Link>
        </div>
      </div>
    </section>
  );
}