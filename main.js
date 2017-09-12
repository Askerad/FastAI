const Discord = require('discord.js');
const bot = new Discord.Client();
const privacy = require('./token');

this.roles =
    {
        "Fast Racing NEO" : "351807237003411456",
        "Fast RMX" : "351807324672884737",
        "Subsonic Racer" : "351807361725366272",
        "Supersonic Racer" : "351807419820539917",
        "Hypersonic Racer" : "351807468860473355",
        "announcements" : "351807522341912587",
        "Nintendo News" : "352883591996506113"
    }

bot.on('ready', () => {
    console.log("[LOG] I am ready");

})

bot.on('message', message => {

    let prefix = "/";

    if (!message.content.startsWith(prefix) || message.author.bot) return;
    console.log("[DEBUG] message : " + message.content);


    if (message.content === prefix + "ping") {
        message.channel.send("pong");
        console.log("[LOG] Ping done");
    }

    if (message.content === prefix + "listroles") {
        console.log("[LOG] Listing Roles");


        for(role of message.guild.roles)
        {
            console.log(role[1].name + " : " + role[1].id);
        }
    }

    var reg = new RegExp('\\' + prefix + 'tag\(\s.*|)');
    if (reg.test(message.content))
    {
        reg = /\/tag\s?/
        // tag = message.content.split(" ")[1];

        tag = message.content.replace(reg,"")

        if((tag != "") && (tag != undefined))
        {
            console.log("[LOG] Tag to apply : " + tag);
            console.log("[LOG] Applying to : " + message.member.username);

            if (role = this.roles[tag]) {
                console.log(message.author);

                message.member.addRole(role);
            }
            else {
                message.channel.send("Tag doesn't exists.");
            }
        }
        else
        {
            message.channel.send("/tag usage : `/tag <tag_to_apply>`");
        }

    }

})

bot.login(privacy.getToken());
