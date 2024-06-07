
const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: "support",
  description: "Get support server link",
  permissions: "0x0000000000000800",
  options: [],
  run: async (client, interaction) => {
    try {

      const supportServerLink = "https://discord.com/app";
      const githubLink = "https://github.com";
      const replitLink = "https://replit.com";
      const youtubeLink = "https://www.youtube.com";
        const embed = new EmbedBuilder()
            .setColor('#b300ff')
            .setAuthor({
              name: 'Support Server',
              iconURL: 'https://media.discordapp.net/attachments/1220626906605555712/1220889757408559144/a_2b468dc6a0489c4ee8db65b4293dbd32.gif', 
              url: 'https://discord.com/app'
          })
            .setDescription(`➡️ **Join our Discord server for support and updates:**\n- Discord - ${supportServerLink}\n\n➡️ **Follow us on:**\n- GitHub - ${githubLink}\n- Replit - ${replitLink}\n- YouTube - ${youtubeLink}`)
            .setImage('https://tenor.com/view/dnce-gif-14762310134329663850')
            .setTimestamp();

      return interaction.reply({ embeds: [embed] });
    } catch (e) {
    console.error(e); 
  }
  },
};

