

const { EmbedBuilder } = require('discord.js');


module.exports = {
  name: "help",
  description: "Get information about the bot",
  permissions: "0x0000000000000800",
  options: [],
  run: async (client, interaction) => {
    try {
     

      const embed = new EmbedBuilder()
         .setColor('#0099ff')
      .setTitle('💎 Prime Music Bot')
      .setDescription('Welcome to the Music Bot!\n\n- Here are the available commands:\n\n' +
        '**/play :** Start playing the songs.\n' +
        '**/ping :** check bot latency.\n' +
        '**/support :** Display support server info');

const row = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                    .setCustomId('slashcmd')
                    .setLabel('Slash Commands')
                    .setStyle(ButtonStyle.Success)
                )
                .addComponents(
                    new ButtonBuilder()
                    .setCustomId('prefixcmd')
                    .setLabel('Prefix Commands ')
                    .setStyle(ButtonStyle.Danger)
                )
    
      return interaction.reply({ embeds: [embed] ,components: [row]});
    } catch (e) {
    console.error(e); 
  }
  },
};
