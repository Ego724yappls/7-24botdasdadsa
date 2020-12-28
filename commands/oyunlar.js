const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
  }
let images = ['https://api.creavite.co/out/4c6d451a-3d93-4a1b-b52f-3073e5373a46_standard.gif', 'https://images-ext-1.discordapp.net/external/dciSf1lRNZ3YlrK7_Ymsstv_8kRPmayJeLVkMBEDKFY/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/765169182437277696/5813c9d39d6991bc589821a152042958.png?width=475&height=475', 'https://images-ext-1.discordapp.net/external/dciSf1lRNZ3YlrK7_Ymsstv_8kRPmayJeLVkMBEDKFY/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/765169182437277696/5813c9d39d6991bc589821a152042958.png?width=475&height=475']
message.channel.send(new Discord.MessageEmbed().setAuthor(client.user.username+' oyunlar', message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png').setThumbnail(images.random())
.setColor('#cbfd54').setDescription(`1️⃣ \`${client.ayarlar.prefix}kaçcm\`

2️⃣ \`${client.ayarlar.prefix}aşk\`

3️⃣ \`${client.ayarlar.prefix}fal\`

4️⃣ \`${client.ayarlar.prefix}öp\`

5️⃣ \`${client.ayarlar.prefix}sarıl\`

6️⃣ \`${client.ayarlar.prefix}tokat\`

7️⃣ \`${client.ayarlar.prefix}günlük-burç-yorumu\`

8️⃣ \`${client.ayarlar.prefix}sor\`
1,3 Saniye Geç cevap verir.

9️⃣ \`${client.ayarlar.prefix}deprembilgi\`
Yanlış Anlamayın oyun değil Koyacak yer bulamadım.

`).addField('❕ Yavaş kullanım!', '**Oyun komutlarının bazıların da yavaş kullanım vardır.**'));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'oyunlar'
};