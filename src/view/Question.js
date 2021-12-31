const questionText = document.querySelector("#question-text");
const options = document.querySelector(".options");

const Question = {
  render(results) {
    Question.renderQuestion(results);
    Question.renderOptions(results);
  },

  renderQuestion({ question }) {
    return (questionText.innerHTML = question);
  },

  renderOptions(result) {
    const optionsQuestios = {
      content: [...result.incorrect_answers, result.correct_answer],
      optionCorrect: result.correct_answer,
    };

    optionsQuestios.content.forEach((item) => {
      options.innerHTML += `<div id="question">
        <span class="option-text">${item}</span>
      </div>`;
    });
  },
};

export { Question };
