import Subscriber from './subscriber'

class Publisher {
    private subscribers: Subscriber[]

    constructor() {
        this.subscribers = []
    }

    public subscribe(subscriber: Subscriber): boolean {
        let previousLength: number = this.subscribers.length
        if (this.subscribers.push(subscriber) === previousLength + 1)
            return true
        return false
    }

    public unsubscribe(subscriber: Subscriber): Boolean {
        let subscriberIndex: number = this.subscribers.indexOf(subscriber)
        if (subscriberIndex > -1) {
            this.subscribers.splice(subscriberIndex, 1)
            return true
        }
        return false
    }

    public notify(context: string) {
        for (let subscriber of this.subscribers) {
            subscriber.update(context)
        }
    }
}

export default Publisher
