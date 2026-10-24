import Image from "next/image";
import Link from "next/link";

const specials = [
  {
    name: "Kulhad Chai",
    description: "Classic masala chai served in a kulhad.",
    price: "₹60",
    image: "/images/restaurant/specials/kulhad-chai.jpg",
  },
  {
    name: "Cold Brew",
    description: "Smooth, refreshing cold brewed coffee.",
    price: "₹149",
    image: "/images/restaurant/specials/cold-brew.jpg",
  },
  {
    name: "Sourdough Bites",
    description: "Crispy bites served with our house dip.",
    price: "₹199",
    image: "/images/restaurant/specials/sourdough-bites.jpg",
  },
  {
    name: "Pasta Alfredo",
    description: "Creamy Alfredo pasta with a rich finish.",
    price: "₹249",
    image: "/images/restaurant/specials/pasta-alfredo.jpg",
  },
];

export default function TodaysSpecials() {
  return (
    <section className="relative overflow-hidden bg-[#eef7fc] px-6 py-12 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-8 lg:grid-cols-[180px_1fr]">
          
          {/* Section Title */}
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
              Today's
            </p>

            <h2 className="mt-1 text-3xl font-medium leading-none tracking-tight text-slate-900">
              Specials
            </h2>

            <div className="mt-4 h-px w-12 bg-slate-900/30" />
          </div>

          {/* Specials */}
          <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
            {specials.map((item) => (
              <Link
                href="/menu"
                key={item.name}
                className="group"
              >
                {/* Image */}
                <div className="relative aspect-square overflow-hidden rounded-[22px] bg-white">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>

                {/* Info */}
                <div className="mt-3">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-sm font-medium text-slate-900">
                      {item.name}
                    </h3>

                    <span className="text-sm font-medium text-slate-900">
                      {item.price}
                    </span>
                  </div>

                  <p className="mt-1 line-clamp-2 text-xs leading-5 text-slate-500">
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}