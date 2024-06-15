const config = require('./config.js');
require("./bot.js");

const keepAlive = require("./server");
const dotenv = require("dotenv");
const { Client } = require("discord.js");
const client = new Client();


client.on("ready", () => {
  console.log(`Enabled 24/7 on ${client.user.username}`);
});

client.on("message", (msg) => {
  if (msg.content === "<@929750903244849192>") {
    msg.reply("Mok tagiha <:anna_ae:1149003904655298640> ");
  }
});

client.on("message", (msg) => {
  if (msg.content === "divlopor") {
    msg.reply(
      "https://cdn.discordapp.com/banners/488001475906371586/a_a1e2aedc7bda233065b6458e3e399dc9.gif?size=4096"
    
});
});

