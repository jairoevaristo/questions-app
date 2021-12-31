const progressBar = document.querySelector('.progress-bar');

const Progress = {
  totalQuestions: 10,
  nextQuestion(currentQuestio) {
    const porcent = Math.floor(currentQuestio / Progress.totalQuestions * 100);
    progressBar.style.with = `${porcent}%`;
  }
}

export { Progress };