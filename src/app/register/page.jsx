"use client";
import Link from "next/link";
import RegistrationForm from "../components/RegistrationForm";

export default function Register() {
  return (
    <div className="relative mt-20 pt-10 mx-auto min-h-dvh lg:px-20 xl:px-40 bg-slate-300">
      <h2 className="text-indigo-900 text-3xl my-3 text-center lg:text-4xl font-medium">
        Get Register
      </h2>
      <p className="text-md text-center mt-2 mb-6 px-10 md:w-[500px] md:mx-auto lg:text-lg">
        Registered member has access to the forum.
      </p>
      <RegistrationForm />
      <p className="text-sm text-center text-gray-900 mb-6">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-medium text-blue-600 hover:underline"
        >
          Login here
        </Link>
      </p>
    </div>
  );
}
