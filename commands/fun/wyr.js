// wyr Module
function random(message){
    var messages = require('../fun/wyr.json');
    var rnd = Math.floor(Math.random() * messages.length);

    message.channel.send(messages[rnd])
    .then(function (message) {
        message.react("1️⃣")
        message.react("2️⃣")
             message.pin()
              });
}
module.exports = {
    // Name of Command
    name: 'wyr',
    // Description of Command
    description: 'wyr',
    //how to use command properly
    // Guild - TRUE
    guildOnly: true,
    // Cooldown
    cooldown: 2,
    // Execute Command - Parameters: message
    execute(message) {
        random(message)
        

        }
        
    }

  



// // sus Module
// function wur(messages) {
//     var messages = ['How old are you', 'What is your favorite icecream', 'What would you do if you had 17 billion dollars'];
//     var rnd = Math.floor(Math.random() * messages.length);
// }
// module.exports = {
//     // Name of Command
//     name: 'wyr',
//     // Description of Command
//     description: 'wyr',
//     // Guild - TRUE
//     guildOnly: true,
//     // Cooldown
//     cooldown: 2,
    
//     // Execute Command - Parameters: message
//     execute(message) {
//         // Send Message
//         message.channel.send(wur[messages]);
//     },
