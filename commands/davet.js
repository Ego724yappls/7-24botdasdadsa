const Discord = require('discord.js');

exports.run = async (client, message, args) => {

message.channel.send(new Discord.MessageEmbed()
.setDescription(`<a:kalp2:791818406814285856> Lilu'yu Davet Et :3 <a:kalp2:791818406814285856>
**İzinli Davet İçin (Önerilen):** [Buraya tıkla](https://discord.com/oauth2/authorize?client_id=791794775501045813&scope=bot&permissions=335744061)
**İzinsiz Davet İçin:** [Buraya tıkla](https://discord.com/oauth2/authorize?client_id=791794775501045813&scope=bot&permissions=0)
**Destek Sunucusu:** [Buraya tıkla](https://discord.gg/wdt54Rm26u)
`));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'davet'
};
