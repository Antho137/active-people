import Image from "next/image";

function About() {
  return (
    <div className="relative mt-20 pt-10 xl:px-40 min-h-dvh text-center bg-slate-300">
      <h2 className="text-indigo-900 text-3xl my-3 lg:text-4xl font-medium">
        About Us
      </h2>
      <div className="relative flex flex-col justify-between items-center px-10">
        <div>
          <p className="mb-6 text-lg lg:text-xl sm:px-14 md:px-20 lg:px-36">
            We focus on what is matter or not to say what is important for all
            of people. The life is significant if it is builded around a
            purpose. A community mission is to look for solutions which give the
            life its value. The community success is a true collaboration
            between all its members.
          </p>
        </div>
        <div>
          <Image
            src="/community.png"
            alt="Community"
            className=" rounded"
            width={450}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}

export default About;
