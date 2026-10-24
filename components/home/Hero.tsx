import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f4f7f6]">
      <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-10 px-6 pb-16 pt-32 lg:grid-cols-2 lg:px-8 lg:pt-24">
        
        {/* Left Content */}
        <div className="relative z-10 max-w-xl">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-slate-600">
            Good Food · Good Vibes
          </p>

          <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
            Sip, Chat & Vibe
            <br />
            at Apna Adda
          </h1>

          <p className="mt-6 max-w-lg text-base leading-7 text-slate-600 sm:text-lg">
            Your everyday hangout for good vibes, great chai, and warm
            conversations. Come for the food, stay for the adda.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/about"
              className="rounded-lg bg-slate-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
            >
              Explore the Space
            </Link>

            <Link
              href="/menu"
              className="rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-900 transition hover:bg-slate-50"
            >
              View Menu
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative h-[430px] overflow-hidden rounded-[2rem] sm:h-[500px] lg:h-[580px]">
          <Image
            src="/images/restaurant/hero.jpg"
            alt="Apna Adda restaurant interior"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />

          {/* Image Overlay */}
          <div className="absolute bottom-6 left-6 rounded-xl bg-white/90 px-5 py-4 shadow-lg backdrop-blur">
            <p className="text-xs uppercase tracking-wider text-slate-500">
              APNA ADDA
            </p>

            <p className="mt-1 text-sm font-semibold text-slate-900">
              Good Food · Good Vibes
            </p>
          </div>
        </div>
      </div>

      {/* Decorative curved bottom */}
      <div className="absolute -bottom-16 left-1/2 h-32 w-[120%] -translate-x-1/2 rounded-[50%] bg-white" />
    </section>
  );
}