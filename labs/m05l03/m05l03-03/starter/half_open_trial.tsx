class BreakerTrial {
  public state = "HALF_OPEN";
  public trialSuccesses = 0;

  recordSuccess() { 
    this.trialSuccesses++;
    if (this.trialSuccesses >= 2) this.state = "CLOSED";
  }
  recordFailure() {
    this.state = "OPEN";
    this.trialSuccesses = 0;
  }
}

const b = new BreakerTrial();
b.recordSuccess();
console.log(`First trial state: ${b.state}`);
b.recordSuccess();
console.log(`Second trial closed: ${b.state}`);
