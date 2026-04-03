import { useState } from "react";

export default function AJMobileDetailingWebsite() {
  // Gallery images are loaded from /public/gallery/
  // To add photos, place them in: public/gallery/
  // and add the filename below.
  const gallery = [
    "judetruck1.jpg",
    "judetruck2.jpg",
    "judeporsche.jpg",
    "judemustang.jpg",
    "judem4.jpg",
    "judedad.jpg",
  ];

  const [activeImage, setActiveImage] = useState(gallery[0]);

  const featuredVehicles = [
  "Luxury sedans",
  "Performance cars",
  "Exotic vehicles",
  "Premium SUVs",
];

  const services = [
  {
    title: "Luxury Exterior Detailing",
    description:
      "Careful hand washing, wheel and tire cleaning, streak-free glass, and a refined finish designed for high-end vehicles.",
  },
  {
    title: "Premium Interior Care",
    description:
      "Detailed vacuuming, surface cleaning, interior wipe-downs, and a cleaner, more upscale cabin presentation.",
  },
  {
    title: "Full Detail Packages",
    description:
      "Complete inside-and-out detailing for owners who want their vehicle maintained to a higher standard.",
  },
  {
    title: "Mobile Convenience",
    description:
      "We come directly to your home so your vehicle gets premium care where it is most convenient for you. Customers just need access to water and power at the appointment location.",
    },
];

  const highlights = [
  "Serving Fountain Hills & The Greater Area",
  "Mobile service at your home with access to water and power",
  "Focused on luxury, exotic, and performance vehicles",
  "Professional presentation with premium-level care",
];

  return (
    <div className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden border-b border-amber-500/20 bg-gradient-to-b from-black via-zinc-950 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(212,175,55,0.12),transparent_25%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-6">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <img
                src="/logo.png"
                alt="A&J Mobile Detailing logo"
                className="h-14 w-14 rounded-full border border-amber-400/40 object-cover shadow-lg shadow-amber-500/10"
              />
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">
                  A&amp;J Mobile Detailing
                </p>
              </div>
            </div>
            <a
              href="https://www.instagram.com/a_j_moblie_detailing/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-amber-400/60 px-4 py-2 text-sm font-semibold text-white transition hover:bg-amber-500 hover:text-black"
            >
              Instagram
            </a>
          </div>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-8 lg:pt-14">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-amber-400/40 bg-amber-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-amber-200">
              Serving Fountain Hills &amp; The Greater Area
            </p>
            <div className="mb-6 flex items-center gap-4">
              <img
                src="/logo.png"
                alt="A&J Mobile Detailing logo"
                className="h-20 w-20 rounded-full border border-amber-400/40 object-cover shadow-xl shadow-amber-500/10 md:h-24 md:w-24"
              />
              <div className="h-px flex-1 bg-gradient-to-r from-amber-400/50 to-transparent" />
            </div>
            <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight text-white md:text-6xl">
              Premium Mobile Detailing That Brings the Shine to You.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
              A&amp;J Mobile Detailing delivers premium exterior and interior detailing for luxury, exotic, performance, and high-end daily vehicles, with dependable mobile service brought directly to your home. Customers simply need access to water and power for the appointment.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {featuredVehicles.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-amber-400/40 bg-amber-500/10 px-4 py-2 text-sm font-medium text-amber-100"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-2xl bg-amber-400 px-6 py-3 font-semibold text-white shadow-lg shadow-amber-500/20 transition hover:bg-amber-300 hover:text-black"
              >
                Book Now
              </a>
              <a
                href="#gallery"
                className="rounded-2xl border border-zinc-700 px-6 py-3 font-semibold text-white transition hover:border-amber-400 hover:text-amber-300"
              >
                View Work
              </a>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:max-w-3xl">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-4 text-sm text-zinc-200 shadow-lg shadow-black/20"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-500">About Us</p>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
              Clean, polished, and professional results without leaving your driveway.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
              A&amp;J Mobile Detailing is a local small business focused on premium results for high-end vehicles in Fountain Hills and surrounding areas. We bring the tools, care, and attention to detail directly to your home, making it easy to maintain a polished, upscale finish without leaving your driveway. Customers just need access to water and power at the service location.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6 shadow-xl shadow-black/20"
              >
                <h3 className="text-xl font-bold text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="border-y border-zinc-900 bg-zinc-950/70">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-500">Our Work</p>
              <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
                Real vehicles. Real results.
              </h2>
            </div>
            <a
              href="https://www.instagram.com/a_j_moblie_detailing/"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-amber-400/60 px-5 py-3 font-semibold text-white transition hover:bg-red-600"
            >
              Follow on Instagram
            </a>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.35fr_0.65fr] lg:items-start">
            <div className="overflow-hidden rounded-[1.75rem] border border-zinc-800 bg-black shadow-xl shadow-black/20">
              <img
                src={`/gallery/${activeImage}`}
                alt="Featured A&J Mobile Detailing vehicle"
                className="h-[420px] w-full object-cover"
              />
            </div>

            <div className="grid grid-cols-3 gap-3 sm:grid-cols-5 lg:grid-cols-2">
              {gallery.map((image, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveImage(image)}
                  className={`overflow-hidden rounded-2xl border bg-black shadow-lg shadow-black/20 transition ${
                    activeImage === image
                      ? "border-amber-400 ring-2 ring-amber-300/30"
                      : "border-zinc-800 hover:border-amber-400"
                  }`}
                >
                  <img
                    src={`/gallery/${image}`}
                    alt={`A&J Mobile Detailing vehicle ${index + 1}`}
                    className="h-24 w-full object-cover sm:h-28 lg:h-32"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 rounded-[2rem] border border-zinc-800 bg-gradient-to-br from-zinc-950 to-black p-8 shadow-2xl shadow-amber-500/10 lg:grid-cols-[1fr_1.05fr] lg:p-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-500">Premium Detailing</p>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
              Premium mobile details built for vehicles that deserve extra care.
            </h2>
            <p className="mt-5 text-lg leading-8 text-zinc-300">
              A&amp;J Mobile Detailing offers premium mobile detailing services with pricing starting at <span className="font-semibold text-white">$145</span> for an exterior wash and spray wax. From there, pricing increases based on the level of service, vehicle size, and overall condition.
            </p>

            <div className="mt-8 space-y-4 text-zinc-300">
              <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-4">Exterior wash + spray wax starting at $145</div>
              <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-4">Interior and full detail options available at higher pricing tiers</div>
              <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-4">Final pricing can increase based on vehicle type, size, and condition</div>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-zinc-800 bg-zinc-950 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-500">Pricing Approach</p>
            <h3 className="mt-3 text-2xl font-bold text-white">Simple starting point. Premium results.</h3>
            <p className="mt-5 text-zinc-300 leading-8">
              This gives customers a clear starting price while still leaving room for more advanced services and higher-end packages. It keeps the business looking premium without boxing you into one flat rate for every vehicle.
            </p>
            <p className="mt-5 text-zinc-300 leading-8">
              If you want later, this section can be expanded into a full pricing menu with separate tiers for exterior details, interior details, and full details.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 rounded-[2rem] border border-zinc-800 bg-gradient-to-br from-zinc-950 to-black p-8 shadow-2xl shadow-red-950/10 lg:grid-cols-[1fr_1.05fr] lg:p-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-500">Why Choose Us</p>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
              Local service with a high-end look.
            </h2>
            <p className="mt-5 text-lg leading-8 text-zinc-300">
              Whether you own a luxury SUV, performance car, exotic, or a weekend vehicle that needs to stay show-ready, A&amp;J Mobile Detailing is built around convenience, consistency, and a premium finished look delivered right to your home.
            </p>

            <div className="mt-8 space-y-4 text-zinc-300">
              <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-4">Mobile appointments at your home</div>
              <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-4">Access to water and power required</div>
              <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-4">Professional presentation and premium-level care</div>
            </div>
          </div>

          <div id="contact" className="rounded-[1.75rem] border border-zinc-800 bg-zinc-950 p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-500">Contact Us</p>
            <h3 className="mt-3 text-2xl font-bold text-white">Request a Detail</h3>
            <p className="mt-3 text-sm leading-7 text-zinc-400">
              Fill out the form below and submit it directly through the website. Home appointments require access to water and power.
            </p>

            <form
              name="detail-request"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              action="/success"
              className="mt-6 space-y-4"
            >
              <input type="hidden" name="form-name" value="detail-request" />
              <div hidden>
                <label>
                  Don’t fill this out if you're human: <input name="bot-field" />
                </label>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <input
                  name="name"
                  placeholder="Your name"
                  required
                  className="rounded-2xl border border-zinc-700 bg-black px-4 py-3 text-white outline-none ring-0 transition placeholder:text-zinc-500 focus:border-amber-400"
                />
                <input
                  name="phone"
                  placeholder="Phone number"
                  required
                  className="rounded-2xl border border-zinc-700 bg-black px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-red-500"
                />
              </div>

              <input
                name="location"
                placeholder="Your city or appointment address"
                required
                className="w-full rounded-2xl border border-zinc-700 bg-black px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-red-500"
              />

              <div className="grid gap-4 md:grid-cols-2">
                <input
                  name="vehicle"
                  placeholder="Vehicle make and model"
                  required
                  className="rounded-2xl border border-zinc-700 bg-black px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-red-500"
                />
                <input
                  name="service"
                  placeholder="Service interested in"
                  required
                  className="rounded-2xl border border-zinc-700 bg-black px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-red-500"
                />
              </div>

              <textarea
                name="message"
                rows={5}
                placeholder="Tell us what you need done"
                className="w-full rounded-2xl border border-zinc-700 bg-black px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-red-500"
              />

              <div className="flex flex-wrap gap-4">
                <button
                  type="submit"
                  className="rounded-2xl bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-500"
                >
                  Send Request
                </button>
                <a
                  href="https://www.instagram.com/a_j_moblie_detailing/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-zinc-700 px-6 py-3 font-semibold text-white transition hover:border-red-500 hover:text-amber-300"
                >
                  Message on Instagram
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-amber-500/20 bg-black">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-zinc-400 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-semibold uppercase tracking-[0.2em] text-white">A&amp;J Mobile Detailing</p>
            <p className="mt-2">Serving Fountain Hills &amp; The Greater Area</p>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/a_j_moblie_detailing/"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-red-400"
            >
              Instagram
            </a>
            <a href="mailto:judeleos1@gmail.com" className="transition hover:text-red-400">
              judeleos1@gmail.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
