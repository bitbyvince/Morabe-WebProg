import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t-2 border-zinc-900 bg-zinc-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-xl space-y-4">
          <div className="inline-flex items-center gap-3 rounded-3xl bg-zinc-900 px-4 py-3 text-white shadow-lg shadow-zinc-900/10">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400 text-sm font-black text-zinc-950">
              N
            </div>
            <div>
              <p className="font-semibold">NexaFrame</p>
              <p className="text-sm text-zinc-300">
                Structured page systems for modern products.
              </p>
            </div>
          </div>

          <p className="max-w-md text-sm leading-7 text-zinc-600 sm:text-base">
            Build user-friendly page experiences with simple blocks, clear
            hierarchy, and consistent spacing. This footer keeps the app
            polished and website-ready.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:gap-12">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">
              Explore
            </p>
            <ul className="space-y-2 text-sm text-zinc-700">
              <li>
                <Link className="hover:text-zinc-900">Home</Link>
              </li>
              <li>
                <Link className="hover:text-zinc-900">About</Link>
              </li>
              <li>
                <Link className="hover:text-zinc-900">Articles</Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">
              Helpful Links
            </p>
            <ul className="space-y-2 text-sm text-zinc-700">
              <li>
                <a className="hover:text-zinc-900">Support</a>
              </li>
              <li>
                <a className="hover:text-zinc-900">Guidelines</a>
              </li>
              <li>
                <a className="hover:text-zinc-900">Privacy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-zinc-200 pt-6 text-center text-sm text-zinc-500">
        © 2026 NexaFrame. Designed with intentional spacing and a minimal
        wireframe aesthetic.
      </div>
    </footer>
  );
};

export default Footer;
