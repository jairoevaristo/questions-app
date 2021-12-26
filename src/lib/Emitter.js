const Emitter = {
  events: {},

  on(event, cb) {
    Emitter.events[event] = Emitter.events[event] || [];
    Emitter.events[event].push(cb); 
  },

  emit(event, ...rest) {
    if (event in Emitter.events === false) {
      return;
    }

    Emitter.events[event].forEach(callback => {
      callback(...rest);
    });
  }
}

export { Emitter };