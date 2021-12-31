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

    optionsQuestios.content.forEach((item, index) => {
      let span = document.createElement('span');
      const container = document.createElement('div');

      span.innerText = item;
      span.classList = `option-text option-${index}`

      container.id = 'question'
      container.classList = `question-${index}`
      container.appendChild(span);
      options.append(container);

      document.querySelector(`.question-${index}`).addEventListener('click', () => {
        console.log(document.querySelector(`.option-${index}`).textContent)
      })
    });
  },
};

export { Question };
