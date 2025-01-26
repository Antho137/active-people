"use client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import Link from "next/link";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const handleLogin = () => {
    if (username && password) {
      router.push("/forum");
    }
  };

  return (
    <div className="relative mt-20 pt-10 mx-auto min-h-dvh lg:px-20 xl:px-40 bg-slate-300">
      <h2 className="text-indigo-900 my-3 text-3xl text-center lg:text-4xl font-medium">
        Login
      </h2>
      <div className="relative flex flex-col justify-between items-center px-10">
        <p className="text-lg text-center mb-6 px-10 md:w-[500px] lg:text-xl">
          Log in give access in the forum.
        </p>
        <form
          className="px-10 mb-10"
          autoComplete="off"
          onSubmit={handleSubmit(handleLogin)}
        >
          <div className="block pb-2">
            <label className="block mb-1 text-left" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              className="w-80 p-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg"
              {...register("username", {
                required: "Username is required.",
                pattern: {
                  value: /^[a-zA-Z\s]+$/,
                  message: "Username is not valid.",
                },
              })}
            />
            <small className="text-red-500 font-semibold">
              {errors.username && (
                <p className="errorMsg">{errors.username.message}</p>
              )}
            </small>
          </div>
          <div className="block pb-2">
            <label className="block mb-1 text-left" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="w-80 p-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg"
              {...register("password", {
                required: "Password is required.",
                minLength: {
                  value: 8,
                  message: "Password should be at-least 8 characters.",
                },
              })}
            />
            <small className="text-red-500 font-semibold">
              {errors.password && (
                <p className="errorMsg">{errors.password.message}</p>
              )}
            </small>
          </div>
          <div className="block pt-4">
            <label></label>
            <button
              className="w-80 bg-blue-600 text-white  text-sm text-center px-5 py-2.5 font-medium rounded-lg"
              type="submit"
            >
              Login
            </button>
            <p className="text-sm text-center text-gray-900 my-6">
              Not have an account?{" "}
              <Link
                href="/register"
                className="font-medium text-blue-600 hover:underline"
              >
                Register here
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
