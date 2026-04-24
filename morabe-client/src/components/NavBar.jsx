import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Articles", to: "/articles" },
];

const navLinkClassName = ({ isActive }) =>
  [
    "rounded-full border-2 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition",
    isActive
      ? "border-zinc-900 bg-zinc-900 text-zinc-50"
      : "border-transparent text-zinc-500 hover:border-zinc-900 hover:bg-zinc-50 hover:text-zinc-900",
  ].join(" ");

const authLinkClassName =
  "rounded-full border-2 border-zinc-900 bg-zinc-50 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-900 transition hover:bg-zinc-900 hover:text-zinc-50";

// Enhancement 1 + 3: custom navigation design and brand logo styling
const NavBar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-zinc-900 bg-zinc-100/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center gap-3">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="NexaFrame Logo"
              className="h-9 w-9 object-contain"
            />
            <div className="leading-tight">
              <p className="text-xl font-black tracking-tight text-zinc-900">
                NexaFrame
              </p>
              <p className="text-xs uppercase tracking-widest text-sky-700">
                Wireframe & UX Lab
              </p>
            </div>
          </div>
        </NavLink>

        <nav className="hidden items-center gap-2 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={navLinkClassName}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <NavLink to="/auth/signin" className={authLinkClassName}>
            Sign In
          </NavLink>
          <NavLink to="/auth/signup" className={authLinkClassName}>
            Sign Up
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
