const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {

message.channel.send(new Discord.MessageEmbed().setColor('#000001').setDescription(`<:kayit33:791799588783915038> ${client.user} **Kayıt Sistem
__Tek komut ile kayıt ve isim yapabilirsin.__**

> <:tik:791804621181419532>\`${client.ayarlar.prefix}erkek-role [@rolEtiket]\`
> <:tik:791804621181419532>\`${client.ayarlar.prefix}kadın-role [@rolEtiket]\`
> <:tik:791804621181419532>\`${client.ayarlar.prefix}yetkili-role [@rolEtiket]\`
> <:tik:791804621181419532>\`${client.ayarlar.prefix}kayıtsız-role [@rolEtiket]\`

\`\`\`        [ Kapatma Komutları ]        \`\`\`
> <:sil:791801550376927293> **${client.ayarlar.prefix}erkek-sil**
> <:sil:791801550376927293> **${client.ayarlar.prefix}kadın-sil**
> <:sil:791801550376927293> **${client.ayarlar.prefix}yetkili-sil**
> <:sil:791801550376927293> **${client.ayarlar.prefix}kayıtsız-sil**

\`\`\`İsim başına tag koyması için
s+kayıt-tag 🚀
s+kayıt-tag-kapat\`\`\``).setImage('https://api.creavite.co/out/4c6d451a-3d93-4a1b-b52f-3073e5373a46_standard.gif')

.setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png'));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['kayıt','kayıt-sistem','kasyıt-sistemi'],
  permLevel: 0
}

exports.help = {
  name: 'sunucu-kayıt'
};