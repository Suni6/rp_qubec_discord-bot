const Discord = require("discord.js");
const Canvas = require("canvas");
const prefix = "!";
const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.GUILD_MEMBERS
    ]
});

var nbTicket = 0;

Client.on("ready", () => {
    /*
  var row = new Discord.MessageActionRow()
        .addComponents(new Discord.MessageButton()
            .setCustomId("open-ticket")
            .setLabel("Créer un ticket")
            .setStyle("PRIMARY")
        )
    const ticket = new Discord.MessageEmbed()
        .setAuthor("Rp Québec", "https://cdn.discordapp.com/attachments/997631043706306671/1003021842434498693/Logo_PNG_V.2.png")
        .setColor("#0055ff")
        .setTitle("**Besoin d'aide?:**")
        .addField("📃・Ticket", "Si tu as besoin d'aide créer un ticket !")
        .setTimestamp();
    Client.channels.cache.get("1003023346964897855").send({ embeds: [ticket], components: [row] })
*/
    console.log("Bot Québec est operationnel !");
});

Client.on("interactionCreate", interaction => {
    if (interaction.isButton()) {
        if (interaction.customId === "open-ticket") {
            nbTicket++;

            interaction.guild.channels.create("tickets-" + nbTicket, {
                parent: "1003023316317114458"
            }).then(channel => {
                var row = new Discord.MessageActionRow()
                    .addComponents(new Discord.MessageButton()
                        .setCustomId("close-ticket")
                        .setLabel("Fermer le Ticket")
                        .setStyle("DANGER")
                    );
                    interaction.member.id;
                channel.send({ content: "<@" + interaction.user.id + "> Voici Votre Ticket !:", components: [row] });
                interaction.reply({ content: "ticket correctement créé", ephemeral: true });
            });
        }
        else if (interaction.customId === "close-ticket") {
            interaction.channel.setParent("1003033517455855676")

            var row = new Discord.MessageActionRow()
                .addComponents(new Discord.MessageButton()
                    .setCustomId("delete-ticket")
                    .setLabel("Suprimer Le Ticket:")
                    .setStyle("DANGER")
                );

            interaction.message.delete();

            interaction.channel.send({ content: "Supprimer le Ticker", components: [row] });

            interaction.reply({ content: "ticket archiver !", ephemeral: true });
        }
        else if (interaction.customId === "delete-ticket") {
            interaction.reply({ content: "Ticket Supprimé", ephemeral: true });
        }
    }
});

Client.on("messageCreate", message => {
    if (message.author.bot) return;

    //!youtube
    if (message.content === prefix + "youtube") {
        const embed = new Discord.MessageEmbed()
            .setTitle("**Liste des commandes:**")
            .setColor("#0055ff")
            .setAuthor("Rp Québec", "https://cdn.discordapp.com/attachments/997631043706306671/1003021842434498693/Logo_PNG_V.2.png")
            .addField("Suni", "https://www.youtube.com/channel/UCPXGSbpmTw8n-ABIZDenBDA")
        message.channel.send({ embeds: [embed] });
    }

    //!presentation
    if (message.content === prefix + "presentation") {
        const embed = new Discord.MessageEmbed()
            .setTitle("**Présentation de Rp Québec:**")
            .setColor("#0055ff")
            .setAuthor("Rp Québec", "https://cdn.discordapp.com/attachments/997631043706306671/1003021842434498693/Logo_PNG_V.2.png")
            .addField("C'est quoi?", "RP Québec est un serveur communautaire qui existe depuis le 30 juillets 2022, nous sommes est aussi un serveur Fivem avec FivePD de Plus,\n nous avons un staff très actif et nous rajoutons souvent des choses sur le serveur !\n Il ne reste plus qu'à nous rejoindre!\n https://discord.gg/cqAMkeQQ9B")
            .addField("Notre Chaine YouTube", "Vous pouvez aussi vous abonnez à notre chaine youtube et regardez les tuto pour decouvrire des choses ! https://www.youtube.com/channel/UCtRhacImWY470PhZdBNi5ZA");
        message.channel.send({ embeds: [embed] });
    }

    //!aide
    if (message.content === prefix + "aide") {
        const embed = new Discord.MessageEmbed()
            .setTitle("**Liste des commandes:**")
            .setColor("#0055ff")
            .setAuthor("Rp Québec", "https://cdn.discordapp.com/attachments/997631043706306671/1003021842434498693/Logo_PNG_V.2.png")
            .addField("!youtube", "Cette commande affiche les chaines youtube des fondateur / Modo / Admin !")
            .addField("!rules", "Cette commande Affiche le règlement du serveur Discord!")
            .addField("!Warning!", "**Pour faire ces commande je vous pris De les faire juste dans** #📉・𝗖𝗠𝗗");
        message.channel.send({ embeds: [embed] });
    }
    //!regle
    else if (message.content === prefix + "regle") {
        const embed = new Discord.MessageEmbed()
            .setAuthor("Rp Québec", "https://cdn.discordapp.com/attachments/997631043706306671/1003021842434498693/Logo_PNG_V.2.png")
            .setTitle("**- Règlement de Rp Québec:**")
            .setColor("#0055ff")
            .addField("AVERTISSEMENT", "Le règlement se doit d’être lu et approuvé dès la première arrivée sur le serveur. De plus, les conditions d’utilisation de Discord sont à respecter. J'en profite pour vous rappeler que le règlement est non-exhaustif.")
            .addField("🌐・Générale", "• Votre comportement se doit d’être respectueux de tous. \n• Pensez à lire les messages épinglés des salons où vous allez.\n• Les contenus pornographiques, religieux et politiques ainsi que les propos discriminatoires sont strictement interdits.\n• Votre langage devra rester correct sur l'ensemble du serveur. \n• Les pseudonymes ou noms de jeux inappropriés (pornographie, publicité, insultes ...) sont strictement interdits. Votre pseudo se doit d'être lisible et sans caractères spéciaux pouvant empêcher de mentionner.\n• Vous serez tenu seul responsable du contenu que vous postez. \n• Il vous est interdit d'enregistrer les salons écrits et vocaux. \n • Le RP, qu'il soit écrit ou vocal, est formellement interdit. \n• Toute utilisation d'un client modifié pour contourner les permissions est interdite et conduira à un bannissement définitif de ce Discord.")
            .addField("✏️・À Écrits", "• Le spam, flood, spoil et abus d'emojis seront sanctionnés.\n• Les liens sont interdits.\n• La diffusion d'informations privées ou de photos sans l'accord de la personne est interdite.\n• La publicité est interdite en messages privés. Les incitations à regarder un statut publicitaire seront sanctionnées.\n• Les commandes doivent être effectuées dans le #📉・𝗖𝗠𝗗\n • Il est strictement interdit de mentionner @SuniQC#7157")
            .addField("🔊・Salons Vocaux", "• Les nuisances en vocal sont interdites.\n• Le changement répétitif de salon est interdit.\n• Le spam auditif ainsi que les screamers audio sont strictement interdits.\n• La musique n’est autorisée que dans les salons prévus à cet effet.\n• Les modificateurs et soundboard sont lourdement sanctionnés.\m• Tout enregistrement ou diffusion des canaux vocaux, publiques ou d'animation, est lourdement sanctionné.\n• Toute  activation de la caméra est lourdement sanctionné")
            .addField("Notre Chaine YouTube", "Vous pouvez aussi vous abonnez à notre chaine youtube et regardez les tuto pour decouvrire des choses ! https://www.youtube.com/channel/UCtRhacImWY470PhZdBNi5ZA");
        message.channel.send({ embeds: [embed] });
    }
});

//Arriver
Client.on('guildMemberAdd', async member => {
    console.log("Un membre est arrive !");
    Client.channels.cache.get("1002437487735615491").send("<@" + member.id + "> est arrivé !");
    
    member.roles.add("1003013363011420190");
    
    var canvas = Canvas.createCanvas(1024, 500);

    ctx = canvas.getContext("2d");

    var backround = await Canvas.loadImage("./backround.png");
    ctx.drawImage(backround, 0, 0, 1024, 500);

    ctx.font = "42px Impact";
    ctx.fillStyle = "#FFFFFF";
    ctx.textAlign = "center";
    ctx.fillText(member.user.tag.toUpperCase(), 512, 410);

    ctx.beginPath();
    ctx.arc(512, 166, 119, 0, Math.PI * 2);
    ctx.closePath();
    ctx.clip();

    var avatar = await Canvas.loadImage(member.user.displayAvatarURL({
        format: "png",
        size: 1024
    }));

    ctx.drawImage(avatar, 393, 47, 238, 238);

    var attachment = new Discord.MessageAttachment(canvas.toBuffer(), "welcome.png");

    Client.channels.cache.get("1002437487735615491").send({ files: [attachment] });
});

//depart
Client.on("guildMemberRemove", member => {
    console.log("un membre a quitté le serveur...")
    Client.channels.cache.get("1002437487735615491").send(member.displayName + " a quitter le serveur...");
});

Client.login(process.env.TOKEN);