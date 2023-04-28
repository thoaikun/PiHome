import { io, Socket } from "socket.io-client";
import Subscriber from "../../utils/subscriber";
import { FireModel, NotificationModel } from "../model/notification.model";

class FireController implements Subscriber {
  private socket: Socket;
  private name: String = "fireController";

  constructor() {
    this.socket = io("http://localhost:3000");

    this.socket.on("connect", () => {
      this.socket.emit("join controller room", this.name);
    });
  }

  public update(context): void {
    this.socket.emit("transmission", context);

    NotificationModel.deleteMany({ type: "Fire" })
      .then(() => {
        let model = new FireModel({
          status: context.data.status,
        });
        model.save().then(() => console.log("database is updated")); // Success
      })
      .catch(function (error) {
        console.log(error); // Failure
      });
  }

  public getSocket(): Socket {
    return this.socket;
  }
}

export default FireController;
