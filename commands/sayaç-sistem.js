const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {

message.channel.send(new Discord.MessageEmbed().setTitle('Lilu Giriş & Sayaç Sistem').setDescription(`\`${client.ayarlar.prefix}sayaç-ayarla [İstediğiniz Sayı]\` 
**Sunucun için toplam bir rakam tut**

\`${client.ayarlar.prefix}sayaç-kanal-ayarla [#KanalEtiket]\` 
**Sayaç Kanalını Ayarlar**

<:sayac:791801114944077855> **NOT: Sistemi Sıfırlamak İçin kanalı siliniz; Botun Rolünü En Üstte Tutun.**

<:suticiom:791806095211233280> Sayaç Sistem Nedir?
**Sayaç Sistem Sunucuda kaç kişi olduğunu log kanalına gönderir yani Giriş Çıkış**`)
.setImage('https://api.creavite.co/out/4c6d451a-3d93-4a1b-b52f-3073e5373a46_standard.gif').setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png'));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'sayaç-sistem'
};