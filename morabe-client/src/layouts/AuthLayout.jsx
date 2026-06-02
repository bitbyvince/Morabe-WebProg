import { Outlet } from "react-router-dom";
import logo from "../assets/logo.png";

const AuthLayout = () => {
  return (
    <section className="min-h-screen bg-zinc-100 text-zinc-900">
      <div className="grid min-h-screen w-full lg:grid-cols-[1fr_0.95fr]">
        <div className="flex items-center justify-center border-b-2 border-zinc-200 bg-zinc-100 p-8 sm:p-10 lg:border-b-0 lg:border-r-2 lg:border-zinc-200 lg:p-16">
          <img
            src={logo}
            alt="NexaFrame Logo"
            className="h-150 w-150 bg-zinc-100 object-contain"
          />
        </div>
        <main className="flex items-center bg-zinc-50 px-6 py-10 sm:px-10 lg:px-16">
          <div className="mx-auto w-full max-w-md">
            <Outlet />
          </div>
        </main>
      </div>
    </section>
  );
};

export default AuthLayout;
