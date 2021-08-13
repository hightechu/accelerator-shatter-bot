// sus Module
function wyr(messages) {
    var messages = ['How old are you', 'What is your favorite icecream', 'What would you do if you had 17 billion dollars'];
    var rnd = Math.floor(Math.random() * messages.length);
}
module.exports = {
    // Name of Command
    name: 'wyr',
    // Description of Command
    description: 'wyr',
    // Guild - TRUE
    guildOnly: true,
    // Cooldown
    cooldown: 2,
    // Execute Command - Parameters: message
    execute(message) {
        // Send Message
        message.channel.send(rnd);
    },
};