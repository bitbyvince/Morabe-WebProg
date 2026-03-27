import Button from "../components/button";

// Enhancement 2: Articles page improved title/summary + real articles content
const ArticlePage = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
          Articles
        </p>
        <h1 className="max-w-xl text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
          Featured articles in a simple card grid
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-600 sm:text-base">
          A clean wireframe section for article thumbnails, titles, short
          descriptions, and one clear action per card.
        </p>
        <div className="mt-6">
          <Button to="/">Back Home</Button>
        </div>
      </section>

      <section className="mb-6 rounded-3xl border-2 border-zinc-900 bg-white p-4 sm:p-6 lg:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <img
            className="h-40 w-full rounded-2xl object-cover sm:h-48 sm:w-1/2"
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80"
            alt="Article reading image"
          />
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              Insights From Our Blog
            </p>
            <h2 className="mt-2 text-2xl font-bold text-zinc-900">
              Design research saved as shareable articles
            </h2>
            <p className="mt-3 text-sm leading-7 text-zinc-600">
              In this collection, we explain wireframe best practices that help
              teams avoid rework and release faster. Each card below has a
              takeaway actionable summary.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div>
          <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Featured Articles
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
            Article card grid
          </h2>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
            <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-zinc-200">
              <img
                className="h-30 w-30 rounded border-2 object-cover"
                src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e"
                alt="Team planning around desk"
              />
            </div>
            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Article 01
            </p>
            <h3 className="mt-2 text-lg font-semibold text-zinc-900">
              Wireframe layout basics
            </h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Learn how to structure a wireframe blueprint that clarifies user
              intent, reduces cognitive load, and helps teams prioritize page
              content.
            </p>
            <Button className="mt-4" variant="primary">
              Read More
            </Button>
          </article>

          <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
            <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-zinc-200">
              <img
                className="h-30 w-30 rounded border-2 object-cover"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2LRZU6Otlsf2JIGmnMFkuvm6Ngf8Agca9bImb4iG89p_Dw59TGTcX1IeqpeQ6"
                alt="Team planning around desk"
              />
            </div>
            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Article 02
            </p>
            <h3 className="mt-2 text-lg font-semibold text-zinc-900">
              Building clean sections
            </h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Practical ideas for building repeatable section systems that are
              easy to update, reuse, and test in sprint cycles.
            </p>
            <Button className="mt-4" variant="primary">
              Read More
            </Button>
          </article>

          <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
            <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-zinc-200">
              <img
                className="h-30 w-30 rounded border-2 object-cover"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyaQnf1bkGf0yuiVMaAdj8u9ZSptK1B8JYmcerl4nEmnBS6hR1_g2KCIPclQNv"
                alt="Team planning around desk"
              />
            </div>
            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Article 03
            </p>
            <h3 className="mt-2 text-lg font-semibold text-zinc-900">
              Using cards and lists
            </h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Tips for managing annotations, spacing guides, and content
              priorities so developers and designers stay aligned.
            </p>
            <Button className="mt-4" variant="primary">
              Read More
            </Button>
          </article>

          <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
            <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-zinc-200">
              <img
                className="h-30 w-30 rounded border-2 object-cover"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKwJ_lvjxXH9lg4Lup4kEwdbxFpYyexcKktt6nVBjFFvybAfp844OcMszrsfQ7"
                alt="Team planning around desk"
              />
            </div>
            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Article 04
            </p>
            <h3 className="mt-2 text-lg font-semibold text-zinc-900">
              Low-fidelity article flow
            </h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              A practical framework for launching initial releases quickly while
              planning iterative improvements from landing page data.
            </p>
            <Button className="mt-4" variant="primary">
              Read More
            </Button>
          </article>
        </div>
      </section>
    </div>
  );
};

export default ArticlePage;
