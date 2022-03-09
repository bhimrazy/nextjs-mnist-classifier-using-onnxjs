import Head from "next/head";
import { Canvas } from "../components/Canvas";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>MNIST CLASSIFIER | ONNXJS | PYTORCH | Bhimraj Yadav</title>
        <link rel="icon" href="/favicon.ico" />
       
      </Head>
      <header className="top-0 sticky left-0 w-full z-40 py-2 bg-gray-50 border-b border-gray-100">
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
                <span>MNIST DIGIT CLASSIFIER </span>
                <span className="font-bold p-1 text-black">ONNXJS</span>
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
      <main className="flex flex-col bg-gray-200 py-20">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow flex ">
          <Canvas />
        </div>
      </main>

      <footer className="flex bg-gray-200 flex-col space-y-2 items-center justify-center w-full h-24 border-t print:hidden">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
        <div className="items-center flex flex-shrink-0 justify-center">
          <span>Made with </span>
          <span className="text-pink-600 px-1">
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
          <span className="font-medium text-blue-600 hover:text-blue-700">
            By Bhimraj Yadav
          </span>
        </div>
      </footer>
    </div>
  );
}
