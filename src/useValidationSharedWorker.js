import { useRef, useState, useEffect } from "react";
const useValidationSharedWorker = () => {
  var [validationResult, setValidationResult] = useState();

  const worker = useRef();

  const handleMessage = (e) => {
    console.log(`message received:${e.data}`);
    setValidationResult(e.data);
  };
  useEffect(() => {
    if (!worker.current) {
      worker.current = new SharedWorker(
        new URL("./sharedBackgroundValidator.js", import.meta.url)
      );
      worker.current.port.start();
    }
    worker.current.port.addEventListener("message", handleMessage);
    return () => {
      worker.current.port.removeEventListener("message", handleMessage);
    };
  });
  const validate = (data) => {
    worker.current.port.postMessage(data);
  };
  return { validate, validationResult };
};
export default useValidationSharedWorker;
