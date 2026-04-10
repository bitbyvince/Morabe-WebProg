import Button from "../components/Button";

// Enhancement 2: Home page content writeups and image section
const HomePage = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              Hero Section
            </p>
            <h1 className="max-w-xl text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
              Welcome to NexaFrame Wireframe Studio
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-700 sm:text-base">
              Discover a modern wireframe framework that guides product teams
              from concept to high-impact user experiences in clear structured
              sections.
            </p>
            <div className="mt-6">
              <Button to="/about" variant="primary">
                Learn More
              </Button>
            </div>
          </div>

          <div className="rounded-3xl border-2 border-dashed border-zinc-300 bg-zinc-100 p-6">
            <img
              className="h-full w-full rounded-3xl object-cover"
              src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=1200"
              alt="Wireframe moodboard"
            />
          </div>
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-white px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              Our Mission
            </p>
            <h2 className="mt-2 text-3xl font-bold text-zinc-900">
              Transform wireframes into clear digital direction
            </h2>
            <p className="mt-4 text-sm leading-7 text-zinc-700 sm:text-base">
              At NexaFrame Wireframe Studio, we help teams move from concept to
              release-ready flows with clean visual hierarchy, clear calls to
              action, and an accessible color contrast palette.
            </p>
            <p className="mt-3 text-sm leading-7 text-zinc-700 sm:text-base">
              Every section is crafted for readability, scalable grid structure,
              and fast feedback loops so your team ships features with
              confidence.
            </p>
          </div>

          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-0">
            <img
              className="h-full w-full rounded-3xl object-cover"
              src="https://images.unsplash.com/photo-1505238680356-667803448bb6?auto=format&fit=crop&w=900&q=80"
              alt="Wireframe moodboard"
            />
          </div>
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            KPI Section
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
            Quick overview blocks
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">12</p>
            <p className="mt-2 text-[11px] font-semibold tracking-[0.24em] text-zinc-500 uppercase">
              Projects
            </p>
          </div>
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">08</p>
            <p className="mt-2 text-[11px] font-semibold tracking-[0.24em] text-zinc-500 uppercase">
              Sections
            </p>
          </div>
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">24</p>
            <p className="mt-2 text-[11px] font-semibold tracking-[0.24em] text-zinc-500 uppercase">
              Screens
            </p>
          </div>
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">04</p>
            <p className="mt-2 text-[11px] font-semibold tracking-[0.24em] text-zinc-500 uppercase">
              Layouts
            </p>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Feature Section
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
            Simple features of the studio
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
            <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-zinc-200">
              <img
                className="h-full w-full rounded-3xl object-cover"
                src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=800"
                alt="Wireframe moodboard"
              />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-zinc-900">
              Clean Placeholder / Search
            </h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Discover powerful search and filtering features that help you
              quickly find the right wireframe templates, components, and design
              assets to jumpstart your projects.
            </p>
            <Button className="mt-4" variant="primary">
              View More
            </Button>
          </article>

          <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
            <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-zinc-200">
              <img
                className="h-full w-full rounded-3xl object-cover"
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
                alt="Wireframe moodboard"
              />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-zinc-900">
              Balanced Spacing / Collaboration
            </h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              An abstract, clean visual representing connectivity, flow, or a
              modern team workspace with plenty of "white space.
            </p>
            <Button className="mt-4" variant="primary">
              View More
            </Button>
          </article>

          <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
            <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-zinc-200">
              <img
                className="h-full w-full rounded-3xl object-cover"
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
                alt="Wireframe moodboard"
              />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-zinc-900">
              Consistent Rhythm / Workflow
            </h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Modern architecture or a repeating pattern of tech devices that
              conveys a sense of rhythm and automation.
            </p>
            <Button className="mt-4" variant="primary">
              View More
            </Button>
          </article>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
