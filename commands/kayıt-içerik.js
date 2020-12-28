const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
  Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
  }

let images = ['', ];
message.channel.send(new Discord.MessageEmbed().setColor('#000001').setDescription(`**Lilu Kayıt İçeriğine Hoş Geldin Dostum <:misir:791804621521158164>
${client.user} Kullanırken \`@Lilu\` rolünü en yukarıda tutunuz.**
**
<:kayit33:791799588783915038> \`${client.ayarlar.prefix}sunucu-kayıt\`
İsimli ve etiket ile (Erkek - Kadın) kayıt sistem

<:ups2:791814241975140352> \`${client.ayarlar.prefix}mesaj-tag\`
Tag ayarlamak için kullanımı basit sistem

<:giris:791814242164277268> \`${client.ayarlar.prefix}hoşgeldinkanal\`
Kayıt Sistemin bir parçası kayıt mesaj

<:polis:791807842587246614> \`${client.ayarlar.prefix}koruma\`
Sunucunuzu Lilu ile koruyun^^

<:otorole:791813120502792193> \`${client.ayarlar.prefix}otorol-sistem\`
Sunucuya girene otomatik rol verir.

<:isim:791813120485752873>  \`${client.ayarlar.prefix}isim\`
İsmin başına birşey ekletmek için **s+isim-tag** kullanabilirsin. Etiketlediğiniz **üyenin ismini** değişirsiniz

<:say:791813120431620136> ** \`${client.ayarlar.prefix}say\`**
Sunucu içerisinde ki **toplam üye**, **taglı üye**, **aktif üye**, **erkek üye**, **kadın üye** ve **Nitro boost** seviyenizi gösterir. **${client.ayarlar.prefix}mesaj-tag** ve **${client.ayarlar.prefix}sunucu-kayıt** sistemlerini aktif edin

<:yumruk:791814241824931880> ** \`${client.ayarlar.prefix}aktiflik aç\` & \`${client.ayarlar.prefix}aktiflik kapat\`**
Aktiflik Sistem **(s+profile & s+profile [@etiket]**) **- ne kadar kayıt etmiş bilgilerini görebilirsin

**<:misir:791804621521158164> Lilu** 
`).setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png') .setImage(images.random()))

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['kayıt-içerikleri','record-contents'],
  permLevel: 0
}

exports.help = {
  name: 'kayıt-içerik'
};