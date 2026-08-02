const expertise = [
  "Test strategy",
  "Automation",
  "API testing",
  "Cloud systems",
  "Performance testing",
];

function App() {
  return (
    <main className="relative min-h-screen overflow-hidden px-4 py-4 text-slate-950 sm:px-6 sm:py-6 lg:px-10 lg:py-10">
      <div className="pointer-events-none absolute left-[-8rem] top-[-10rem] h-80 w-80 rounded-full bg-blue-200/45 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-12rem] right-[-8rem] h-96 w-96 rounded-full bg-amber-200/45 blur-3xl" />

      <article className="relative mx-auto flex min-h-[calc(100vh-2rem)] max-w-6xl flex-col overflow-hidden rounded-[1.75rem] border border-white/80 bg-white/85 shadow-[0_24px_80px_-28px_rgba(15,23,42,0.25)] backdrop-blur-xl sm:min-h-[calc(100vh-3rem)] sm:rounded-[2.25rem] lg:min-h-[calc(100vh-5rem)]">
        <header className="flex items-center justify-between border-b border-slate-200/80 px-5 py-4 sm:px-8 sm:py-5 lg:px-12">
          <a
            href="#top"
            className="grid size-10 place-items-center rounded-full bg-slate-950 text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
            aria-label="Dhrati Sharma, home"
          >
            DS
          </a>

          <div className="flex items-center gap-2 text-xs font-medium text-slate-600 sm:text-sm">
            <span className="size-2 rounded-full bg-emerald-500" aria-hidden="true" />
            Open to connecting
          </div>
        </header>

        <div id="top" className="flex flex-1 flex-col px-5 py-8 sm:px-8 sm:py-11 lg:px-12 xl:px-16">
          <section className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-14">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-700 sm:text-sm">
                Hello, I&apos;m
              </p>

              <h1 className="mt-3 max-w-4xl text-[clamp(3.25rem,7.5vw,6.5rem)] font-semibold leading-[0.9] tracking-[-0.07em] text-slate-950">
                Dhrati Sharma.
              </h1>

              <p className="mt-6 text-lg font-semibold text-slate-900 sm:text-xl">
                Senior Software Test Engineer at Visa
              </p>
              <p className="mt-2 text-sm text-slate-500 sm:text-base">
                Cupertino, California · United States
              </p>

              <p className="mt-7 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                I&apos;m a software quality engineer who enjoys understanding how
                systems fit together and helping teams ship software they can
                trust.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="https://www.linkedin.com/in/dhratii-sharma/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-950 motion-reduce:transform-none"
                >
                  LinkedIn
                  <span aria-hidden="true">↗</span>
                </a>
                <a
                  href="/resume.pdf"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-950 motion-reduce:transform-none"
                >
                  Résumé
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>

            <figure className="mx-auto w-full max-w-[18rem] lg:mx-0">
              <div className="overflow-hidden rounded-[1.75rem] border-4 border-white bg-slate-100 shadow-[0_18px_50px_-22px_rgba(15,23,42,0.45)]">
                <img
                  src="/dhrati-sharma.jpeg"
                  alt="Dhrati Sharma sitting by a lake"
                  className="aspect-square h-auto w-full object-cover"
                />
              </div>
              <figcaption className="mt-3 text-center text-xs text-slate-500 lg:text-left">
                Software engineer · Quality advocate
              </figcaption>
            </figure>
          </section>

          <div className="mt-10 grid gap-9 border-t border-slate-200 pt-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <section aria-labelledby="work-heading">
              <p
                id="work-heading"
                className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400"
              >
                My work
              </p>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
                My experience spans test strategy, API and UI automation,
                performance testing, and cloud-based services. Before Visa, I
                worked in software engineering and quality roles at Paysafe,
                Adobe, Ola, and OnMobile.
              </p>
            </section>

            <section aria-labelledby="focus-heading">
              <p
                id="focus-heading"
                className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400"
              >
                Focus areas
              </p>
              <ul className="mt-4 flex flex-wrap gap-2" aria-label="Areas of expertise">
                {expertise.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-slate-200 bg-white px-3.5 py-2 text-xs font-medium text-slate-600 sm:text-sm"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>

        <footer className="flex flex-col gap-2 border-t border-slate-200/80 px-5 py-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <p>Senior Software Test Engineer at Visa</p>
          <p>© {new Date().getFullYear()} Dhrati Sharma</p>
        </footer>
      </article>
    </main>
  );
}

export default App;
