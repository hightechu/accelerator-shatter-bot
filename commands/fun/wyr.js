function random(message){
    var messages = require('../fun/wyr.json')
    var rnd = Math.floor(Math.random() * messages.length);
    


    message.channel.send(messages[rnd]);
}
module.exports = {
    // Name of Command
    name: 'wyr',
    // Description of Command
    description: 'wyr!',
    //guild-true
    guildOnly: true,
    // Cooldown
    cooldown: 2,
    // Execute Command - Parameters: message
    execute(message) {
        
        var messages = rnd.split("Would you rather ")[1]
        var Option1 = messages.split(" or ")[0]
        var Option2 = messages.split(" or ")[1]
     
    
        reply = {
            embed: {
                color: 3447003,
                "title": "Lets Play Would You Rather! \n",
                "description": `Would you rather \n 🅰️ ${Option1} \n or \n :regional_indicator_b: ${Option2}`,
               
            },
        }
        wyrmessage = message.channel.send(reply);
        wyrmessage.react('🅰️')
        wyrmessage.react('🇧')
    
    
    }
        

   } 
  