
const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: "support",
  description: "Get support server link",
  permissions: "0x0000000000000800",
  options: [],
  run: async (client, interaction) => {
    try {

      const supportServerLink = "https://discord.gg/56meD6PqaW";
      const instaLink = "https://www.instagram.com/1mine_0010/";
        const embed = new EmbedBuilder()
            .setColor('#b300ff')
            .setAuthor({
              name: 'Support Server',
              iconURL: '', 
              url: 'https://discord.gg/56meD6PqaW'
          })
            .setDescription(`<a:_flesh:1147990803449389056> **Join our Discord server for support and updates:**\n- Discord - ${supportServerLink}\n\n<a:_flesh:1147990803449389056> **Follow me on:**\n- GitHub - ${instaLink}\n`)
            .setImage('')
            .setTimestamp();

      return interaction.reply({ embeds: [embed] });
    } catch (e) {
    console.error(e); 
  }
  },
};

