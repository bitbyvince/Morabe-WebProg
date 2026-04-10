import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="mx-auto flex min-h-[70vh] flex-col items-center justify-center gap-8 px-4 py-16 text-center sm:px-6 lg:px-8">
      <div className="rounded-[2rem] border-2 border-zinc-900 bg-zinc-50 px-8 py-12 shadow-xl shadow-zinc-900/5 sm:px-12">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-600">
          Page Not Found
        </p>
        <h1 className="mt-4 text-5xl font-black tracking-tight text-zinc-950 sm:text-6xl">
          404
        </h1>
        <p className="mt-4 max-w-xl text-base leading-8 text-zinc-600 sm:text-lg">
          The link you followed is broken or the page has moved. Let’s get you
          back to the content you were looking for.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to="/"
            className="inline-flex rounded-full border-2 border-zinc-900 bg-zinc-900 px-6 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-white transition hover:bg-zinc-700"
          >
            Return home
          </Link>
          <Link
            to="/articles"
            className="inline-flex rounded-full border-2 border-zinc-900 bg-zinc-50 px-6 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-zinc-900 transition hover:bg-zinc-200"
          >
            Browse articles
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
