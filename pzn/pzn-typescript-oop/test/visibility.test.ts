describe("visibility", () => {
  class Counter {
    protected count: number = 0; // Kalau protected sama kaya private cuman dia bisa dibaca oleh class turunannya

    public increment(): void {
      this.count++;
    }

    public decrement(): void {
      this.count--;
    }

    public getCount(): number {
      return this.count;
    }
  }

  class DoubleCounter extends Counter {
    public increment(): void {
        this.count += 2;
    }
  }

  it("should be private", () => {
    const counter = new Counter();
    counter.increment();
    counter.increment();
    counter.increment();
    console.log(counter.getCount());

    counter.decrement();
    console.log(counter.getCount());
  });

  it("should be protected", () => {
    const counter = new DoubleCounter();
    counter.increment();
    counter.increment();
    counter.increment();
    console.log(counter.getCount());

    counter.decrement();
    console.log(counter.getCount());
  });
});
