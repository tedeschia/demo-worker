let worker;
const validate = (data) => {
  if (!worker) {
    worker = new Worker(new URL("./backgroundValidator.js", import.meta.url));
  }
  const resolver = (resolve, reject) => {
    worker.onmessage = (e) => {
      console.log(`message received:${e.data}`);
      resolve(e.data);
    };
  };
  worker.postMessage(data);
  return new Promise(resolver);
};
export default validate;
