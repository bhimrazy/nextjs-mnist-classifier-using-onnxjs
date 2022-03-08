import { Tensor, InferenceSession } from "onnxjs";

export async function loadModel() {
  const session = new InferenceSession();
  const url = "./onnx_model.onnx";
  await session.loadModel(url);
}

export async function runModel({ imgData }) {
  const start = new Date();
  try {
    const input = new onnx.Tensor(new Float32Array(imgData.data), "float32");

    const outputMap = await sess.run([input]);
    const outputTensor = outputMap.values().next().value;
    const predictions = outputTensor.data;
    const maxPrediction = Math.max(...predictions);

    const end = new Date();
    const inferenceTime = end.getTime() - start.getTime();
    return [maxPrediction, inferenceTime];
  } catch (e) {
    console.error(e);
    throw new Error();
  }
}
