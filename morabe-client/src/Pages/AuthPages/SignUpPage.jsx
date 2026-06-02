import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "./../../components/Button";
import { createUser } from "../../services/UserService";

const inputClasses =
  "w-full rounded-xl border border-zinc-300 bg-zinc-100 px-4 py-3 text-sm text-zinc-900 focus:border-2 focus:border-zinc-800 focus:outline-none focus:ring-0";
const actionButtonClassName =
  "w-full rounded-xl py-3 text-sm tracking-[0.12em]";

const SignUpPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [type, setType] = useState("viewer");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");

    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !age ||
      !gender ||
      !contactNumber ||
      !address
    ) {
      setError("Please fill in all fields to create an account.");
      return;
    }

    try {
      await createUser({
        firstName,
        lastName,
        email,
        password,
        type,
        username: email.split("@")[0],
        age,
        gender,
        contactNumber,
        address,
      });
      setSuccess("Your account was created. Redirecting to sign in...");
      setTimeout(() => {
        navigate("/auth/signin");
      }, 900);
    } catch (err) {
      setError(err.response?.data?.message || "Unable to create account.");
    }
  };

  return (
    <>
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
        Sign Up
      </h1>
      <p className="mt-2 text-base leading-6 text-zinc-600">
        Create your account with the same monochrome layout pattern and shared
        button treatment.
      </p>
      <form
        onSubmit={handleSubmit}
        className="mt-8 space-y-5 sm:grid sm:gap-5 sm:grid-cols-2"
      >
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
            placeholder="Juan"
            autoComplete="given-name"
            className={inputClasses}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
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
            placeholder="Dela Cruz"
            autoComplete="family-name"
            className={inputClasses}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="mt-2 text-xs leading-5 text-zinc-500">
            Use a secure password with letters, numbers, and symbols.
          </p>
        </div>
        <div>
          <label htmlFor="age" className="text-sm font-medium text-zinc-700">
            Age
          </label>
          <input
            id="age"
            type="number"
            min="0"
            placeholder="28"
            className={inputClasses}
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="gender" className="text-sm font-medium text-zinc-700">
            Gender
          </label>
          <select
            id="gender"
            className={inputClasses}
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="">Select gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="contact-number"
            className="text-sm font-medium text-zinc-700"
          >
            Contact Number
          </label>
          <input
            id="contact-number"
            type="tel"
            placeholder="0917 123 4567"
            className={inputClasses}
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="type" className="text-sm font-medium text-zinc-700">
            Type
          </label>
          <select
            id="type"
            className={inputClasses}
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="viewer">Viewer</option>
            <option value="editor">Editor</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="address"
            className="text-sm font-medium text-zinc-700"
          >
            Address
          </label>
          <input
            id="address"
            type="text"
            placeholder="123 Main St, Makati City"
            className={inputClasses}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="grid gap-3 pt-2 sm:grid-cols-2">
          <Button
            type="submit"
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
      </form>
      {error && <p className="mt-4 text-sm text-red-600">{error}</p>}
      {success && <p className="mt-4 text-sm text-emerald-600">{success}</p>}
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
