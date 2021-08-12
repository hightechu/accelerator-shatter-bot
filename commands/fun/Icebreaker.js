function random(message){
    var messages = ['What’s the best trip (traveling wise) you ever had?', 'What is your favorite icecream', 'What would you do if you had 17 billion dollars'];
    var rnd = Math.floor(Math.random() * messages.length);

    message.channel.send(messages[rnd]);
}
module.exports = {
    // Name of Command
    name: 'shatter',
    // Description of Command
    description: 'shatter!',
    //guild-true
    guildOnly: true,
    // Cooldown
    cooldown: 2,
    // Execute Command - Parameters: message
    execute(message) {
       
            // rndmessage(message)
            random(message)
        

   } 
  }