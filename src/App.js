import { Emitter } from "./lib/Emitter.js";
import { Timer } from "./time/index.js";
import { Question } from "./view/Question.js";

const numberQuestions = document.querySelector('.questions-number');

const App = {
  init() {
    Timer.start(0.5);
    Emitter.on("time-end", Timer.start);
  },

  async startQuestions() {
    const response = await fetch(
      "https://opentdb.com/api.php?amount=10&type=multiple"
    );
    const questions = await response.json();
    Question.render(questions.results[0]);

    numberQuestions.textContent = `1/${questions.results.length}`;
  },
};

export { App };
