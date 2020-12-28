const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {

message.channel.send(new Discord.MessageEmbed()
.setTitle('Lilu Kısıtlı Koruma')
.addField('<:selam:791799588087529522> Selam karşılama için', `\`\`\`${client.ayarlar.prefix}selam aç & ${client.ayarlar.prefix}selam kapat\`\`\``)
.addField('<:kufur:791799587978477578> Küfür Kısıtlamak', `\`\`\`${client.ayarlar.prefix}küfür kısıt & ${client.ayarlar.prefix}küfür kapat\`\`\``)
.addField('<:reklam:791799588272472064> Reklam Kısıtlamak', `\`\`\`${client.ayarlar.prefix}reklam kısıt & ${client.ayarlar.prefix}reklam kapat\`\`\``)
.addField('<:caps:791799587669147689> Büyük Harf Kısıtlamak', `\`\`\`${client.ayarlar.prefix}caps kısıt & ${client.ayarlar.prefix}caps kapat\`\`\``)
.setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png'));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'kısıtlamalar'
};