import Subscriber from "./subscriber";

class Publisher {
  private subscribers: { [field: string]: Subscriber };

  constructor() {
    this.subscribers = {};
  }

  public subscribe(subscriber: Subscriber, name: string): boolean {
    this.subscribers[name] = subscriber;
    return true;
  }

  public unsubscribe(subscriber: Subscriber): Boolean {
    return false;
  }

  public notify(context: string) {
    const data = JSON.parse(context);
    if (data.to === "client") {
      this.subscribers[data.from].update(data);
    }
  }
}

export default Publisher;
