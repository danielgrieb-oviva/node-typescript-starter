import { throttle } from "lodash";

let handleChange = () => {
  console.log("function is called");
};

handleChange = throttle(handleChange, 10000);

setInterval(() => {
  handleChange();
}, 100);
