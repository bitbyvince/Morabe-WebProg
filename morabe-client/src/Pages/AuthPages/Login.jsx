import React, { useState } from "react";
import Button from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../services/UserService";

const inputClasses =
  "w-full rounded-xl border border-zinc-300 bg-zinc-100 px-4 py-3 text-sm text-zinc-900 focus:border-2 focus:border-zinc-800 focus:outline-none focus:ring-0";
const actionButtonClassName =
  "w-full rounded-xl py-3 text-sm tracking-[0.08em]";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await loginUser({ email, password });
      localStorage.setItem("token", data.token);
      localStorage.setItem("firstName", data.firstName);
      localStorage.setItem("type", data.type);
      navigate("/dashboard", {
        state: { firstName: data.firstName, type: data.type },
      });
    } catch (err) {
      setError(
        err.response?.data?.message || "Login failed. Please try again.",
      );
    }
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-2xl p-8 shadow-sm">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
          Login
        </h1>
        <p className="mt-2 text-base leading-6 text-zinc-600">
          Sign in to access your dashboard and manage articles.
        </p>

        <form onSubmit={handleLogin} className="mt-8 space-y-4">
          {error && <p className="text-sm text-red-600">{error}</p>}
          <div>
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className={inputClasses}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="text-sm font-medium text-zinc-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              className={inputClasses}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="grid gap-3">
            <Button
              type="submit"
              variant="primary"
              className={actionButtonClassName}
            >
              Log In
            </Button>
            <Button
              type="button"
              variant="secondary"
              className={actionButtonClassName}
            >
              Sign in with Google
            </Button>
          </div>
        </form>

        <p className="mt-6 text-sm text-zinc-600">
          If you do not have an account,{" "}
          <Link
            to="/auth/signup"
            className="font-semibold text-zinc-900 hover:text-zinc-600"
          >
            register here
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
