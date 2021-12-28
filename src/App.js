import { Emitter } from "./lib/Emitter.js";
import { Timer } from "./time/index.js";

const App = {
  init() {
    Timer.start(0.5);
    Emitter.on("time-end", Timer.start);
  },
};

export { App };
