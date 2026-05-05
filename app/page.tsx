export default function Home() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[linear-gradient(180deg,#fcfcfa_0%,#f4f1e8_100%)] text-neutral-950">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute inset-y-0 left-6 w-px bg-gradient-to-b from-transparent via-neutral-300 to-transparent md:left-10" />
        <div className="absolute inset-y-0 right-6 w-px bg-gradient-to-b from-transparent via-neutral-300 to-transparent md:right-10" />
        <div className="absolute left-1/2 top-0 h-px w-[min(72rem,92vw)] -translate-x-1/2 bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />
        <div className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(182,214,255,0.45)_0%,_rgba(182,214,255,0)_72%)] blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.05)_1px,transparent_1px)] bg-[size:clamp(48px,8vw,80px)_clamp(48px,8vw,80px)] [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0.4))]" />
      </div>

      <section className="relative mx-auto flex min-h-screen w-full max-w-7xl px-6 md:px-10">
        <div className="grid min-h-screen w-full grid-rows-[auto_1fr_auto] border-x border-black/10">
          <div className="flex items-center justify-between gap-4 border-b border-black/10 px-6 py-5 text-[0.7rem] uppercase tracking-[0.28em] text-neutral-500 md:px-8">
            <span>Gugelabs</span>
            <span>Mobile products</span>
          </div>

          <div className="grid items-center px-6 py-12 md:grid-cols-[minmax(0,1fr)_15rem] md:px-8">
            <div className="max-w-4xl">
              <p className="mb-5 text-xs font-medium uppercase tracking-[0.34em] text-neutral-500">
                Apps for fitness and mental wellness
              </p>
              <h1 className="text-5xl font-semibold tracking-[-0.08em] text-neutral-950 sm:text-7xl md:text-[7rem]">
                gugelabs
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-600 md:text-lg">
                Apps mobile com foco em bem-estar, rotina, performance e saude
                mental.
              </p>
            </div>

            <div className="mt-10 border-l border-black/10 pl-5 text-sm leading-6 text-neutral-500 md:mt-0 md:self-end">
              <p>iOS & Android</p>
              <p>Fitness</p>
              <p>Mental wellness</p>
            </div>
          </div>

          <div className="grid gap-4 border-t border-black/10 px-6 py-5 text-sm text-neutral-500 md:grid-cols-3 md:px-8">
            <p>Experiencias mobile com visual mais limpo e menos cara de template.</p>
            <p>Produtos digitais para treino, rotina, foco e bem-estar.</p>
            <p className="md:text-right">Design system, clareza visual e ritmo.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
