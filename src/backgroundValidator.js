onmessage = function (e) {
  console.log("Worker: Message received from main script");
  let a = 0;
  for (let i = 0; i < 1000000000; i++) {
    a++;
  }
  postMessage(e.data);
};
