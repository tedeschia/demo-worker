import { useRef, useState, useEffect } from "react";
const useValidationDedicatedWorker = () => {
  var [validationResult, setValidationResult] = useState();

  const worker = useRef();

  const handleMessage = (e) => {
    console.log(`message received:${e.data}`);
    setValidationResult(e.data);
  };
  useEffect(() => {
    if (!worker.current) {
      worker.current = new Worker(
        new URL("./backgroundValidator.js", import.meta.url)
      );
    }
    worker.current.addEventListener("message", handleMessage);
    return () => {
      worker.current.removeEventListener("message", handleMessage);
    };
  });
  const validate = (data) => {
    worker.current.postMessage(data);
  };
  return { validate, validationResult };
};
export default useValidationDedicatedWorker;
