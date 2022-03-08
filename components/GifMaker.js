import React, { useState, useEffect } from "react";
import { createFFmpeg, fetchFile } from "@ffmpeg/ffmpeg";
const ffmpeg = createFFmpeg({ log: true });

function GifMaker() {
  const [video, setVideo] = useState();
  const [ready, setReady] = useState(false);
  const [gif, setGif] = useState();
  const load = async () => {
    await ffmpeg.load();
    setReady(true);
  };
  const convertToGif = async () => {
    // Write the file to memory
    ffmpeg.FS("writeFile", "test.mp4", await fetchFile(video));

    // Run the FFMpeg command
    await ffmpeg.run(
      "-i",
      "test.mp4",
      "-t",
      "2.5",
      "-ss",
      "2.0",
      "-f",
      "gif",
      "out.gif"
    );

    // Read the result
    const data = ffmpeg.FS("readFile", "out.gif");

    // Create a URL
    const url = URL.createObjectURL(
      new Blob([data.buffer], { type: "image/gif" })
    );
    setGif(url);
  };

  useEffect(() => {
    load();
  }, []);
  return (
    <div className="justify-center items-center">
      <h1 className="p-2 justify-center items-center">
        {ready ? (
          <span className="text-2xl text-indigo-800 font-bold">
            Make your Giify Now
          </span>
        ) : (
          <span className="text-2xl text-indigo-500 font-semibold">
            Loading....
          </span>
        )}
      </h1>
      <section className="flex flex-row space-x-4">
        <div className="justify-center items-center">
          <div className=" flex flex-col space-y-2">
            {video && (
              <>
                <h3 className="font-bold uppercase tracking-wider text-indigo-600">
                  Original VIDEO
                </h3>
                <video
                  className="rounded-md shadow-md w-full h-auto"
                  controls
                  src={URL.createObjectURL(video)}
                ></video>
                <button
                  className="bg-indigo-500 shadow-md px-4 py-1 rounded-sm text-indigo-100 font-medium tracking-wide items-center justify-center outline-none focus:outline-none"
                  onClick={convertToGif}
                >
                  Convert to Best Shot GIF
                </button>
              </>
            )}
          </div>
          {!video && (
            <label className="m-4 w-64 flex flex-col items-center px-4 py-6 bg-white text-indigo-500 rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-indigo-400 transition-all hover:text-white">
              <svg
                className="w-8 h-8"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
              </svg>
              <span className="mt-2 text-base flex-wrap leading-normal font-semibold">
                Upload a Video file
              </span>
              <input
                type="file"
                onChange={(e) => setVideo(e.target.files?.item(0))}
                className="hidden"
              />
            </label>
          )}
        </div>
        {video && (
          <div className="flex flex-col transition-all">
            <h3 className="mx-1 font-bold uppercase tracking-wider text-indigo-600">
              Result
            </h3>
            {gif ? (
              <>
                <img
                  className="rounded-md shadow-md w-52 h-96 m-2"
                  src={gif}
                  width="250"
                />
                <button className="bg-indigo-500 shadow-md px-1 py-1 rounded-sm text-indigo-100 font-medium tracking-wide items-center justify-center mt-4 outline-none focus:outline-none">
                  Download GIF
                </button>
              </>
            ) : (
              <div className=" rounded-md shadow-md bg-indigo-300 w-48 h-96 m-2 p-1 flex flex-col">
                <span className="text-2xl text-center text-white p-2 mt-40 font-semibold justify-center items-center">
                  Your Best Shot <br />
                  is Here{" "}
                </span>
              </div>
            )}
          </div>
        )}
      </section>
    </div>
  );
}

export default GifMaker;
