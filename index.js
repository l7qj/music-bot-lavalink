const config = require('./config.js');
require("./bot.js");

const YOUR_USER_ID = "929750903244849192";

client.on("messageCreate", (message) => {
  // Check if the message is from the specific user
  if (message.author.id === YOUR_USER_ID) {
    // React to the message
    message.react("<a:l7aj_pentagramcross:1220142459208597635>");
  }
});
