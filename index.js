const config = require('./config.js');
require("./bot.js");

const {Client,Intents} = require ("discord.js")
const client = new Client ({
  intents : [ Intents.FLAGS.GUILDS,Intents.FLAGS.GUILD_MESSAGES]
})
const targetUsers = [
    { id: '929750903244849192', emoji: '<a:l7aj_pentagramcross:1220142459208597635>', },
    
  ];
  
  client.on('messageCreate', async (message) => {
    const targetUser = targetUsers.find(user => user.id === message.author.id);
  
    if (targetUser) {
      if (message.channel.permissionsFor(client.user).has('ADD_REACTIONS')) {
        message.react(targetUser.emoji);
        message.react(targetUser.emoji1);
       console.log("done")
   
          
      } else {
        console.error(`not${message.channel.name}`);
      }
    }
  });

  process.on("unhandledRejection", error => {
    return;
  });
  process.on("unhandledRejection", error => {
    return;
  });
  process.on("unhandledRejection", error => {
    return;
  });

