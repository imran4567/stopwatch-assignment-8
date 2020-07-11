class State {
  constructor(startTimestamp, difference, suspended) {
    this.startTimestamp = startTimestamp;
    this.difference = difference;
    this.suspended = suspended;
  }

  static ready() {
    return new State(null, 0, 0);
  }
}

class Stopwatch {
  constructor(state) {
    this.state = state;
    this.requestAnimationId = null;
    this.handleClickStart = this.handleClickStart.bind(this);
    document
      .getElementById("start")
      .addEventListener("click", this.handleClickStart);
    this.handleClickStop = this.handleClickStop.bind(this);
    document
      .getElementById("stop")
      .addEventListener("click", this.handleClickStop);
    this.handleClickReset = this.handleClickReset.bind(this);
    document
