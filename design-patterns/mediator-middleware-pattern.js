/* 

Mediator / Middleware Pattern

Makes possible for components to interact with each other through a central control point: The middleware.

Instead of talking directly between them, the middleware receives requests and sends them forward.

In JS this is not more than an object literal or a fn

Example:

Think it as the relationship between an airtraffic controller and pilots.

The pilots dont talk to each other directly, instead talk to the air traffic controller.

This pattern is useful to deal with multidirectional data between objects

*/

/* 

Code example: ChatRoom

Users don't talk to users directly, they send the msg and the room show it to the other users.

*/

class User {
  constructor(name, chatroom) {
    this.name = name;
    this.chatroom = chatroom;
  }

  getName() {
    return this.name;
  }

  sendMessage(message) {
    this.chatroom.logMessage(this, message);
  }
}

class ChatRoom {
  logMessage(user, message) {
    const time = new Date().toLocaleString();
    const sender = user.getName();

    console.log(`${time} [${sender}]: ${message}`);
  }
}

/* 

Now we can create users connected to the chat room. And they can send messages to it.

*/

const chatRoom = new ChatRoom();

const user1 = new User("Nono", chatRoom);
const user2 = new User("Sisi", chatRoom);

user1.sendMessage("Helloa <3");
user2.sendMessage("Same 4 U =)");
