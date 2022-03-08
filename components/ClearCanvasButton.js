import React from "react";
import { useCanvas } from "./CanvasContext";

export const ClearCanvasButton = () => {
  const { clearCanvas } = useCanvas();

  return (
    <button onClick={clearCanvas} className="bg-teal-400 p-4 rounded-md">
      CLEAR
    </button>
  );
};
