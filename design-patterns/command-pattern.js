/* 
This pattern is useful to decouple objects that execute certain tasks from the object that calls the method.
*/

//Example

class OrderManager {
  constructor() {
    this.orders = [];
  }

  placeOrder(order, id) {
    this.orders.push(id);
    return `You have succesfully ordered ${order}. ID: ${id}`;
  }

  trackOrder(id) {
    return `Your order n° ${id} will arrive in X minutes`;
  }

  cancelOrder(id) {
    this.orders = this.orders.filter((order) => order.id !== id);
    return `You have succesfully canceled the order. ID: ${id}`;
  }
}

const manager = new OrderManager();

manager.placeOrder("Pie", "1");
manager.trackOrder("1");
manager.cancelOrder("1");

/* 
Order manager can access all the methods, but what if we need to rename a method. We should be changing it all across our app.

Could be better to have a method that can execute any command given
*/

class OrderManagerWithCommandPattern {
  constructor() {
    this.orders = [];
  }

  execute(command, ...args) {
    return command.execute(this.orders, ...args);
  }
}
/* 
Now we need to create functions for the commands
*/

class Comand {
  constructor(execute) {
    this.execute = execute;
  }
}

function placeOrderCommand(order, id) {
  return new Command((orders) => {
    orders.push(id);
    return `You have succesfully ordered ${order}. ID: ${id}`;
  });
}

function cancelOrderCommand(id) {
  return new Command((orders) => {
    let orders = orders.filter((order) => order.id !== id);
    return `You have succesfully canceled the order. ID: ${id}`;
  });
}

function trackOrderCOmmand(id) {
  return new Command(() => `Your order n° ${id} will arrive in X minutes`);
}

/* Now we can call the commands through the execute method */

const managerWithCommandPattern = new OrderManagerWithCommandPattern();

managerWithCommandPattern.execute(new placeOrderCommand("Pai", 1));
managerWithCommandPattern.execute(new trackOrderCOmmand(1));
managerWithCommandPattern.execute(new cancelOrderCommand(1));
