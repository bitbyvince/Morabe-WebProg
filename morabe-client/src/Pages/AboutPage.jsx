import Button from "../components/button";

// Enhancement 2: About page content-rich writeup and imagery
const AboutPage = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="rounded-3xl border-2 border-dashed border-zinc-300 bg-zinc-100 p-6">
            <img
              className="h-72 w-full object-cover"
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200"
              alt="Team planning around desk"
            />
          </div>

          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              About Section
            </p>
            <h1 className="max-w-xl text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
              A profile wireframe focused on layout, spacing, and content
              grouping.
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-600 sm:text-base">
              This page follows the same low-fidelity system as the homepage
              with a simple hero, overview blocks, and supporting sections for
              profile details.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button to="/" variant="primary">
                Back Home
              </Button>
              <Button to="/articles">Open Articles</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b-2 border-zinc-900 bg-white px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              NexaFrame Story
            </p>
            <h2 className="mt-2 text-3xl font-bold text-zinc-900">
              Crafting organized UX patterns for diverse teams
            </h2>
            <p className="mt-4 text-sm leading-7 text-zinc-700 sm:text-base">
              NexaFrame started as a small studio with a big mission: make
              wireframe systems visible, logical, and reusable across design and
              engineering.
            </p>
            <p className="mt-3 text-sm leading-7 text-zinc-700 sm:text-base">
              We collaborate with product owners, developers, and UX writers so
              every block has purpose and every page delivers clear value for
              users.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden border-2 border-zinc-900">
            <img
              className="h-72 w-full object-cover"
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80"
              alt="Team planning around desk"
            />
          </div>
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">05</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Years
            </p>
          </div>
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">16</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Projects
            </p>
          </div>
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">09</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Clients
            </p>
          </div>
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">03</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Focus Areas
            </p>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              Section Flow
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
              Stacked content wireframe
            </h2>

            <div className="mt-6 space-y-4">
              <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
                <h3 className="text-lg font-semibold text-zinc-900">
                  Creative Identity & Mission
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  Focus on a high-level summary of who you are. Instead of just
                  a biography, use this space to define your "unique selling
                  point" (e.g., "Bridging the gap between technical AI ethics
                  and intuitive graphic design").
                </p>
              </article>

              <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
                <h3 className="text-lg font-semibold text-zinc-900">
                  Professional Milestones
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  Use this section to highlight key roles or projects. Keep the
                  descriptions punchy and action-oriented, emphasizing results
                  like "Streamlined design workflows" or "Conducted descriptive
                  research for IRB systems."
                </p>
              </article>

              <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
                <h3 className="text-lg font-semibold text-zinc-900">
                  Technical Toolkit & Skills
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  Group your skills into categories: Design (Adobe Suite, PNG
                  manipulation), Language (Japanese/Hiragana), and specialized
                  fields like AI Ethics or Photography.
                </p>
              </article>
            </div>
          </div>

          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              Visual Grid
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="flex aspect-square items-center justify-center rounded-[1.25rem] bg-zinc-200">
                <img
                  className="h-36 w-36 rounded border-2 object-cover"
                  src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5"
                  alt="Team planning around desk"
                />
              </div>
              <div className="flex aspect-square items-center justify-center rounded-[1.25rem] bg-zinc-200">
                <img
                  className="h-36 w-36 rounded border-2 object-cover"
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"
                  alt="Team planning around desk"
                />
              </div>
              <div className="flex aspect-square items-center justify-center rounded-[1.25rem] bg-zinc-200">
                <img
                  className="h-36 w-36 rounded border-2 object-cover"
                  src="https://images.unsplash.com/photo-1550745165-9bc0b252726f"
                  alt="Team planning around desk"
                />
              </div>
              <div className="flex aspect-square items-center justify-center rounded-[1.25rem] bg-zinc-200">
                <img
                  className="h-36 w-36 rounded border-2 object-cover"
                  src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTl_0T6MTgmEzQBG0N_0fBd4IowMd8vBeP3k38C-zE_v_GDCPe09dtSz9u-0AhS"
                  alt="Team planning around desk"
                />
              </div>
            </div>
            <Button className="mt-5">View Section</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
