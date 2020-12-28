const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
  Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
  }
let images = ['https://api.creavite.co/out/4c6d451a-3d93-4a1b-b52f-3073e5373a46_standard.gif', 'https://api.creavite.co/out/4c6d451a-3d93-4a1b-b52f-3073e5373a46_standard.gif'];
message.channel.send(new Discord.MessageEmbed().setColor('#000001').setDescription(`**Lilu Ana Menüsüne Hoş Geldin Dostum 
${client.user} Kullanırken \`@Lilu\` rolünü En Üstte Tutun**
**
<:kayit:791796985056722977> \`${client.ayarlar.prefix}kayıt-içerik\`

> Kayıt Mesaj, Koruma Sistemi
> Say, Aktiflik, Mesaj tag, Otorol Sistem 


<:gunes:791796986621198376> \`${client.ayarlar.prefix}yardım2\` Menüsün de neler var?

> Mute, Karantina, Sayaç \`&\` Oto 
> rol, Kısıtlamalar

<:dunya:791796985204178944> \`${client.ayarlar.prefix}yardım3\` Menüsün de neler var?

> Oto isim
> Sunucu tema, Kanal arındır \`&\` Rol arındır

<:cicek:791796986545438772> \`${client.ayarlar.prefix}yardım4\` Menüsün de neler var?
> İçinde farklı komutlar vardır.
> Oyunlar v.b

<:ccek2:791797161552510987> \`${client.ayarlar.prefix}yardım5\` Menüsün de neler var?
> Diğer 2 komutları vardır.
> Yavaş mod v.b

<:donate:791798472423637012> Bağış :
İninal : 4001640122745
Prefixlerim : s+ | w! | .
**Sunucuna Eklemek İstiyosan:** [Buraya tıkla](https://discord.com/oauth2/authorize?client_id=791794775501045813&scope=bot&permissions=470363391)
**`).setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : '').setImage(images.random()))

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['y', 'help','h','komutlar'],
  permLevel: 0
}

exports.help = {
  name: 'yardım'
};