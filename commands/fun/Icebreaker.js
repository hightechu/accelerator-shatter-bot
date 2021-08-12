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
    //how to use command properly
   
    // Arguments TRUE
    args: true,
    // Execute Command - Parameters: message args
        
    // Guild - TRUE
    guildOnly: true,
    // Cooldown
    cooldown: 2,
    // Execute Command - Parameters: message
    execute(message, args) {
       
            // rndmessage(message)
            random(message)
        

   } 
  }