import { Link } from "react-router-dom";
import Button from "./../../components/Button";

const inputClasses =
  "w-full rounded-xl border border-zinc-300 bg-zinc-100 px-4 py-3 text-sm text-zinc-900 focus:border-2 focus:border-zinc-800 focus:outline-none focus:ring-0";
const actionButtonClassName =
  "w-full rounded-xl py-3 text-[1px] tracking-[0.2em]";

const SignUpPage = () => {
  return (
    <>
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
        Sign Up
      </h1>
      <p className="mt-2 text-base leading-6 text-zinc-600">
        Create your account with the same monochrome layout pattern and shared
        button treatment.
      </p>
      <form className="mt-8 space-y-5 sm:grid sm:gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="first-name"
            className="text-sm font-medium text-zinc-700"
          >
            First Name
          </label>
          <input
            id="first-name"
            type="text"
            placeholder="John"
            autoComplete="given-name"
            className={inputClasses}
          />
        </div>
        <div>
          <label
            htmlFor="last-name"
            className="text-sm font-medium text-zinc-700"
          >
            Last Name
          </label>
          <input
            id="last-name"
            type="text"
            placeholder="Doe"
            autoComplete="family-name"
            className={inputClasses}
          />
        </div>
        <div>
          <label
            htmlFor="signup-email"
            className="text-sm font-medium text-zinc-700"
          >
            Email
          </label>
          <input
            id="signup-email"
            type="email"
            placeholder="juan@nexaframe.com"
            autoComplete="email"
            className={inputClasses}
          />
        </div>
        <div>
          <label
            htmlFor="signup-password"
            className="text-sm font-medium text-zinc-700"
          >
            Password
          </label>
          <input
            id="signup-password"
            type="password"
            placeholder="••••••••"
            autoComplete="new-password"
            className={inputClasses}
          />
          <p className="mt-2 text-xs leading-5 text-zinc-500">
            Use a secure password with letters, numbers, and symbols.
          </p>
        </div>
      </form>
      <div className="grid gap-3 pt-2 sm:grid-cols-2">
        <Button
          type="button"
          variant="primary"
          className={actionButtonClassName}
        >
          Create Account
        </Button>
        <Button
          type="button"
          variant="secondary"
          className={actionButtonClassName}
        >
          Sign Up with Google
        </Button>
        <Button
          type="button"
          variant="secondary"
          className={actionButtonClassName}
        >
          Sign Up with Apple
        </Button>
      </div>
      <div className="mt-8 border-t border-zinc-200 pt-6 text-sm text-zinc-600">
        Already have an account?{" "}
        <Link
          to="/auth/signin"
          className="font-semibold text-zinc-900 transition hover:text-zinc-600"
        >
          Log In
        </Link>
      </div>
    </>
  );
};

export default SignUpPage;
