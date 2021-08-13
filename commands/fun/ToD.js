// ToD Module
function random(message){
    var messages = ['How old are you', 'What is your favorite icecream', 'What would you do if you had 17 billion dollars'];
    var rnd = Math.floor(Math.random() * messages.length);

    message.channel.send(messages[rnd]);
}
function rndm(message){
    var messages = ['Take a bite out of the oldest fruit/vegtable in your kitchen', 'Tell someone you know that you love playing among us and wish were the imposter', 'Chug down 1 liter of water']
    var rnd = Math.floor(Math.random() * messages.length);

    message.channel.send(messages[rnd]);
}
module.exports = {
    // Name of Command
    name: 'tod',
    // Description of Command
    description: 'tod',
    //how to use command properly
    usage: '[t/d]',
    // Arguments TRUE
    args: true,
    // Execute Command - Parameters: message args
    
        
    // Guild - TRUE
    guildOnly: true,
    // Cooldown
    cooldown: 2,
    // Execute Command - Parameters: message
    execute(message, args) {
        //Construct URL
        const ToD = args;
        // Send Message
        if (ToD == 't') {
            // rndmessage(message)
            random(message)
           
        }
        else if(ToD == 'd'){
            // rndmessage(message)
            rndm(message)
            
        }
    
    },
};