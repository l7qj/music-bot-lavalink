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
    );
  }
});

client.on("message", (msg) => {
  if (msg.content === "nod ya w9") {
    msg.reply(
      "https://media.discordapp.net/attachments/1172202122486480956/1214724253291905104/IMG_8346.gif?ex=66284b9e&is=6615d69e&hm=6f10e4d0fe31478cccd31617fef9a2397b0a742b8ac7ed7af0afcc38b89ef9df&="
    );
  }
});


keepAlive();
client.login("");
