import Head from "next/head";
import { Canvas } from "../components/Canvas";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>MNIST CLASSIFIER | ONNXJS | PYTORCH | Bhimraj Yadav</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="top-0 sticky left-0 w-full z-40 bg-white border-b border-gray-100">
        <div className="container mx-auto px-20 flex items-center justify-between h-16">
          <a title="mnist classifier" href="/">
            <div className="flex items-center space-x-2">
              <svg
                className="h-8 w-8 text-teal-300"
                fill="none"
                viewBox="0 0 35 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#11d3cf"
                  d="M15.258 26.865a4.043 4.043 0 01-1.133 2.917A4.006 4.006 0 0111.253 31a3.992 3.992 0 01-2.872-1.218 4.028 4.028 0 01-1.133-2.917c.009-.698.2-1.382.557-1.981.356-.6.863-1.094 1.47-1.433-.024.109.09-.055 0 0l1.86-1.652a8.495 8.495 0 002.304-5.793c0-2.926-1.711-5.901-4.17-7.457.094.055-.036-.094 0 0A3.952 3.952 0 017.8 7.116a3.975 3.975 0 01-.557-1.98 4.042 4.042 0 011.133-2.918A4.006 4.006 0 0111.247 1a3.99 3.99 0 012.872 1.218 4.025 4.025 0 011.133 2.917 8.521 8.521 0 002.347 5.832l.817.8c.326.285.668.551 1.024.798.621.33 1.142.826 1.504 1.431a3.902 3.902 0 01-1.504 5.442c.033-.067-.063.036 0 0a8.968 8.968 0 00-3.024 3.183 9.016 9.016 0 00-1.158 4.244zM19.741 5.123c0 .796.235 1.575.676 2.237a4.01 4.01 0 001.798 1.482 3.99 3.99 0 004.366-.873 4.042 4.042 0 00.869-4.386 4.02 4.02 0 00-1.476-1.806 3.994 3.994 0 00-5.058.501 4.038 4.038 0 00-1.175 2.845zM23.748 22.84c-.792 0-1.567.236-2.226.678a4.021 4.021 0 00-1.476 1.806 4.042 4.042 0 00.869 4.387 3.99 3.99 0 004.366.873A4.01 4.01 0 0027.08 29.1a4.039 4.039 0 00-.5-5.082 4 4 0 00-2.832-1.18zM34 15.994c0-.796-.235-1.574-.675-2.236a4.01 4.01 0 00-1.798-1.483 3.99 3.99 0 00-4.367.873 4.042 4.042 0 00-.869 4.387 4.02 4.02 0 001.476 1.806 3.993 3.993 0 002.226.678 4.003 4.003 0 002.832-1.18A4.04 4.04 0 0034 15.993z"
                />
                <path
                  fill="#11d3cf"
                  d="M5.007 11.969c-.793 0-1.567.236-2.226.678a4.021 4.021 0 00-1.476 1.807 4.042 4.042 0 00.869 4.386 4.001 4.001 0 004.366.873 4.011 4.011 0 001.798-1.483 4.038 4.038 0 00-.5-5.08 4.004 4.004 0 00-2.831-1.181z"
                />
              </svg>
              <span className="text-2xl font-normal text-gray-600 ">
                mnist
                <span className="font-bold p-1 text-black">classifier</span>
              </span>
            </div>
          </a>
          <div className="hidden sm:block">
            <nav className="relative flex-col items-center justify-end flex-1 mt-12 main-nav sm:flex sm:mt-0 sm:flex-row">
              <div className="relative flex flex-col items-center justify-end flex-1 sm:flex-row">
                <a
                  title="MNIST CLASSIFIER"
                  href="/"
                  className="py-2 sm-4 sm:py-2 sm:px-4 text-black sm:text-secondary font-bold"
                >
                  Home
                </a>
                <a
                  title="MNIST CLASSIFIER"
                  href="/"
                  className="py-2 sm:py-4 sm:px-4 text-black sm:text-secondary opacity-75 hover:opacity-100"
                >
                  About
                </a>
              </div>
              <div className="flex flex-col items-center mt-2 sm:mt-0 sm:flex-row sm:border-l sm:border-gray-300">
                <svg
                  className="w-6 h-6 mx-2"
                  fill="black"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                </svg>
              </div>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex flex-col flex-grow overflow-hidden min-h-screen">
        <div className="container mx-auto px-24">
          <div className="bg-blue-100 mt-6 rounded-lg py-6 sm:py-12 lg:py-20 px-4 sm:px-6 lg:px-12 flex flex-col items-center">
            {/* <div className="sm:w-1/2">
              <h1 className="text-center sm:text-left text-2xl sm:text-3xl text-secondary mb-2 leading-snug">
                A <strong className="underline">free repository</strong> for
                community components using{" "}
                <a
                  href="https://tailwindcss.com"
                  target="_blank"
                  className="font-bold hover:underline"
                >
                  TailwindCSS
                </a>
              </h1>{" "}
              <p className="text-center sm:text-left text-gray-700 sm:text-lg mb-6 lg:pr-12">
                Open source Tailwind UI components and templates to bootstrap
                your new apps, projects or landing sites!
              </p>{" "}
              <div className="h-16 sm:pr-12">
                <form action="/search" className="relative">
                  <input
                    type="search"
                    name="query"
                    placeholder="Search components"
                    required="required"
                    className="p-4 text-gray-700 w-full bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400 focus:ring-0"
                  />{" "}
                  <button
                    type="submit"
                    className="bg-teal-300 text-white rounded font-lg absolute top-0 right-0 bottom-0 mt-1 mr-1 mb-1 px-8 font-semibold hover:bg-teal-300 focus:outline-none focus:ring"
                  >
                    Search
                  </button>
                </form>
              </div>
            </div> */}
            <div className="justify-center items-center p-5">
              <Canvas />
            </div>
          </div>
        </div>
      </main>

      <footer className="flex flex-col items-center justify-center w-full border-t bg-secondary">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center lg:w-1/2 xl:w-1/3 mx-auto pt-8 ">
            <span className="text-2xl font-bold text-white mb-1">
              Subscribe
            </span>
            <p className="text-teal-100 text-center">
              Receive the latest free components and templates
            </p>
            <form
              action="/newsletters/subscribe"
              method="post"
              className="flex sm:block mt-6 bg-white p-1 rounded"
            >
              <input
                type="hidden"
                name="_token"
                value="9loqmZUEplTcJEaSFfX1C0WgWXOIKkkNJMjBcUQW"
              />
              <input
                type="email"
                name="email"
                placeholder="Email address"
                className="py-3 px-3 border-none text-gray-700 w-48 sm:w-64 focus:ring-0 focus:outline-none"
              />
              <input
                type="submit"
                value="Subscribe"
                className="bg-teal-300 rounded text-white py-3 px-6 cursor-pointer"
              />
            </form>
          </div>
          <div className="sm:flex sm:mt-16">
            <div className="sm:w-1/2 sm:pl-16 mt-8 sm:mt-0 pr-4">
              <a title="MNIST CLASSIFIER" href="/">
                <img
                  alt="MNIST CLASSIFIER"
                  src="https://tailwindcomponents.com/svg/logo-white.svg"
                  className="h-8"
                />
              </a>{" "}
              <p className="text-teal-100 mt-2">
                A repository for community components using Tailwind CSS
              </p>{" "}
              <div className="flex mt-6">
                <a
                  rel="nofollow"
                  title="MNIST CLASSIFIER"
                  href="/"
                  className="mr-3 flex items-center"
                >
                  <img
                    alt="MNIST CLASSIFIER"
                    src="https://tailwindcomponents.com/svg/twitter.svg"
                    className="w-8 h-8 mr-2"
                  />{" "}
                  <span className="text-white hover:underline">
                    Follow us on Twitter
                  </span>
                </a>
              </div>
            </div>
            <div className="mt-16 sm:mt-0 sm:w-1/2 sm:pr-16 flex flex-row">
              <div className="flex flex-col w-2/3 sm:w-1/2 mr-4">
                <span className="font-bold text-white uppercase mb-2">
                  Components
                </span>{" "}
                <ul className="flex-1">
                  <li className="mb-1">
                    <a
                      title="Tailwind CSS Dropdowns"
                      href="/components/dropdowns"
                      className="text-teal-100 hover:text-white"
                    >
                      Tailwind Dropdowns
                    </a>
                  </li>{" "}
                  <li className="mb-1">
                    <a
                      title="Tailwind CSS Logins"
                      href="/components/logins"
                      className="text-teal-100 hover:text-white"
                    >
                      Tailwind Logins
                    </a>
                  </li>{" "}
                  <li className="mb-1">
                    <a
                      title="Tailwind CSS Modals"
                      href="/components/modals"
                      className="text-teal-100 hover:text-white"
                    >
                      Tailwind Modals
                    </a>
                  </li>{" "}
                  <li className="mb-1">
                    <a
                      title="Tailwind CSS Tabs"
                      href="/components/tabs"
                      className="text-teal-100 hover:text-white"
                    >
                      Tailwind Tabs
                    </a>
                  </li>{" "}
                  <li className="mb-1">
                    <a
                      title="Tailwind CSS Inputs"
                      href="/components/inputs"
                      className="text-teal-100 hover:text-white"
                    >
                      Tailwind Inputs
                    </a>
                  </li>{" "}
                  <li className="mb-1">
                    <a
                      title="Tailwind CSS Selects"
                      href="/components/selects"
                      className="text-teal-100 hover:text-white"
                    >
                      Tailwind Selects
                    </a>
                  </li>
                </ul>
              </div>{" "}
              <div className="flex flex-col">
                <span className="font-bold text-white uppercase mb-2">
                  Utilities
                </span>{" "}
                <div className="flex">
                  <ul className="flex-1">
                    <li className="mb-1">
                      <a
                        title="Tailwind Cheatsheet"
                        href="/cheatsheet/"
                        className="text-teal-100 hover:text-white"
                      >
                        Cheatsheet
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-6">
          <div className="mt-16 border-t border-teal-800 flex flex-col items-center">
            <div className="sm:w-2/3 text-center py-6">
              <p className="text-sm text-teal-100">
                © 2021 by Bhimraj Yadav •{" "}
                <a title="MNIST CLASSIFIER" rel="nofollow" href="/">
                  Privacy
                </a>{" "}
                •{" "}
                <a title="MNIST CLASSIFIER" rel="nofollow" href="/">
                  Terms and Conditions
                </a>{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-6 mb-4">
          <a
            className="flex items-center justify-center text-white"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{"   "}
            <svg
              className="h-4 w-auto"
              role="img"
              aria-label="Vercel Inc."
              viewBox="0 0 283 64"
              fill="white"
            >
              <path d="M37 0l37 64H0L37 0zM159.6 34c0-10.3-7.6-17.5-18.5-17.5s-18.5 7.2-18.5 17.5c0 10.1 8.2 17.5 19.5 17.5 6.2 0 11.8-2.3 15.4-6.5l-6.8-3.9c-2.1 2.1-5.2 3.4-8.6 3.4-5 0-9.3-2.7-10.8-6.8l-.3-.7h28.3c.2-1 .3-2 .3-3zm-28.7-3l.2-.6c1.3-4.3 5.1-6.9 9.9-6.9 4.9 0 8.6 2.6 9.9 6.9l.2.6h-20.2zM267.3 34c0-10.3-7.6-17.5-18.5-17.5s-18.5 7.2-18.5 17.5c0 10.1 8.2 17.5 19.5 17.5 6.2 0 11.8-2.3 15.4-6.5l-6.8-3.9c-2.1 2.1-5.2 3.4-8.6 3.4-5 0-9.3-2.7-10.8-6.8l-.3-.7H267c.2-1 .3-2 .3-3zm-28.7-3l.2-.6c1.3-4.3 5.1-6.9 9.9-6.9 4.9 0 8.6 2.6 9.9 6.9l.2.6h-20.2zM219.3 28.3l6.8-3.9c-3.2-5-8.9-7.8-15.8-7.8-10.9 0-18.5 7.2-18.5 17.5s7.6 17.5 18.5 17.5c6.9 0 12.6-2.8 15.8-7.8l-6.8-3.9c-1.8 3-5 4.7-9 4.7-6.3 0-10.5-4.2-10.5-10.5s4.2-10.5 10.5-10.5c3.9 0 7.2 1.7 9 4.7zM282.3 5.6h-8v45h8v-45zM128.5 5.6h-9.2L101.7 36 84.1 5.6h-9.3L101.7 52l26.8-46.4zM185.1 25.8c.9 0 1.8.1 2.7.3v-8.5c-6.8.2-13.2 4-13.2 8.7v-8.7h-8v33h8V36.3c0-6.2 4.3-10.5 10.5-10.5z"></path>
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
}
