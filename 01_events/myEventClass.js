const EventEmitter = require('node:events');

class Chat extends EventEmitter {

    sendMessage (msg) {
        console.log(`Message Sent: ${msg}`);
         this.emit("MessageReceived", msg);
    }

}

const chat = new Chat("Shlok");
chat.on("MessageReceived", (msg) => {
    console.log(`New Message: ${msg}`);
})

chat.sendMessage("Hello Shlok")