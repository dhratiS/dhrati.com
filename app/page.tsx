const expertise = [
  "Quality engineering",
  "Test automation",
  "API testing",
  "Cloud systems",
  "Release confidence",
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden px-4 py-4 text-slate-950 sm:px-6 sm:py-6 lg:px-10 lg:py-10">
      <div className="pointer-events-none absolute left-[-8rem] top-[-10rem] h-80 w-80 rounded-full bg-emerald-200/45 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-12rem] right-[-8rem] h-96 w-96 rounded-full bg-amber-200/45 blur-3xl" />

      <article className="relative mx-auto flex min-h-[calc(100vh-2rem)] max-w-6xl flex-col overflow-hidden rounded-[1.75rem] border border-white/80 bg-white/80 shadow-[0_24px_80px_-28px_rgba(15,23,42,0.25)] backdrop-blur-xl sm:min-h-[calc(100vh-3rem)] sm:rounded-[2.25rem] lg:min-h-[calc(100vh-5rem)]">
        <header className="flex items-center justify-between border-b border-slate-200/80 px-5 py-5 sm:px-8 lg:px-12">
          <a
            href="#top"
            className="flex items-center gap-3 rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-600"
            aria-label="Dhrati Sharma, home"
          >
            <span className="grid size-10 place-items-center rounded-full bg-slate-950 text-sm font-semibold tracking-tight text-white">
              DS
            </span>
            <span className="hidden text-sm font-semibold tracking-tight text-slate-900 sm:block">
              Dhrati Sharma
            </span>
          </a>

          <div className="flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs font-medium text-emerald-900 sm:px-4 sm:text-sm">
            <span className="relative flex size-2" aria-hidden="true">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-50 motion-reduce:animate-none" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-600" />
            </span>
            Open to connecting
          </div>
        </header>

        <div id="top" className="grid flex-1 lg:grid-cols-[1.35fr_0.65fr]">
          <section className="flex flex-col justify-center px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20 xl:px-16">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700 sm:text-sm">
              Senior Software Test Engineer
            </p>

            <h1 className="max-w-4xl text-[clamp(3.4rem,9vw,7.5rem)] font-semibold leading-[0.86] tracking-[-0.075em] text-slate-950">
              Quality is
              <span className="block font-serif font-normal italic tracking-[-0.055em] text-slate-500">
                engineered.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              I&apos;m Dhrati, a quality-focused software engineer who builds
              confidence into complex systems through thoughtful test strategy,
              automation, and a sharp eye for how products behave in the real
              world.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="https://www.linkedin.com/in/dhratii-sharma/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-950 motion-reduce:transform-none"
              >
                Connect on LinkedIn
                <span aria-hidden="true">↗</span>
              </a>
              <a
                href="/resume.pdf"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-950 motion-reduce:transform-none"
              >
                View résumé
                <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div className="mt-12 border-t border-slate-200 pt-7 sm:mt-14">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                Focus areas
              </p>
              <ul className="flex flex-wrap gap-2" aria-label="Areas of expertise">
                {expertise.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs font-medium text-slate-600 sm:text-sm"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <aside className="flex flex-col justify-between bg-slate-950 px-5 py-8 text-white sm:px-8 sm:py-10 lg:px-10 lg:py-12">
            <div>
              <div className="mb-10 flex items-center justify-between text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                <span>Currently</span>
                <span>01</span>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-6 sm:p-7">
                <div className="mb-8 grid size-14 place-items-center rounded-2xl bg-white text-lg font-bold tracking-[-0.04em] text-[#1434cb]">
                  V
                </div>
                <p className="text-sm text-slate-400">Senior Software Test Engineer</p>
                <h2 className="mt-2 text-3xl font-semibold tracking-[-0.04em]">
                  Visa
                </h2>
                <p className="mt-5 text-sm leading-6 text-slate-300">
                  Helping teams deliver reliable experiences at global scale,
                  with quality built into every stage of development.
                </p>
                <div className="mt-8 flex items-center gap-2 border-t border-white/10 pt-5 text-xs text-slate-400">
                  <span className="size-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
                  Since 2022
                </div>
              </div>
            </div>

            <div className="mt-12">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Based in
              </p>
              <p className="mt-3 text-lg font-medium text-slate-100">
                Cupertino, California
              </p>
              <p className="mt-1 text-sm text-slate-500">United States</p>
            </div>
          </aside>
        </div>

        <footer className="flex flex-col gap-3 border-t border-slate-200/80 px-5 py-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <p>Senior software test engineer · Quality advocate</p>
          <p>© {new Date().getFullYear()} Dhrati Sharma</p>
        </footer>
      </article>
    </main>
  );
}
