import { Emitter } from '../lib/Emitter.js';
import { ViewTimer } from '../view/Timer.js';

const Timer = {
  currentTime: 0,
  time: 0.1 * 60,
  interval: null,

  timeToMinutes: time => Math.floor(time / 60),
  timeToSeconds: time => Math.floor(time % 60),

  formatTime: time => String(time).padStart(2, '0'),

  start(time) {
    Timer.currentTime = time * 60 || Timer.time;
    Timer.interval = setInterval(Timer.coutdown, 1000);
  },

  coutdown() {
    Timer.currentTime -= 1;

    if (Timer.currentTime === 0) {
      clearInterval(Timer.interval);
      Emitter.emit('time-end');
    }

    const minutes = Timer.formatTime(Timer.timeToMinutes(Timer.currentTime));
    const seconds = Timer.formatTime(Timer.timeToSeconds(Timer.currentTime));

    ViewTimer.render(minutes, seconds);
  }
}

export { Timer };