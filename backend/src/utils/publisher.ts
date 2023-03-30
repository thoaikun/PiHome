import Subscriber from './subscriber'

class Publisher {
    private subscribers: { [field: string]: Subscriber }

    constructor() {
        this.subscribers = {}
    }

    public subscribe(subscriber: Subscriber, name: string): boolean {
        // let previousLength: number = this.subscribers.length
        // if (this.subscribers.push(subscriber) === previousLength + 1)
        //     return true
        // return false
        this.subscribers[name] = subscriber
        return true
    }

    public unsubscribe(subscriber: Subscriber): Boolean {
        // let subscriberIndex: number = this.subscribers.indexOf(subscriber)
        // if (subscriberIndex > -1) {
        //     this.subscribers.splice(subscriberIndex, 1)
        //     return true
        // }
        return false
    }

    public notify(context: string) {
        // for (let subscriber of this.subscribers) {
        //     subscriber.update(context)
        // }
        let data = JSON.parse(context)
        this.subscribers[data.from].update(context)
    }
}

export default Publisher
