
const Discord = require("discord.js");
const Bot = new Discord.Client();
const config = require("./TITKOS/config.json");
const prefix = config.prefix;
const TOKEN = config.token;

//Chatt törlés

Bot.on("message", message => {
    let kuldo =  message.author;
    let cont = message.content.slice(prefix.length).split(" ");
    let args = cont.slice(1);
    if (message.content.startsWith(prefix + "delete")) {

        async  function purge() {
            message.delete();

            if (!message.member.roles.find("name", "🥵BOSS🤬")) { 
                message.channel.send("Nincs ehez jogod! :)" + kuldo.toString());
                return;
            }
        
            if(isNaN(args[0])) {
                message.channel.send('Kérlek számot adj meg! \n  Használat : "!delete szám"');
                return;
            }

            const fetched = await message.channel.fetchMessages({limit:args[0]});
            console.log(fetched.size + "üzenet találva, törlés.... ");

            message.channel.bulkDelete(fetched)
            .catch(error => console.log(`Error: ${error}`));
        } 
        purge();   
    }
});

 //bot parancsok


//Üzenet szűrés

Bot.on("message", message => {
    if (message.author.bot) return;
    if (message.author.id === "33954210154545165") return;

    let szavak = ["discord.gg/"]
    let talalt = false;

    for (var a in szavak) {
        if (message.content.toLowerCase().includes(szavak[a].toLowerCase())) talalt = true;
    }
    if (talalt) {
        message.delete();
        message.author.send("Kérlek ne hírdess más szervereket!");
    }
});

//Parancsok menüjek  

Bot.on('message', (message) =>{
    if(!message.content.startsWith(prefix)) return;
    if(message.content.startsWith(prefix + "parancsok"))
    {
        message.reply("Parancsok - [ADMIN] Üzenet törléséhez = !delete : (szám)")
    }
});    

//üzenet&válaszok

Bot.on('message', message => {
    if (message.content.includes("Csáó bobi")){
        message.channel.send("Csáó")
    }
});

//vége

Bot.on('ready', () => { 
    console.log("a discord bot sikeresen elindult")

    Bot.user.setActivity("By : Trakezone", { type: "PLAYING"});
});




Bot.login(TOKEN)
