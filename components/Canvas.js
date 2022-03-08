import React, { useState, useEffect, useRef, useCallback } from "react";
import { Tensor, InferenceSession } from "onnxjs";
const INITIAL_STATE = {
  sessionRunning: false,
  inferenceTime: 0,
  error: false,
  output: [],
  maxValue: null,
  modelLoading: false,
  modelLoaded: false,
  backendHint: null,
  selectedImage: null,
};
export function Canvas() {
  const [modelLoaded, setModelLoaded] = useState(false);
  const [results, setResults] = useState(INITIAL_STATE);
  const lastX = useRef(0);
  const lastY = useRef(0);
  const canvas = useRef(null);
  const isDrawing = useRef(false);
  const [currentWidth, setCurrentWidth] = useState(14);
  const ctx = useRef(canvas?.current?.getContext("2d"));
  const MODEL_URL = "./onnx_model.onnx";
  const session = new InferenceSession();

  const runModel = async () => {
    try {
      // if (!modelLoaded) {
      await session.loadModel(MODEL_URL);
      setModelLoaded(true);
      console.log("model loaded");
      // }
    } catch (e) {
      console.warn(e);
    }
  };
  async function updatePredictions() {
    // /pds for the canvas data.
    const imgData = ctx.current.getImageData(
      0,
      0,
      canvas.current.width,
      canvas.current.height
    );
    const inputs = new Tensor(new Float32Array(imgData.data), "float32");
    const start = new Date();
    const outputMap = await session.run([inputs]);
    const outputTensor = outputMap.values().next().value;
    console.log("ran model");
    const end = new Date();
    const inferenceTime = end.getTime() - start.getTime();
    const predictions = outputTensor.data;
    const maxValue = Math.max(...predictions);
    if (predictions) {
      setResults({
        output: predictions,
        sessionRunning: false,
        inferenceTime,
        maxValue,
      });
    }
  }
  const drawOnCanvas = useCallback((event) => {
    if (!ctx || !ctx.current) {
      return;
    }
    ctx.current.beginPath();
    ctx.current.moveTo(lastX.current, lastY.current);
    ctx.current.lineTo(event.offsetX, event.offsetY);
    ctx.current.stroke();
    updatePredictions();
    [lastX.current, lastY.current] = [event.offsetX, event.offsetY];
  }, []);
  const handleMouseDown = useCallback((e) => {
    isDrawing.current = true;
    [lastX.current, lastY.current] = [e.offsetX, e.offsetY];
  }, []);
  const stopDrawing = useCallback(() => {
    isDrawing.current = false;
  }, []);

  const handleClear = useCallback(() => {
    if (!ctx || !ctx.current || !canvas || !canvas.current) {
      return;
    }
    ctx.current.clearRect(0, 0, canvas.current.width, canvas.current.height);
  }, []);
  const drawNormal = useCallback(
    (e) => {
      if (!isDrawing.current || !ctx.current) return;

      drawOnCanvas(e);
    },
    [drawOnCanvas]
  );

  const init = useCallback(() => {
    ctx.current = canvas?.current?.getContext("2d");
    if (canvas && canvas.current && ctx && ctx.current) {
      canvas.current.addEventListener("mousedown", handleMouseDown);
      canvas.current.addEventListener("mousemove", drawNormal);
      canvas.current.addEventListener("mouseup", stopDrawing);
      canvas.current.addEventListener("mouseout", stopDrawing);

      canvas.current.width = 280;
      canvas.current.height = 280;
      // canvas.current.width = window.innerWidth * 0.4;
      // canvas.current.height = window.innerHeight * 0.4;

      ctx.current.strokeStyle = "#000";
      ctx.current.lineJoin = "round";
      ctx.current.lineCap = "round";
      ctx.current.lineWidth = 10;
    }
  }, [drawNormal, handleMouseDown, stopDrawing]);

  useEffect(() => {
    runModel();
    init();
  }, []);
  const width = currentWidth;
  const widthHalf = width ? width / 2 : 0;
  const cursor = `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="%23000000" opacity="0.8" height="${width}" viewBox="0 0 ${width} ${width}" width="${width}"><circle cx="${widthHalf}" cy="${widthHalf}" r="${widthHalf}" fill="%23000000" /></svg>') ${widthHalf} ${widthHalf}, auto`;
  const { output, inferenceTime, maxValue } = results;
  return (
    <div className="flex flex-col md:flex-row md:space-x-4 h-screen w-screen justify-center items-center">
      <div className="flex flex-col space-y-3">
        <p className="uppercase font-bold text-purple-600"> Draw Here !</p>
        <canvas
          className="border-2 border-blue-400 shadow-md rounded"
          ref={canvas}
          style={{ cursor }}
        />
        <button
          className="bg-teal-400  hover:bg-teal-500 transition-all rounded-sm shadow focus:outline-none p-2 text-teal-100 font-medium m-4 focus:ring-1 focus:ring-offset-teal-800"
          onClick={handleClear}
        >
          Clear Canvas
        </button>
      </div>
      <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-1/2">
        {output.length == 0 && (
          <div className="animate-pulse space-y-2">
            {Array.from(new Array(10)).map(() => {
              return (
                <div className="flex space-x-4 justify-center items-center ">
                  <div className="rounded-full bg-blue-400 h-6 w-6"></div>
                  <div className="flex-1 space-y-4 py-1">
                    <div className="h-4 bg-blue-400 rounded"></div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        {output && (
          <div className=" space-y-2">
            {Array.from(output).map((val, index) => {
              const width = (val * 100).toFixed(2);
              return (
                <div className="flex space-x-4 justify-center items-center ">
                  <div className="flex flex-row rounded-full bg-blue-400 h-6 w-6 justify-center items-center">
                    <p className="text-white font-bold">{index}</p>
                  </div>
                  <div className="flex-1 space-y-4 py-1">
                    <div className="flex h-5 bg-blue-300 rounded justify-start items-center">
                      <div
                        className={`${
                          val == maxValue ? "bg-blue-800" : "bg-blue-300"
                        } rounded h-5 justify-center items-center `}
                        style={{
                          width: width + "%",
                        }}
                      >
                        <p className="px-2 text-xs text-white"> {width}%</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
