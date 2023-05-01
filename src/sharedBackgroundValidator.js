// eslint-disable-next-line no-undef
onconnect = (e) => {
  const port = e.ports[0];
  port.onmessage = function (e) {
    //no funciona console.log
    // console.log("Worker: Message received from main script");
    let a = 0;
    for (let i = 0; i < 1000000000; i++) {
      a++;
    }
    port.postMessage(e.data);
  };
};
