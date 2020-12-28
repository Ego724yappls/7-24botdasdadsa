const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
  Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
  }
let images = ['https://media.tenor.co/videos/9197d618c26f70e364593904fefb93a6/mp4'];
message.channel.send(new Discord.MessageEmbed().setColor('#000001').setDescription(`**Yardım 2 Menüsüne Hoş Geldin Dostum **
\`\`\`${client.user.username} Kullanırken @Lilu rolünü en yukarıda tutunuz.\`\`\`

🔇 \`${client.ayarlar.prefix}mute-sistem\`
**Ses Mute Sistemini Açar Chat mute üzerinde çalışılıyor.**

👮‍♂️ \`${client.ayarlar.prefix}jail-sistem\`
**Etiketlediğiniz Üyeyi karantina altına al**

<:ban:791800722689097739> \`${client.ayarlar.prefix}ban\`
**Etiketlediğiniz üyeyi sunucunuzdan yasaklarsınız**

<:ban:791800722689097739> \`${client.ayarlar.prefix}unban ID\`
**Idsini Belirttiğiniz Kişinin Yasağını Açarsınız**

<:ban:791800722689097739> \`${client.ayarlar.prefix}bansorgula\`
**Banladığınız Bir Kişinin Sebepini Öğrenirsiniz.**

<:sayac:791801114944077855> \`${client.ayarlar.prefix}sayaç-sistem\`**
**Giriş Çıkış**, **Sayaç**

<:kisitlamalar:791801384432697376> **\`${client.ayarlar.prefix}kısıtlamalar\`**
**Selam, küfür, reklam, büyük harf, içerikler vardır**

<:sil:791801550376927293> **\`${client.ayarlar.prefix}purge\`
**Tamı Tamına 1000 Mesaj Silebilir.**

<:misir:791804621521158164> Lilu
`).setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : '').setImage(images.random()))

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['y2', 'help2','h2'],
  permLevel: 0
}

exports.help = {
  name: 'yardım2'
};