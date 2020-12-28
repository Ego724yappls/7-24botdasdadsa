const Discord = require("discord.js");
const data = require("quick.db");

exports.run = async (client, message, args) => {
  message.delete();
  message.channel
    .createWebhook(message.author.username, {
      avatar: message.author.avatarURL()
        ? message.author.avatarURL({ dynamic: true })
        : "https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png"
    })
    .then(async web => {
      const hook = new Discord.WebhookClient(web.id, web.token);
      const attachment = new Discord.MessageAttachment(
        "https://media1.tenor.com/images/e223e59708750f7835e1284f91d13ba9/tenor.gif?itemid=15657985"
      );
      hook
        .send(
          `

<a:eglence_lilu:765656066306080809> \`${message.guild.name}\ **Discord Sunucusu Kuralları**

1. **Ailevi küfürler yasaktır.**
2. **Discord sunucu reklamları Özel mesaj, Durum vb. yasaktır.**
3. **+18 Cinsel içerik, durumda, mesajda ve profil resminde yasaktır**
4. **Siyasi olan her şey Durum'da, profil resminde, mesajda yasaktır.**
5. **Yetkililerin küfür etmesi tamamen yasaktır. (Mod, Admin)**
6. **Sunucuda kavga, 3.Uyarı'da ban sebebidir.**
7. **Sunucuda, kız-erkek; sevgili arıyorum, sevgili bulunur vb. her türlü cümle 2.uyarı ban sebebidir.**
8. **Admin, moderatörlerin "bağış veya satış" yapması yasaktır.**
9. **Yetkililer, kafasına göre yetkileriyle kullanıcılara zorbalık edemez, edilirse yetkisi düşürülür.**
10.**Erkek-Kız olmak üzere, karşı cinsiyete tacizde bulunamazsınız!**
11.**Kanalları amacı dışında kullanmak yasaktır.**
12.**Kanallarda spam-flood yapmak yasaktır.**

<a:lilu_kilit:767676423619870750> __Sunucuya katılan herkes kuralları okumuş, kabul etmiş sayılır.__

`,
          attachment
        )
        .then(() => hook.delete());
    });
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "kurallar"
};