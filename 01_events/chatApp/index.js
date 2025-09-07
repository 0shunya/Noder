const ChatRoom = require("./chatRoom")

const chat = new ChatRoom();

chat.on("join", (user) => {
    console.log(`${user} has joined the chat room`);
})

chat.on("message", (user, message) => {
    // console.log(`user:  has joined the chat room`);
    console.log(` ${user}: ${message}`);
    
})

chat.on("leave", (user) => {
    console.log(`${user} has left the chat room`);
})

chat.join("Alice");
chat.join("Bob");

chat.sendMessage("Alice", "Hi ALice here nice to meet you");
chat.sendMessage("Bob", "Hi Bob here nice to meet you");


chat.leave("Bob");
chat.sendMessage("Bob", "Hi Bob here bye");


