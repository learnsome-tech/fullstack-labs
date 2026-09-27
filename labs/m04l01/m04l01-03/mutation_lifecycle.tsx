interface LifecycleContext { snapshot: string[]; }

class OptimisticLifecycle {
  private state = ["item-1"];

  onMutate(newItem: string): LifecycleContext {
    const ctx = { snapshot: [...this.state] };
    this.state.push(newItem);
    return ctx;
  }
  onError(ctx: LifecycleContext) {
    this.state = ctx.snapshot;
  }
  getItems() { return [...this.state]; }
}

const ol = new OptimisticLifecycle();
const ctx = ol.onMutate("item-temp");
console.log(`During mutation: ${ol.getItems().join(",")}`);
ol.onError(ctx);
console.log(`After error rollback: ${ol.getItems().join(",")}`);
