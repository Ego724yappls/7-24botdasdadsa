const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {

message.channel.send(new Discord.MessageEmbed().setTitle('Lilu Mute Sistem').setDescription(`\`${client.ayarlar.prefix}ses-mute @Etiket Zaman\`
**Mute atarsınız (Seste Mikrofonunu Açamaz Yani)**

\`${client.ayarlar.prefix}ses-muteyetki-role [@RolEtiket]\`
**Ses mute atacak rolü ayarlar**

\`${client.ayarlar.prefix}unsesmute [@Kişi] \`
**Ses Muteyi Açar.

<:gunes2:791806095071903755> NOT: Sistemi Sıfırlamak İçin; Botun Rolünü En Üstte Tutun.

\`${client.ayarlar.prefix}ses-muteyetki-sil\`
**Rolü Sıfırlar**

<:suticiom:791806095211233280> Mute Sistem Nedir?
Ses Mute Atar Örnek Kullanım : s+mute @Bekra 5m Deneme.`)
.setImage('https://api.creavite.co/out/4c6d451a-3d93-4a1b-b52f-3073e5373a46_standard.gif').setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png'));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'mute-sistem'
};