"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

export default function LoginPage() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const router = useRouter();
  const [buttonDisabled, setButtonDisabled] = React.useState(true);
  const [loading, setLoading] = React.useState(false);

  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      toast.success("LoggedIn Successfully");
      console.log(response,response.data);
      setUser({
      email: "",
      password: "",
    });
      router.push("/profile");
    } catch (error: any) {
      console.log("Login Failed", error.message);
      const errorMessage =
        error.response?.data?.error ||
        error.message ||
        "Login failed. Please try again.";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };
  React.useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="w-full max-w-md rounded-2xl border border-lime-500/30 bg-zinc-950 p-8 shadow-[0_0_40px_rgba(163,230,53,0.15)]">
        <h1 className="text-3xl font-bold text-lime-400 tracking-wide">
          Welcome Back
        </h1>
        <p className="text-sm text-zinc-400 mt-2">
          Login to the neon side of the web
        </p>
        <div className="mt-6 space-y-4">
          <div>
            <label className="text-sm text-zinc-400">Email</label>
            <input
              disabled={loading}
              type="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              placeholder="you@email.com"
              className="mt-1 w-full rounded-lg bg-black border border-zinc-800 px-4 py-2 text-white outline-none transition focus:border-lime-400 focus:ring-1 focus:ring-lime-400"
            />
          </div>
          <div>
            <label className="text-sm text-zinc-400">Password</label>
            <input
              disabled={loading}
              type="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              placeholder="••••••••"
              className="mt-1 w-full rounded-lg bg-black border border-zinc-800 px-4 py-2 text-white outline-none transition focus:border-lime-400 focus:ring-1 focus:ring-lime-400"
            />
          </div>
          <button
            onClick={onLogin}
            disabled={buttonDisabled || loading}
            className="mt-6 w-full rounded-lg cursor-pointer bg-lime-400 disabled:opacity-50 disabled:cursor-not-allowed py-2.5 font-semibold text-black transition hover:bg-lime-300 active:scale-[0.98]"
          >
            {loading
              ? "Logging In..."
              : buttonDisabled
                ? "Fill all fields"
                : "Login"}
          </button>
          <p className="mt-4 text-center text-sm text-zinc-400">
            New Here, Signup?{" "}
            <Link href="/signup" className="text-lime-400 hover:underline">
              Signup
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
