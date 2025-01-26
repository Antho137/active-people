"use client";
import Link from "next/link";
import Image from "next/image";
import Faq from "./components/Faq";

export default function Home() {
  return (
    <div className="min-h-dvh relative mt-20 mx-auto px-10 py-10 flex flex-col justify-center items-center bg-slate-300">
      <div
        className="flex flex-col mx-auto mt-3 mb-6
      md:flex-row justify-between items-center gap-5"
      >
        <div className="text-center md:w-3/5">
          <h2 className="text-indigo-900 text-3xl lg:text-4xl md:w-[400px] md:mx-auto mb-3 font-medium">
            Connecting people for concrete solutions
          </h2>
          <p className="text-md lg:text-xl md:w-[400px] lg:w-[500px] md:mx-auto">
            The community of people who share the value of integrity with a
            common interest of looking for solution to society problems.
            Interested to join the community!{" "}
            <span className="block my-3">
              {" "}
              <Link
                className="bg-white text-blue-600 text-[14px] pt-1 pb-1.5 px-3 font-semibold border border-blue-600 hover:bg-blue-700 hover:font-bold hover:text-white rounded-xl"
                href="/register"
              >
                Get register
              </Link>
            </span>
          </p>
        </div>
        <div className="mx-auto md:w-2/5">
          <Image
            src="/active-people/active-people.png"
            alt="Active people"
            className="rounded"
            width={310}
            height={300}
            priority
          />
        </div>
      </div>
      <div
        className="flex flex-col mx-auto
        my-10 justify-center items-center"
      >
        <div className="bg-slate-200 text-center  border border-indigo-700 px-6 pt-5 pb-4 mb-10 rounded-xl">
          <h3 className="text-indigo-900 text-2xl mb-3 lg:text-3xl font-medium md:w-[600px] md:mx-auto">
            Building structures for a functional society
          </h3>
          <p className="text-md lg:text-lg md:w-[600px]">
            One of the challenge for our society is to have functional
            structures that provide solutions for critical problems the world is
            faced to.
          </p>
          <button className="bg-blue-700 text-sm text-white pt-1 pb-1.5 px-4 my-4 rounded-xl  lg:text-md hover:bg-white hover:font-bold hover:text-blue-700 border border-blue-700">
            Read more
          </button>
        </div>
        <div className="text-center my-5">
          <h3 className="bg-indigo-900 text-white  text-2xl py-2 lg:text-3xl md:mx-auto font-medium md:w-[650px] rounded">
            Getting rid of sceptics
          </h3>
          <p className="bg-white text-md lg:text-lg p-5 px-6 md:w-[650px] rounded">
            It's necessary to determine the balance between the use of natural
            resources and our increasing needs. No one is safe from environment
            harm, such as today's extreme weather events.
          </p>
        </div>
        <div className="my-10 md:w-[650px]">
          <Faq />
        </div>
      </div>
    </div>
  );
}
