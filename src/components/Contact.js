"use client";

export default function Contact() {
  return (
    <div className="flex mx-auto min-h-screen items-center bg-[#0d0d0d]">
      <div className=" px-6 sm:py-10 lg:px-8 mx-auto w-[1280px]">
        <h1 className="text-white font-medium text-7xl mx-6 uppercase mb-20 border-b-4 border-white/20 w-fit">
          contact us
        </h1>
        <form action="#" method="POST" className="mx-auto mt-16 px-6 sm:mt-12">
          <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-2 text-lg">
            <div className="col-start-1">
              <label
                htmlFor="company"
                className="block font-medium leading-6 text-white"
              >
                Name <span className="text-indigo-600">*</span>
              </label>
              <div className="mt-4">
                <input
                  type="text"
                  name="company"
                  id="company"
                  placeholder="Enter your name"
                  autoComplete="off"
                  className="block w-full border-0 bg-transparent h-[5rem] text-white outline-none shadow-sm placeholder:text-gray-400 placeholder:text-lg placeholder:font-semibold  sm:leading-6 border-b-2 focus:border-white border-white/20 transition-all duration-500"
                />
              </div>
            </div>
            <div className="">
              <label
                htmlFor="company"
                className="block font-semibold leading-6 text-white"
              >
                Company
              </label>
              <div className="mt-4">
                <input
                  type="text"
                  name="company"
                  id="company"
                  autoComplete="off"
                  placeholder="Enter your name"
                  className="block w-full border-0 bg-transparent h-[5rem] text-white outline-none shadow-sm placeholder:text-gray-400 placeholder:text-lg placeholder:font-semibold sm:leading-6 border-b-2 focus:border-white border-white/20 transition-all duration-500"
                />
              </div>
            </div>
            <div className="">
              <label
                htmlFor="company"
                className="block font-semibold leading-6 text-white"
              >
                Company
              </label>
              <div className="mt-4">
                <input
                  type="text"
                  name="company"
                  id="company"
                  autoComplete="off"
                  placeholder="Enter your name"
                  className="block w-full border-0 bg-transparent h-[5rem] text-white outline-none shadow-sm placeholder:text-gray-400 placeholder:text-lg placeholder:font-semibold  sm:leading-6 border-b-2 focus:border-white border-white/20 transition-all duration-500"
                />
              </div>
            </div>
            <div className="">
              <label
                htmlFor="email"
                className="block font-semibold leading-6 text-white"
              >
                Email <span className="text-indigo-600">*</span>
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  autoComplete="off"
                  id="email"
                  placeholder="Enter your name"
                  className="block w-full border-0 bg-transparent h-[5rem] text-white outline-none shadow-sm placeholder:text-gray-400 placeholder:text-lg placeholder:font-semibold  sm:leading-6 border-b-2 focus:border-white border-white/20 transition-all duration-500"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block font-bold leading-6">
                Tell us about the project{" "}
                <span className="text-indigo-600">*</span>
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  placeholder="Project purpose, target audience,competitors,color preferences, inspiration sites, ect."
                  rows={4}
                  className="block w-full bg-transparent border-0 py-2 outline-none shadow-sm placeholder:text-gray-400 sm:leading-6 border-b-2 focus:border-white border-white/20 transition-all duration-500"
                  defaultValue={""}
                />
              </div>
            </div>
          </div>
          <div className="my-10 flex items-center">
            <div className="flex flex-col justify-around gap-3 text-lg">
              <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  value=""
                  class="w-4 h-4 accent-indigo-600 bg-gray-100 border-gray-300 rounded focus:ring-indigo-600 dark:focus:ring-indigo-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                ></input>
                <p>
                  I concert to processing of my personal data and{" "}
                  <span className="font-bold text-indigo-600 underline">
                    Privacy Policy
                  </span>
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  value=""
                  class="w-4 h-4 accent-indigo-600 bg-gray-100 border-gray-300 rounded focus:ring-indigo-600 dark:focus:ring-indigo-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                ></input>
                <p>
                  I accept the
                  <span className="font-bold text-indigo-600 underline">
                    Therms and Conditions
                  </span>
                  .
                </p>
              </div>
            </div>
            <button
              type="submit"
              className="w-[15%] ml-auto py-4 rounded-full bg-white text-center text-sm font-semibold text-black shadow-sm hover:bg-indigo-600 transition-colors duration-500 hover:text-white  "
            >
              SUMBIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
