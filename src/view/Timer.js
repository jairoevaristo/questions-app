const time = document.querySelector('.time');

const ViewTimer = {
  render(minutes, seconds) {
    return time.innerHTML = `<h1 class="time-number">${minutes}:${seconds}</h1>`
  }
}

export { ViewTimer };