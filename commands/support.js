
const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: "support",
  description: "Get support server link",
  permissions: "0x0000000000000800",
  options: [],
  run: async (client, interaction) => {
    try {

      const supportServerLink = "https://discord.gg/56meD6PqaW";
      const Github = "https://github.com";
        const embed = new EmbedBuilder()
            .setColor('#b300ff')
            .setAuthor({
              name: 'Support Server',
              iconURL: 'https://images-ext-1.discordapp.net/external/s6TP_2V_GgvX7IJakE32WrDHnNRQDw-H2cWw3V3be9Y/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/1137539581990936687/a_412d027faea5e6ff0bceb2be8fa36d7f.gif?width=300&height=300', 
              url: 'https://discord.gg/56meD6PqaW'
          })
            .setDescription(`<a:_flesh:1147990803449389056> **Join our Discord server for support and updates:**\n- Discord - ${supportServerLink}\n\n<a:_flesh:1147990803449389056> **Follow me on:**\n- GitHub - ${Github}\n`)
            .setImage('https://tenor.com/view/cool-fun-white-cat-dance-cool-and-fun-times-gif-16435335956387921912')
            .setTimestamp();

      return interaction.reply({ embeds: [embed] });
    } catch (e) {
    console.error(e); 
  }
  },
};

