import React, { useState, useEffect, useRef, useCallback } from "react";
import { Tensor, InferenceSession } from "onnxjs";

export default function Index() {
  const [modelLoaded, setModelLoaded] = useState(false);
  const lastX = useRef(0);
  const lastY = useRef(0);
  const canvas = useRef(null);
  const isDrawing = useRef(false);
  const [currentWidth, setCurrentWidth] = useState(14);
  const ctx = useRef(canvas?.current?.getContext("2d"));

  const drawOnCanvas = useCallback((event) => {
    if (!ctx || !ctx.current) {
      return;
    }
    ctx.current.beginPath();
    ctx.current.moveTo(lastX.current, lastY.current);
    ctx.current.lineTo(event.offsetX, event.offsetY);
    ctx.current.stroke();

    [lastX.current, lastY.current] = [event.offsetX, event.offsetY];
  }, []);
  const handleMouseDown = useCallback((e) => {
    isDrawing.current = true;
    [lastX.current, lastY.current] = [e.offsetX, e.offsetY];
  }, []);
  const stopDrawing = useCallback(() => {
    isDrawing.current = false;
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

      canvas.current.width = window.innerWidth * 0.4;
      canvas.current.height = window.innerHeight * 0.4;

      ctx.current.strokeStyle = "#000";
      ctx.current.lineJoin = "round";
      ctx.current.lineCap = "round";
      ctx.current.lineWidth = 10;
    }
  }, [drawNormal, handleMouseDown, stopDrawing]);

  const MODEL_URL = "./onnx_model.onnx";
  const session = new InferenceSession();

  const runModel = async () => {
    try {
      if (!modelLoaded) {
        await session.loadModel(MODEL_URL);
        setModelLoaded(true);
        console.log("model loaded");
      }
    } catch (e) {
      console.warn(e);
    }
  };
  useEffect(() => {
    init();
    runModel();
  }, []);
  const width = currentWidth;
  const widthHalf = width ? width / 2 : 0;
  const cursor = `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="%23000000" opacity="0.8" height="${width}" viewBox="0 0 ${width} ${width}" width="${width}"><circle cx="${widthHalf}" cy="${widthHalf}" r="${widthHalf}" fill="%23000000" /></svg>') ${widthHalf} ${widthHalf}, auto`;
  return (
    <div className="flex flex-col h-screen w-screen justify-center items-center">
      <canvas
        className="border-2 border-indigo-600 shadow-md"
        ref={canvas}
        style={{ cursor }}
      />
      {modelLoaded && <p>Model Loaded</p>}
    </div>
  );
}
